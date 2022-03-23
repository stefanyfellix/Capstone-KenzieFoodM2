export class ApiAuthentication{
    static userToken = "";
    
    static async signUp(data) {
        const response      = await fetch("https://kenzie-food-api.herokuapp.com/auth/register", {
            method: "POST", // Indica o tipo de requisição GET, POST, PATCH, DELETE
            headers: {
            "Content-Type": "application/json", // Indica o tipo de dado da requisição
            },
            body: JSON.stringify(data), // Informando as informações do usuário
        });

        //Se usuário já existe --> {status: 'Error', message: 'User Already Exists!'}
        //Se usuário não existe --> {createdAt: "2022-03-22T12:35:31.068Z", email: "equipe1-teste2@gmail.com", id: 32, name: "equipe1-teste2", password: "$2a$08$3Pg1qyuXNs5k8lv0iZrYMuC3kPlZTbVUc.4vkb7LG3EvD.bSxx4OK", updatedAt: "2022-03-22T12:35:31.068Z"}

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
        const errorMessage = document.getElementById("errorMessage")
        if (responseData.status !== "Error") {
            errorMessage.classList.remove('hide')
            errorMessage.classList.add("show")
            ApiAuthentication.userToken  = responseData;
        }

        return responseData;
    }
}