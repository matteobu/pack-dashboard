import { redirect } from '@sveltejs/kit';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const { pathname } = event.url;

	// List of routes to redirect to /resources
	const redirectRoutes = [
		'/',
		'/dashboard',
		'/users',
		'/feedbacks',
		'/programs',
		'/counterparties',
		'/events'
	];

	// If the pathname matches any redirect route, redirect to /resources
	if (redirectRoutes.includes(pathname)) {
		throw redirect(302, '/resources');
	}

	// Otherwise, continue with normal request handling
	return await resolve(event);
};
