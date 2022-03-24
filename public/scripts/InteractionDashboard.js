import { ApiProductPublic } from '../../src/models/apiProductPublic.js'
import { InterfaceDashboard } from '../../src/controllers/interfaceDashboard.js'
import {Filter} from '../../src/controllers/filter.js'


const btnAll    = document.getElementById('BtnAll')
btnAll.addEventListener('click', ()=>{
    InterfaceDashboard.renderTable(ApiProductPublic.dataProductPublic)
})
const btnBakery = document.getElementById('Btnbakery')
btnBakery.addEventListener('click', ()=>{
  Filter.filterDashboardBtn(ApiProductPublic.dataProductPublic, 'Panificadora')
})
const btnFruits = document.getElementById('Btnfruits')
btnFruits.addEventListener('click', ()=>{
  Filter.filterDashboardBtn(ApiProductPublic.dataProductPublic, 'Frutas')
})
const btnDrinks = document.getElementById('Btndrinks')
btnDrinks.addEventListener('click', ()=>{
  Filter.filterDashboardBtn(ApiProductPublic.dataProductPublic, 'Bebidas')
})