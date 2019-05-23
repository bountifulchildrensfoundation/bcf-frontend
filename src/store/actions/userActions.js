import axios from 'axios';

export const USER_REGISTERING = 'USER_REGISTERING';
export const USER_REGISTER_SUCCESSFUL = 'USER_REGISTER_SUCCESSFUL';
export const USER_REGISTER_FAILURE = 'USER_REGISTER_FAILURE';

export const GETTING_ACCOUNT = 'GETTING_ACCOUNT';
export const GETTING_ACCOUNT_SUCCESSFUL = 'GETTING_ACCOUNT_SUCCESSFUL';
export const GETTING_ACCOUNT_FAILURE = 'GETTING_ACCOUNT_FAILURE';

export const USER_LOGGING_IN = 'USER_LOGGING_IN';
export const USER_LOGIN_SUCCESSFUL = 'USER_LOGIN_SUCCESSFUL';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

export const EDITING_USER = 'EDITING_USER';
export const EDITING_USER_SUCCESSFUL = 'EDITING_USER_SUCCESSFUL';
export const EDITING_USER_FAILURE = 'EDITING_USER_FAILURE';

axios.defaults.baseURL = 'https://bcf-backend.herokuapp.com';
axios.interceptors.request.use(
	function(options) {
		options.headers.authorization = localStorage.getItem('token');

		return options;
	},
	function(error) {
		return Promise.reject(error);
	},
);

export const login = creds => dispatch => {
	console.log(creds);
	dispatch({ type: USER_LOGGING_IN });
	axios
		.post(`/users/login`, creds)
		.then(res => {
			dispatch({ type: USER_LOGIN_SUCCESSFUL, payload: res.data.token });
			localStorage.setItem('token', res.data.token);
		})
		.catch(err => {
			console.log(err);
			dispatch({ type: USER_LOGIN_FAILURE, payload: err.message });
		});
};

export const register = credentials => dispatch => {
	dispatch({ type: USER_LOGGING_IN });
	axios
		.post(`/users/register`, credentials)
		.then(res => {
			dispatch({ type: USER_LOGIN_SUCCESSFUL, payload: res.data.token });
			localStorage.setItem('token', res.data.token);
		})
		.catch(err => {
			console.log(err);
			dispatch({ type: USER_LOGIN_FAILURE, payload: err.message });
		});
};
