import { ApiProductPrivate } from "./../../src/models/ApiProductPrivate.js"
import { ApiAuthentication } from "./../../src/models/apiAuthentication.js"

const productPrice = document.querySelector('.wrong--price')

const token = ApiAuthentication.userToken;

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

  static editProduct(event) {
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

  static deleteProduct(event) {
    event.preventDefault()
    ApiProductPrivate.delete(token, id)
  }
}