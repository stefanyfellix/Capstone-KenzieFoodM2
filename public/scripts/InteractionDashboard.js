import { ApiProductPrivate } from '../../src/models/apiProductPrivate.js'
import { InterfaceDashboard } from '../../src/controllers/interfaceDashboard.js'
import {Filter} from '../../src/controllers/filter.js'


const inputSearch = document.getElementById('searchInput')
inputSearch.addEventListener('keydown', (event)=>{
  const code = event.key
  Filter.filterName('public')
})

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