import "reflect-metadata";
import { Container } from "inversify";

import { TYPES } from "./types";
import { IRestClientFactory, RestClientFactory } from "../restClient/restClient";


const myContainer = new Container();

//Crowdin service
myContainer.bind<IRestClientFactory>(TYPES.IRestClientFactory).to(RestClientFactory);

export { myContainer };
