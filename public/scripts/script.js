import { ApiProductPublic } from '../../src/models/apiProductPublic.js'
import { InterfaceDashboard } from './../../src/controllers/interfaceDashboard.js'

await ApiProductPublic.list()
InterfaceDashboard.renderTable(ApiProductPublic.dataProductPublic)

const showEditModal = document.querySelectorAll('#showEditModal')
showEditModal.forEach((button) => {
  button.addEventListener('click', () => {
    const id = button.closest('tr').id
    InterfaceDashboard.showModal(1, id)
  })
})

const showDeleteModal = document.querySelectorAll('#showDeleteModal')
showDeleteModal.forEach((button) => {
  button.addEventListener('click', () => {
    const id = button.closest('tr').id
    InterfaceDashboard.deleteModal(id)
  })
})

const showRegisterModal = document.querySelector('.addProduct')
showRegisterModal.addEventListener('click', () => {
  InterfaceDashboard.showModal(0)
})
