 export class ApiProductPublic {
    
    static dataProduct 
    static async list(){
        const response          = await fetch(`https://kenzie-food-api.herokuapp.com/products`, {
            method: "GET", 
            headers: {
                "Content-Type": "application/json"
                }
        });
        
        const responseData      = await response.json();

        //A variável recebe como valor o array 
        ApiProductPublic.dataProduct = responseData;
    }
}