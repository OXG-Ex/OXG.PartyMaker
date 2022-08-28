import "reflect-metadata";
import { Container } from "inversify";

import { TYPES } from "./types";
import { IRestClient, RestClient } from "../restClient/restClient";


const myContainer = new Container();

//Crowdin service
myContainer.bind<IRestClient>(TYPES.IRestClient).to(RestClient);

export { myContainer };
