import { ApiProductPrivate } from '../../../src/models/ApiProductPrivate.js'
import { InterfaceDashboard } from '../../../src/controllers/interfaceDashboard.js'
import { Filter } from '../../../src/controllers/filter.js'
import { LocalStorage } from './../../models/localStorage.js'

const token = LocalStorage.getLocalStorage('authentication').token
await ApiProductPrivate.list(token)
InterfaceDashboard.renderTable(ApiProductPrivate.dataProductPrivate)

const addProductButton = document.getElementById('addProduct');
addProductButton.addEventListener('click', () => {
  InterfaceDashboard.registerModal();
});

const btnAll = document.getElementById('BtnAll')
btnAll.addEventListener('click', () => {
  InterfaceDashboard.renderTable(ApiProductPrivate.dataProductPrivate)
})
const btnBakery = document.getElementById('Btnbakery')
btnBakery.addEventListener('click', () => {
  Filter.filterDashboardBtn(ApiProductPrivate.dataProductPrivate, 'Panificadora')
})
const btnFruits = document.getElementById('Btnfruits')
btnFruits.addEventListener('click', () => {
  Filter.filterDashboardBtn(ApiProductPrivate.dataProductPrivate, 'Frutas')
})
const btnDrinks = document.getElementById('Btndrinks')
btnDrinks.addEventListener('click', () => {
  Filter.filterDashboardBtn(ApiProductPrivate.dataProductPrivate, 'Bebidas')
})