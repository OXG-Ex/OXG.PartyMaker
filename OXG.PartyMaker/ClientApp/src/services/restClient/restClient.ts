import { AxiosInstance, AxiosResponse } from "axios";
import { injectable } from "inversify";

import { AxiosWrapper } from "./axiosWrapper";


@injectable()
export class RestClient implements IRestClient {
    private _axiosInstance: AxiosInstance;

    constructor() {
        const config = {
            baseURL: window.location.origin
        };
        this._axiosInstance = AxiosWrapper.create(config);
    }

    getAxiosInstance(): AxiosInstance {
        if (this._axiosInstance) {
            return this._axiosInstance;
        }

        return this._axiosInstance;
    }

    public Post = (apiUrl: string, data?: any) => {
        return this.getAxiosInstance().post(apiUrl, data);
    };

    public Get = (apiUrl: string, data?: any) => {
        return this.getAxiosInstance().get(apiUrl, data);
    };

    public Patch = (apiUrl: string, data?: any) => {
        return this.getAxiosInstance().patch(apiUrl, data);
    };

    public Delete = (apiUrl: string, data?: any) => {
        return this.getAxiosInstance().delete(apiUrl, data);
    };
}

export interface IRestClient {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // getAxiosInstance(apiUrl: string, params: any): AxiosInstance;
    Post: (apiUrl: string, data: any) => Promise<AxiosResponse>;
    Get: (apiUrl: string, data: any) => Promise<AxiosResponse>;
    Patch: (apiUrl: string, data: any) => Promise<AxiosResponse>;
    Delete: (apiUrl: string, data: any) => Promise<AxiosResponse>;
}
