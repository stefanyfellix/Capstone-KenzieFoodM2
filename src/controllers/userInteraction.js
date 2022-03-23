import {ApiAuthentication} from './../models/apiAuthentication.js'


export class UserInteraction{

    static getDataUser = (event) => {
        event.preventDefault()

        const inputs = event.target
        const newClient = {}
        const dataUser = {}
        
        for (let i = 0; i < inputs.length; i++){
            if (inputs[i].name){
                newClient[inputs[i].name] = inputs[i].value
            }
            inputs[i].value = ""
        }
        console.log(newClient)
        console.log(dataUser)
        ApiAuthentication.signUp(newClient)
    }
}