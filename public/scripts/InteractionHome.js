import { ApiProductPrivate } from '../../src/models/apiProductPrivate.js';
import { InterfaceHome } from '../../src/controllers/interfaceHome.js';
import {Filter} from '../../src/controllers/filter.js'


const btnhomeAll = document.getElementById('BtnHomeAll')
btnhomeAll.addEventListener('click', ()=>{
    InterfaceHome.templateShowcase(ApiProductPrivate.dataProductPrivate)
})
const btnBreads = document.getElementById('BtnHomeBreads');
btnBreads.addEventListener('click', ()=>{
    Filter.filterPermision('Padaria')
});
const btnFruits = document.getElementById('BtnHomeFruits');
btnFruits.addEventListener('click', ()=>{
    Filter.filterPermision('Frutas')
})
const btnDrinks = document.getElementById('BtnHomeDrinks');
btnDrinks.addEventListener('click', ()=>{
    Filter.filterPermision('Bebidas')
})