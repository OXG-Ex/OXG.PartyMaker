import axios, { AxiosRequestConfig, AxiosInstance } from "axios";


export class AxiosWrapper {
    public static create(config?: AxiosRequestConfig): AxiosInstance {
        const axiosInstance = axios.create(config);

        this.useInterceptor(axiosInstance);

        return axiosInstance;
    }

    private static useInterceptor = (axios: AxiosInstance): void => {
        this.setupResponseInterceptor(axios);
        this.setupRequestInterceptor(axios);
    };

    private static setupRequestInterceptor = (axiosInstance: AxiosInstance) => {
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

    private static setupResponseInterceptor = (axiosInstance: AxiosInstance) => {
        axiosInstance.interceptors.response.use(
            // @ts-ignore: Object is possibly 'null'.
            null,
            error => this.runErrorHandler(error)
        );
    };

    private static runErrorHandler = (error: any): any => {
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
