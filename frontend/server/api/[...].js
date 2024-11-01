export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig();

	if (!config.public.apiDomain) {
		throw new Error(
			'Missing `runtimeConfig.config.public.apiDomain` configuration.'
		);
	}

	const { method, url, headers } = event.req;
	const body =
		method !== 'GET' && method !== 'HEAD'
			? await readBody(event)
			: undefined;

	try {
		const response = await $fetch.raw(url, {
			method,
			baseURL: config.public.apiDomain,
			headers: {
				'content-type': headers['content-type'] || 'application/json',
				cookie: headers.cookie,
			},
			body,
		});

		for (const header of ['set-cookie', 'cache-control']) {
			if (response.headers.has(header)) {
				appendHeader(event, header, response.headers.get(header));
			}
		}

		return response._data;
	} catch (error) {
		return createError({
			statusCode: error.response.status,
			statusMessage: error.message,
			data: error.data,
		});
	}
});
