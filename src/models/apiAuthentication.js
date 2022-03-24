import { LocalStorage } from "./localStorage.js";

export class ApiAuthentication{
    static userToken = {
        "token" : ""
    };
    
    static async signUp(data) {
        const response      = await fetch("https://kenzie-food-api.herokuapp.com/auth/register", {
            method: "POST", // Indica o tipo de requisição GET, POST, PATCH, DELETE
            headers: {
            "Content-Type": "application/json", // Indica o tipo de dado da requisição
            },
            body: JSON.stringify(data), // Informando as informações do usuário
        });

        const responseData  = await response.json();      
        return responseData;
    }

    static async login(data) {
        const response          = await fetch(
            "https://kenzie-food-api.herokuapp.com/auth/login", {
            method: "POST", // Indica o tipo de requisição GET, POST, PATCH, DELETE
            headers: {
                "Content-Type": "application/json", // Indica o tipo de dado da requisição
            },
            body: JSON.stringify(data), // Informando as informações do usuário
            }
        );

        //A resposta em formato JSON é o token de acesso se o usuário existe, se não é um objeto assim --> {status: 'Error', message: 'User does not exists'}
        const responseData      = await response.json();

        if (!responseData.error) {
            ApiAuthentication.userToken.token  = responseData;
            LocalStorage.setLocalStorage("authentication", ApiAuthentication.userToken);
        }


        return responseData;
    }
}