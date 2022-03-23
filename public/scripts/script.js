import { InterfaceDashboard } from '../../src/controllers/interfaceDashboard.js'

const callRegisterModal = document.getElementById('registerButton')
const callEditProductModal = document.getElementById('editProductButton')
const callStatusModal = document.getElementById('callStatusModal')

//0 = Modal de registro; 1 = Modal de edição.
callRegisterModal.addEventListener('click', () => {
  InterfaceDashboard.showModal(0)
})
callEditProductModal.addEventListener('click', () => {
  InterfaceDashboard.showModal(1)
})

callStatusModal.addEventListener('click', () => {
  InterfaceDashboard.statusMessageModal(201)
})