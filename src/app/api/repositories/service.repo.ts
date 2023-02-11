import { AxiosInstance, AxiosResponse } from 'axios';
import http from '../http';

class ServiceApiRepository {
	constructor(private httpReq: AxiosInstance) {}

	/**
	 * add new service
	 * @param payload - new tour payload
	 * @returns
	 */
	addNewService(payload: any): Promise<AxiosResponse<AppResponse<any>>> {
		return this.httpReq.post('/tour/add_new_tour', payload);
	}

	/**
	 * get services
	 * @returns
	 */
	getServices(): Promise<AxiosResponse<AppResponse<any>>> {
		return this.httpReq.get('/tours/current_tours');
	}

	/**
	 * update service
	 * @param payload - update payload
	 * @returns
	 */
	updateService(
		serviceId: string,
		payload: any
	): Promise<AxiosResponse<AppResponse<any>>> {
		return this.httpReq.patch(`/tours/update_tour/${serviceId}`, payload);
	}

	/**
	 * delete service
	 * @returns
	 */
	deleteService(serviceId: string): Promise<AxiosResponse<AppResponse<any>>> {
		return this.httpReq.delete(`/tours/delete/${serviceId}`);
	}
}
const serviceApiRepository = new ServiceApiRepository(http);
export default serviceApiRepository;
