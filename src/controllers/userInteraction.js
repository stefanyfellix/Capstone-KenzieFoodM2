import { ApiProductPrivate } from "./../../src/models/apiProductPrivate.js"
import { ApiAuthentication } from "./../../src/models/apiAuthentication.js"

export class UserInteraction {

  static categoryValue = ''

  static registerNewProduct(event) {
    event.preventDefault()

    const inputs = event.target
    const productValues = {}

    for (let i = 0; i < inputs.length; i++) {
      const { name, value } = inputs[i]

      if (name) {
        productValues[name] = value
      }
    }
    productValues["categoria"] = this.categoryValue

    if (productValues.preco > 0) {
      ApiProductPrivate.create(productValues, token)
      productPrice.classList.add('hidden')
    } else {
      productPrice.classList.remove('hidden')
    }
  }

  static editProduct(event, token, id) {
    event.preventDefault()

    const inputs = event.target
    const productValues = {}

    for (let i = 0; i < inputs.length; i++) {
      const { name, value } = inputs[i]

      if (name) {
        productValues[name] = value
      }
    }
    productValues["categoria"] = this.categoryValue

    if (productValues.preco > 0) {
      ApiProductPrivate.edit(productValues, token, id)
      productPrice.classList.add('hidden')
    } else {
      productPrice.classList.remove('hidden')
    }
  }

  static deleteProduct(event, token, id) {
    event.preventDefault()
    ApiProductPrivate.delete(token, id)
  }

  static async getLoginData(event){
    event.preventDefault()

    const inputs = event.target
    const loginClient = {}
    for (let i = 0; i < inputs.length; i++){
        if (inputs[i].name){
            loginClient[inputs[i].name] = inputs[i].value
        }

        inputs[i].value = ""
    }

    const response = await ApiAuthentication.login(loginClient);
    //Esse erro indica se o usuário não existe ou se a senha está incorreta, que tal fazer uma tratativa para cada? 
    if (response.error){
      const errorMessage = document.getElementById("errorMessage");
      errorMessage.innerHTML = "Usuário e/ou senha inválidos. <span>Tente novamente ou faça seu cadastro.";
    } else{
      window.open("../home/home.html", "_self");
    }
  }

  static async getDataUser(event){
    event.preventDefault()

    const inputs = event.target
    const dataUser = {}
    
    for (let i = 0; i < inputs.length; i++){
        if (inputs[i].name){
          dataUser[inputs[i].name] = inputs[i].value
        }
        inputs[i].value = "";
    }

    const response = await ApiAuthentication.signUp(dataUser);

    if (response === "User Already Exists!"){
      const errorMessage = document.getElementById('errorMessage')
      errorMessage.classList.remove('hide')
      errorMessage.classList.add("show")
    } else{
      window.open("../login/login.html", "_self");
    }
  }
}


