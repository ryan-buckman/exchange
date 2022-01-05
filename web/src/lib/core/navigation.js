import { goto } from '$app/navigation';

export const routeToPage = (route, replaceState) => {
	goto(`/${route}`, { replaceState });
};

export const goBack = (defaultRoute = '/') => {
	const ref = document.referrer;
	goto(ref.length > 0 ? ref : defaultRoute);
};
