export class ApiProductPrivate {

    static async list(token) {
        const response = await fetch(`https://kenzie-food-api.herokuapp.com/my/products`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        });

        const responseData = await response.json();

        //O Retorno é um array de objetos com os produtos
        return responseData;
    }

    static async create(data, token) {

        const response = await fetch("https://kenzie-food-api.herokuapp.com/my/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        });

        const responseData = await response.json();
        //SE O TOKEN FOR INVÁLIDO --> {message: 'Token Invalido'}
        //SE O DATA FOR INCOMPLETO --> {error: 'Campo de <campo que faltou> obrigátorio'}
        //SE O TOKEN E O DATA FOREM VÁLIDOS --> cria o produto retornando um objeto com suas infos
        return responseData;
    }

    static async edit(data, token, id) {
        const response = await fetch(`https://kenzie-food-api.herokuapp.com/my/products/${id}`, {
            method: "PATCH", // Indica o tipo de requisição GET, POST, PATCH, DELETE
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        })

        const responseData = await response.json();

        //Uma string "Produto Atualizado" se tudo der certo. Se no body, tiver alguma propriedade errado também mostra essa string, mas não muda nada
        return responseData;
    }

    static async delete(token, id) {
        const response = await fetch(`https://kenzie-food-api.herokuapp.com/my/products/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })

        //Verificar o response.ok (se true, deletou corretamente)
        return response;
    }
}