export class ApiProductPublic {
    
    static async list(){
        const response          = await fetch(`https://kenzie-food-api.herokuapp.com/products`, {
            method: "GET", 
            headers: {
                "Content-Type": "application/json"
                }
        });
        
        const responseData      = await response.json();

        //O Retorno é um array de objetos com os produtos
        return responseData;
    }

}