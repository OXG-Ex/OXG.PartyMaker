import axios from "axios";

/* eslint-disable @typescript-eslint/no-explicit-any */
import Axios, { AxiosInstance } from "axios";


export class AxiosInterceptors {

    public static Instance: AxiosInterceptors;

    public static init(): void {
        AxiosInterceptors.Instance = new AxiosInterceptors();
    }

    public useInterceptor = (axios: AxiosInstance): void => {
        this.setupResponseInterceptor(axios);
    };

    private setupRequestInterceptor = (axiosInstance: AxiosInstance) => {
        axiosInstance.interceptors.request.use(
            config => {
                const token = "randomToken";
                //localStorageService.getAccessToken();
                if (token) {
                    // @ts-ignore: Object is possibly 'undefined'.
                    config.headers['Authorization'] = 'Bearer ' + token;
                }
                // config.headers['Content-Type'] = 'application/json';
                return config;
            },
            error => {
                Promise.reject(error);
            }
        );
    };

    private setupResponseInterceptor = (axiosInstance: AxiosInstance) => {
        axiosInstance.interceptors.response.use(
            // @ts-ignore: Object is possibly 'null'.
            null,
            error => this.runErrorHandler(error)
        );
    };

    private runErrorHandler = (error: any): any => {
        console.error(error);
        // const statusCode = error?.response?.status;
        // switch (statusCode) {
        //     case 401: {;
        //         });
        //     }
        //     case 403: {
        //     }
        //     case 400:
        //     case 409:
        //     case 422: {
        //     }
        //     case 502:
        //     case 503: {

        //     }
        //     default: {
        //         
        //     }
        // }
    };
}




