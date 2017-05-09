import {http} from './Http/Axios';
import Promise from 'bluebird';

export class Authenticate {
	constructor() {

	}

	accessToken() {
		return new Promise((resolve, reject) => {
			http.post().then(res => {
				let token = res.access_token;

				resolve(token);
			}).catch(res => {
				reject(res.response.data);
			});
		});
	}
}