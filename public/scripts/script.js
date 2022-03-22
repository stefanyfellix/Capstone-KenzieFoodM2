import { ApiProductPrivate } from "./../../src/models/ApiProductPrivate.js"
import { ApiAuthentication } from "./../../src/models/apiAuthentication.js"


const registerProductForm = document.querySelector('#registerProductForm')
const token = ApiAuthentication.userToken;

const registerNewProduct = (event) => {

  const inputs = event.target
  const productValues = {}

  for (let i = 0; i < inputs.length; i++) {
    const { name, value } = inputs[i]

    if (name) {
      productValues[name] = value
    }
  }

  if (productValues.preco > 0) {
    ApiProductPrivate.create('/my/products', productValues, token)
  } window.alert("Preço deve ser maior que 0")
}

registerProductForm.addEventListener('submit', registerNewProduct)