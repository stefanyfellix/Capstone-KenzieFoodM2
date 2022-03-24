import { ApiProductPrivate } from '../../../src/models/apiProductPrivate.js'
import { InterfaceDashboard } from '../../../src/controllers/interfaceDashboard.js'
import {Filter} from '../../../src/controllers/filter.js'
import { LocalStorage } from '../../../src/models/localStorage.js'


const tokenAcess = await LocalStorage.getLocalStorage("authentication");

await ApiProductPrivate.list(tokenAcess.token);
console.log(ApiProductPrivate.dataProductPrivate)
InterfaceDashboard.renderTable(ApiProductPrivate.dataProductPrivate)


const addProductButton = document.getElementById('addProduct');
addProductButton.addEventListener('click', () => {
  InterfaceDashboard.showModal(0);
});

const btnAll    = document.getElementById('BtnAll')
btnAll.addEventListener('click', ()=>{
    InterfaceDashboard.renderTable(ApiProductPrivate.dataProductPrivate)
})
const btnBakery = document.getElementById('Btnbakery')
btnBakery.addEventListener('click', ()=>{
  Filter.filterDashboardBtn(ApiProductPrivate.dataProductPrivate, 'Panificadora')
})
const btnFruits = document.getElementById('Btnfruits')
btnFruits.addEventListener('click', ()=>{
  Filter.filterDashboardBtn(ApiProductPrivate.dataProductPrivate, 'Frutas')
})
const btnDrinks = document.getElementById('Btndrinks')
btnDrinks.addEventListener('click', ()=>{
  Filter.filterDashboardBtn(ApiProductPrivate.dataProductPrivate, 'Bebidas')
})