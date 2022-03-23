import { ApiAuthentication } from "./apiAuthentication.js";

export class LocalStorage {
  static setLocalStorage(userInfo) {
    const authentication = JSON.stringify(userInfo);
    localStorage.setItem("authentication", authentication);
  }

  static removeItemLocalStorage() {
    localStorage.removeItem("authentication");
  }

  static getLocalStorage() {
    const lg = localStorage.getItem("authentication");
    if (lg) {

      const lgFormatado = JSON.parse(lg);
      ApiAuthentication.userToken = lgFormatado;
      return ApiAuthentication.userToken;

    } else {
      return [];
    }
  }
}
