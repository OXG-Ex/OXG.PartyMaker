import { AxiosInstance } from "axios";
import { injectable } from "inversify";

import { AxiosWrapper } from "./axiosWrapper";


@injectable()
export class RestClientFactory implements IRestClientFactory {
    getAxiosInstance(apiUrl: string, params: unknown): AxiosInstance {
        const config = {
            baseURL: `${apiUrl}`,
            params: params
        };

        return AxiosWrapper.create(config);
    }
}

export interface IRestClientFactory {
    /**
     * Returns axios instance with URL and params 
     * @param apiUrl is fully qualified URL to the API endpoint
     * @param params additional params
     */

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getAxiosInstance(apiUrl: string, params: any): AxiosInstance;
}
