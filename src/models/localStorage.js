import { ApiAuthentication } from "./apiAuthentication.js";

export class LocalStorage {
  static setLocalStorage(key, userInfo) {
    const userInfoJson = JSON.stringify(userInfo);
    localStorage.setItem(key, userInfoJson);
  }

  static removeItemLocalStorage(key) {
    localStorage.removeItem(key);
  }

  static getLocalStorage(key) {
    const lg = localStorage.getItem(key);
    if (lg) {
      const lgFormatado = JSON.parse(lg);
      return lgFormatado;
    } else {
      return false;
    }
  }
}
