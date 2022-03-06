import { ApiResponseStatus } from '../model/ApiResponseStatus';
import axios from 'axios';

interface ApiResponse {
	resultCode: ApiResponseStatus;
	data?: any;
}

class ApiAgent {
	private readonly SERVER_PATH = `http://localhost:8000/api`;

	private readonly SERVER_ERROR_RESPONSE: ApiResponse = {
		resultCode: 'ERROR',
		data: null,
	};

	public async get<T extends ApiResponse>(path: string, data:any) {
		try {
			return await (
				await axios.get<T>(`${this.SERVER_PATH}/${path}`, data)
			).data;
		} catch (e) {
			console.error(e);
			return this.SERVER_ERROR_RESPONSE;
		}
	}
	public async post<T extends ApiResponse>(path: string, data?: any) {
		try {
			return (await axios.post<T>(`${this.SERVER_PATH}/${path}`, data)).data;
		} catch (e) {
			console.error(e);
			return this.SERVER_ERROR_RESPONSE;
		}
	}

	public async put<T extends ApiResponse>(path: string, data?: any) {
		try {
			return (await axios.put<T>(`${this.SERVER_PATH}/${path}`, data)).data;
		} catch (e) {
			console.error(e);
			return this.SERVER_ERROR_RESPONSE;
		}
	}

	public async delete<T>(path: string, data?: any) {
		try {
			return (await axios.delete<T>(`${this.SERVER_PATH}/${path}`, data)).data;
		} catch (e) {
			console.error(e);
			return this.SERVER_ERROR_RESPONSE;
		}
	}
}

export default new ApiAgent();
