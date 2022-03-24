import {InterfaceHome} from "../../../src/controllers/interfaceHome.js";
import {ApiProductPublic} from "../../../src/models/apiProductPublic.js";
import {ApiProductPrivate} from "../../../src/models/apiProductPrivate.js";
import {ApiAuthentication} from "../../../src/models/apiAuthentication.js";
import {LocalStorage} from "../../../src/models/localStorage.js";

const authentication = LocalStorage.getLocalStorage("authentication");
console.log(authentication)
if (authentication){
    ApiAuthentication.userToken = authentication;
    await ApiProductPrivate.list(ApiAuthentication.userToken.token);
    InterfaceHome.templateShowcase(ApiProductPrivate.dataProductPrivate);
} else{
    await ApiProductPublic.list();
    InterfaceHome.templateShowcase(ApiProductPublic.dataProduct);
}
