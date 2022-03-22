import {ApiAuthentication} from './../models/apiAuthentication.js'


export class UserInteraction{

    static getLoginData = (event) => {
        event.preventDefault()

        const inputs = event.target
        const loginClient = {}
        for (let i = 0; i < inputs.length; i++){
            if (inputs[i].name){
                loginClient[inputs[i].name] = inputs[i].value
            }

            inputs[i].value = ""
        }
        ApiAuthentication.login(loginClient)
    }
}