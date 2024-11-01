const config = useRuntimeConfig();

export default defineEventHandler(async (event) => {
	const { appHost, apiDomain } = config.public;
	const target = new URL(event.node.req.url, apiDomain);
	if (!target.searchParams.get('appHost')) {
		target.searchParams.set('appHost', appHost);
	}
	const data = await sendProxy(event, target.toString(), {
		sendStream: false,
	});
	return data;
});
