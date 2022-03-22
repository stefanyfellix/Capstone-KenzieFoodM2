import { UserInteraction } from './../../src/controllers/userInteraction.js'
import { InterfaceDashboard } from '../../src/controllers/interfaceDashboard.js'


//Testes
const callRegisterModal = document.getElementById('registerButton')
const callEditProductModal = document.getElementById('editProductButton')

callRegisterModal.addEventListener('click', InterfaceDashboard.registerModal)
callEditProductModal.addEventListener('click', InterfaceDashboard.editProductModal)


//Código a ser usado
const registerProductForm = document.querySelector('#registerProductForm')
const deleteProductButton = document.querySelector('#deleteProduct')
const editProductForm = document.querySelector('#editProductForm')

const Panificadora = document.querySelector('button[value=Panificadora]')
const Frutas = document.querySelector('button[value = Frutas]')
const Bebidas = document.querySelector('button[value = Bebidas]')

registerProductForm.addEventListener('submit', UserInteraction.registerNewProduct)
editProductForm.addEventListener('submit', UserInteraction.editProduct)
deleteProductButton.addEventListener('click', UserInteraction.deleteProduct)

Panificadora.addEventListener('click', (event) => {
  UserInteraction.categoryValue = event.target.value
  Panificadora.classList.add('active')
  Frutas.classList.remove('active')
  Bebidas.classList.remove('active')
})

Frutas.addEventListener('click', (event) => {
  UserInteraction.categoryValue = event.target.value
  Frutas.classList.add('active')
  Panificadora.classList.remove('active')
  Bebidas.classList.remove('active')
})

Bebidas.addEventListener('click', (event) => {
  UserInteraction.categoryValue = event.target.value
  Bebidas.classList.add('active')
  Panificadora.classList.remove('active')
  Frutas.classList.remove('active')
})

