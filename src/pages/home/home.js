import {InterfaceHome} from "../../../src/controllers/interfaceHome.js";
import {ApiProductPublic} from "../../../src/models/apiProductPublic.js";
import {ApiProductPrivate} from "../../../src/models/apiProductPrivate.js";
import {ApiAuthentication} from "../../../src/models/apiAuthentication.js";
import {LocalStorage} from "../../../src/models/localStorage.js";
import {Filter} from '../../../src/controllers/filter.js'

const authentication = LocalStorage.getLocalStorage("authentication");
console.log(authentication)
if (authentication){
    ApiAuthentication.userToken = authentication;
    await ApiProductPrivate.list(ApiAuthentication.userToken.token);
    InterfaceHome.templateShowcase(ApiProductPrivate.dataProductPrivate);
    InterfaceHome.fillTheCart("private");
    //Um botão para a dashboard
    //Um botão para logout --> Atualiza a página
} else{
    await ApiProductPublic.list();
    InterfaceHome.templateShowcase(ApiProductPublic.dataProductPublic);
    InterfaceHome.fillTheCart("public");
    //Um botão para o login
}

const openCart = document.getElementById("openCart");
openCart.addEventListener('click', InterfaceHome.modalCart);

const btnhomeAll = document.getElementById('BtnHomeAll')
btnhomeAll.addEventListener('click', ()=>{
    if (authentication){
        InterfaceHome.templateShowcase(ApiProductPrivate.dataProductPrivate)
    } else{
        InterfaceHome.templateShowcase(ApiProductPublic.dataProductPublic)
    }
})
const btnBreads = document.getElementById('BtnHomeBreads');
btnBreads.addEventListener('click', ()=>{
    console.log("oi")
    if (authentication){
        Filter.filterPermision('private', 'Panificadora')
    } else{
        Filter.filterPermision('public', 'Panificadora');
    }
    
});
const btnFruits = document.getElementById('BtnHomeFruits');
btnFruits.addEventListener('click', ()=>{
    if (authentication){
        Filter.filterPermision('private', 'Frutas')
    } else{
        Filter.filterPermision('public', 'Frutas');
    }
})
const btnDrinks = document.getElementById('BtnHomeDrinks');
btnDrinks.addEventListener('click', ()=>{
    if (authentication){
        Filter.filterPermision('private', 'Bebidas')
    } else{
        Filter.filterPermision('public', 'Bebidas');
    }
})