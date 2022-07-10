import { AxiosResponseHeaders, AxiosRequestConfig } from 'axios';

export interface IImageSprite<T, U = any> {
  data: T;
  status: number;
  statusText: string;
  headers: AxiosResponseHeaders;
  config?: AxiosRequestConfig<U>;
  request?: any;
}
