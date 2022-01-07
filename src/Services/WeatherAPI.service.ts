import axios, { AxiosStatic, AxiosInstance, AxiosResponse } from 'axios';

export interface ApiResponse<T = any> extends AxiosResponse<T> {}

class WeatherAPI {
  public request: AxiosInstance;

  constructor(protected axiosStatic: AxiosStatic = axios) {
    this.request = axiosStatic.create({
      baseURL: process.env.REACT_APP_API_URL_WEATHER,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });
  }

  public async get<T>(moreParams?: any): Promise<ApiResponse<T>> {
    const params = {
      appid: process.env.REACT_APP_API_KEY_WEATHER,
      units: 'metric',
      cnt: 1,
      ...moreParams
    }

    return this.request.get<T>('', { params });
  }
}

const weatherApi = new WeatherAPI()

export {
  weatherApi, WeatherAPI,
};
