import { ApiProductPrivate } from '../../../src/models/apiProductPrivate.js'
import { InterfaceDashboard } from '../../../src/controllers/interfaceDashboard.js'
import {Filter} from '../../../src/controllers/filter.js'
import { LocalStorage } from '../../../src/models/localStorage.js'


const tokenAcess = await LocalStorage.getLocalStorage("authentication");

await ApiProductPrivate.list(tokenAcess.token);
console.log(ApiProductPrivate.dataProductPrivate)
InterfaceDashboard.renderTable(ApiProductPrivate.dataProductPrivate)

const inputSearch = document.getElementById('searchInput')
inputSearch.addEventListener('keydown', (event)=>{
  const code = event.key
  Filter.filterName('private', "admin")
})

const filterAll = document.querySelectorAll(".filters");

const addProductButton = document.getElementById('addProduct');
addProductButton.addEventListener('click', () => {
  InterfaceDashboard.registerModal();
});

const btnAll    = document.getElementById('BtnAll')
btnAll.addEventListener('click', ()=>{
    InterfaceDashboard.renderTable(ApiProductPrivate.dataProductPrivate)
    filterAll[0].classList.remove("filters--all")
})
const btnBakery = document.getElementById('Btnbakery')
btnBakery.addEventListener('click', ()=>{
  Filter.filterDashboardBtn(ApiProductPrivate.dataProductPrivate, 'Panificadora')
  filterAll[0].classList.remove("filters--all")
})
const btnFruits = document.getElementById('Btnfruits')
btnFruits.addEventListener('click', ()=>{
  Filter.filterDashboardBtn(ApiProductPrivate.dataProductPrivate, 'Frutas')
  filterAll[0].classList.remove("filters--all")
})
const btnDrinks = document.getElementById('Btndrinks')
btnDrinks.addEventListener('click', ()=>{
  Filter.filterDashboardBtn(ApiProductPrivate.dataProductPrivate, 'Bebidas')
  filterAll[0].classList.remove("filters--all")
})