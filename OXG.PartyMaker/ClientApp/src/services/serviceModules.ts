import { myContainer } from "./ioc/inversify.config";
import { TYPES } from "./ioc/types";
import { IRestClientFactory } from "./restClient/restClient";

export const restClientFactoryInstance = myContainer.get<IRestClientFactory>(TYPES.IRestClientFactory);
