import { AxiosInstance, AxiosResponse } from 'axios';
import http from '../http';

class TourApiRepository {
	constructor(private httpReq: AxiosInstance) {}

	/**
	 * add new tour
	 * @param payload - new tour payload
	 * @returns
	 */
	addNewTour(payload: any): Promise<AxiosResponse<AppResponse<any>>> {
		return this.httpReq.post('/tour/add_new_tour', payload);
	}

	/**
	 * get upcoming tours
	 * @returns
	 */
	getUpcomingTours(): Promise<AxiosResponse<AppResponse<any>>> {
		return this.httpReq.get('/tours/upcomming_tours');
	}

	/**
	 * get current tours
	 * @returns
	 */
	getCurrentTours(): Promise<AxiosResponse<AppResponse<any>>> {
		return this.httpReq.get('/tours/current_tours');
	}

	/**
	 * update tour
	 * @param payload - update payload
	 * @returns
	 */
	updateTour(
		tourId: string,
		payload: any
	): Promise<AxiosResponse<AppResponse<any>>> {
		return this.httpReq.patch(`/tours/update_tour/${tourId}`, payload);
	}

	/**
	 * delete tours
	 * @returns
	 */
	deleteTour(tourId: string): Promise<AxiosResponse<AppResponse<any>>> {
		return this.httpReq.delete(`/tours/delete/${tourId}`);
	}
}
const tourApiRepository = new TourApiRepository(http);
export default tourApiRepository;
