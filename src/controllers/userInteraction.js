import { ApiProductPrivate } from "./../../src/models/apiProductPrivate.js"
import { ApiAuthentication } from "./../../src/models/apiAuthentication.js"
import { InterfaceDashboard } from "./interfaceDashboard.js"

export class UserInteraction {

  static categoryValue = ''

  static async registerNewProduct(event, token) {
    event.preventDefault()

    const productCategory = document.querySelector('.wrong--category')
    const productPrice = document.querySelector('.wrong--price')
    const modalScreen = document.querySelector('.modal--screen')
    const body = document.querySelector('body')

    const inputs = event.target
    const productValues = {}

    for (let i = 0; i < inputs.length; i++) {
      const { name, value } = inputs[i]

      if (name) {
        productValues[name] = value
      }
    }
    productValues.categoria = this.categoryValue

    await ApiProductPrivate.list(token)
    const registeredProducts = ApiProductPrivate.dataProductPrivate
    let check = 0
    registeredProducts.forEach((product) => {
      if (product.nome === productValues.nome) {
        check += 1
      }
    })

    if (check === 0) {
      if (Number(productValues.preco) <= 0) {
        productPrice.classList.remove('hidden')
      } else if (productValues.categoria === '') {
        if (Number(productValues.preco) > 0) {
          productPrice.classList.add('hidden')
        }
        productCategory.classList.remove('hidden')
      } else if (Number(productValues.preco) > 0 && productValues.categoria !== '') {
        ApiProductPrivate.create(productValues, token)
        body.removeChild(modalScreen)
        this.categoryValue = ''
      }
    } else {
      body.removeChild(modalScreen)
      InterfaceDashboard.statusMessageModal(400)
    }

    setTimeout(async () => {
      await ApiProductPrivate.list(token)
      await InterfaceDashboard.renderTable(ApiProductPrivate.dataProductPrivate)
    }, 1000)
  }

  static async editProduct(event, token, id) {
    event.preventDefault()

    const productPrice = document.querySelector('.wrong--price')
    const productCategory = document.querySelector('.wrong--category')
    const modalScreen = document.querySelector('.modal--screen')
    const body = document.querySelector('body')

    const inputs = event.target
    const productValues = {}

    for (let i = 0; i < inputs.length; i++) {
      const { name, value } = inputs[i]

      if (name) {
        productValues[name] = value
      }
    }
    productValues.categoria = this.categoryValue

    if (Number(productValues.preco) <= 0) {
      productPrice.classList.remove('hidden')
    } else if (productValues.categoria === '') {
      if (Number(productValues.preco) > 0) {
        productPrice.classList.add('hidden')
      }
      productCategory.classList.remove('hidden')
    } else if (Number(productValues.preco) > 0 && productValues.categoria !== '') {
      await ApiProductPrivate.edit(productValues, token, id)
      body.removeChild(modalScreen)
      this.categoryValue = ''
    }

    setTimeout(async () => {
      await ApiProductPrivate.list(token)
      await InterfaceDashboard.renderTable(ApiProductPrivate.dataProductPrivate)
    }, 1000)
  }

  static async deleteProduct(event, token, id) {
    event.preventDefault()
    await ApiProductPrivate.delete(token, id)

    setTimeout(async () => {
      await ApiProductPrivate.list(token)
      await InterfaceDashboard.renderTable(ApiProductPrivate.dataProductPrivate)
    }, 1000)
  }

  static async getLoginData(event) {
    event.preventDefault()

    const inputs = event.target
    const loginClient = {}
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        loginClient[inputs[i].name] = inputs[i].value
      }

      inputs[i].value = ""
    }

    const response = await ApiAuthentication.login(loginClient);
    //Esse erro indica se o usuário não existe ou se a senha está incorreta, que tal fazer uma tratativa para cada? 
    if (response.error) {
      const errorMessage = document.getElementById("errorMessage");
      errorMessage.innerHTML = "Usuário e/ou senha inválidos. <span>Tente novamente ou faça seu cadastro.";
    } else {
      window.open("../../../index.html", "_self");

    }
  }

  static async getDataUser(event) {
    event.preventDefault()
    const errorMessage = document.getElementById('errorMessage')

    const inputs = event.target
    const dataUser = {}
    
    for (let i = 0; i < inputs.length; i++){
        if (inputs[i].name){
          dataUser[inputs[i].name] = inputs[i].value
        }

        inputs[i].value = "";
    }

    const response = await ApiAuthentication.signUp(dataUser);

    if (response === "User Already Exists!") {
      errorMessage.innerHTML = "Usuário já existe<span>Tente se cadastrar com outro email ou faça seu login.";
    } else if (response.status === 'Error') {
      errorMessage.innerHTML = "Todos os campos precisam ser preenchidos corretamente.";
    } else {
      window.open("../login/login.html", "_self");
    }
  }
}
