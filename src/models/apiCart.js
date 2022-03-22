//Para usuários cadastrados (se ele não for, o carrinho será apenas pelo localstorage)
export class ApiCart{
    static async list(token){
        const response          = await fetch(`https://kenzie-food-api.herokuapp.com/cart`, {
            method: "GET", 
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              }
        });
        const responseData      = await response.json();
        //O Retorno é um array de objetos
        console.log(responseData)
        return responseData;
    }

    static async add(data, token){
        const response = await fetch("https://kenzie-food-api.herokuapp.com/cart/add", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
          });
      
          const responseData = await response.json();
          return responseData;
    }

    static async delete(token, id){
        const response = await fetch(`https://kenzie-food-api.herokuapp.com/cart/remove/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            }
          })

        return response;
    }
}