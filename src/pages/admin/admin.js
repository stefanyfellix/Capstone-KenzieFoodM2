import { InterfaceDashboard } from './../../../src/controllers/interfaceDashboard.js'

InterfaceDashboard.renderTable()

const showRegisterModal = document.querySelector('.buttons--addProduct')
showRegisterModal.addEventListener('click', () => {
  InterfaceDashboard.registerModal()
})