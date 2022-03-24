export class ApiProductPublic {
    
    static dataProductPublic
    static async list(){
        const response          = await fetch(`https://kenzie-food-api.herokuapp.com/products`, {
            method: "GET", 
            headers: {
                "Content-Type": "application/json"
                }
        });
        
        const responseData      = await response.json();

        ApiProductPublic.dataProductPublic = responseData
    }
}