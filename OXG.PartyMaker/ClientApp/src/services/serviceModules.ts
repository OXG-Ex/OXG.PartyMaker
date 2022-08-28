import { myContainer } from "./ioc/inversify.config";
import { TYPES } from "./ioc/types";
import { IRestClient } from "./restClient/restClient";

export const restClientInstance = myContainer.get<IRestClient>(TYPES.IRestClient);
