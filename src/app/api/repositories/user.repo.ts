import { AxiosInstance, AxiosResponse } from 'axios';
import http from '../http';

class UserApiRepository {
	constructor(private httpReq: AxiosInstance) {}

	/**
	 * create new user
	 * @param payload - new user payload
	 * @returns
	 */
	createNewUser(payload: any): Promise<AxiosResponse<AppResponse<any>>> {
		return this.httpReq.post('/', payload);
	}
}
const userApiRepository = new UserApiRepository(http);
export default userApiRepository;
