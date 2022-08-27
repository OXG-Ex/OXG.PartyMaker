import axios, { AxiosRequestConfig, AxiosInstance } from "axios";
import { AxiosInterceptors } from "./axiosInerceptors";


export class AxiosWrapper {
    public static create(config?: AxiosRequestConfig): AxiosInstance {
        const axiosInstance = axios.create(config);

        AxiosInterceptors.Instance.useInterceptor(axiosInstance);

        return axiosInstance;
    }
}
