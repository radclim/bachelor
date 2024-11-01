const config = useRuntimeConfig();

export default defineEventHandler(async (event) => {
	const { apiDomain } = config.public;
	const target = new URL(event.node.req.url, apiDomain);

	// Pick up "altTemplate" from query
	if (target.searchParams.has('altTemplate')) {
		const data = await sendProxy(event, target.toString(), {
			sendStream: false,
		});
		return data;
	}
});
