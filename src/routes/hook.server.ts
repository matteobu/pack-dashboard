import { redirect } from '@sveltejs/kit';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const { pathname } = event.url;

	const redirectRoutes = [
		'/',
		'/dashboard',
		'/users',
		'/feedbacks',
		'/programs',
		'/counterparties',
		'/events'
	];

	if (redirectRoutes.includes(pathname)) {
		throw redirect(302, '/resources');
	}
	return await resolve(event);
};
