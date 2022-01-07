import axios, { AxiosStatic, AxiosInstance, AxiosResponse } from 'axios';

export interface ApiResponse<T = any> extends AxiosResponse<T> {}

class AddressAPI {
  public request: AxiosInstance;

  constructor(protected axiosStatic: AxiosStatic = axios) {
    this.request = axiosStatic.create({
      baseURL: process.env.REACT_APP_API_URL_ADDRESS,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });
  }

  public async get<T>(coord?: string): Promise<ApiResponse<T>> {
    const params = {
      access_key: process.env.REACT_APP_API_KEY_ADDRESS,
      query: coord,
      limit: 1
    }
    return this.request.get<T>('', { params });
  }
}

const addressApi = new AddressAPI()

export {
  addressApi, AddressAPI,
};
