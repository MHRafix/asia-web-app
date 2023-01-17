import Cookies from 'js-cookie';

// access_token
export const getToken = () => {
	const token = Cookies.get('access_token');
	const tokenStr = JSON.parse(token as string);

	return {
		headers: {
			Authorization: `Bearer ${tokenStr}`,
		},
	};
};
