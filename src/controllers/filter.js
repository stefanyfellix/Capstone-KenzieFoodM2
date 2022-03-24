import { InterfaceHome } from "./interfaceHome.js"
import { InterfaceDashboard } from "./interfaceDashboard.js"
import { ApiProductPublic } from "../models/apiProductPublic.js"
import { ApiProductPrivate } from "../models/apiProductPrivate.js"

export class Filter{
//parametro category é uma string
    static filterPermision(permission, category){
        const dataPublic  = ApiProductPublic.dataProductPublic
        const dataPrivate = ApiProductPrivate.dataProductPrivate
        if(permission === 'public'){
            const listSection = dataPublic.filter((element) => {
                console.log(element.categoria)
                return element.categoria === category
            })
            InterfaceHome.templateShowcase(listSection)
        }else if(permission === "private"){
            const listSection = dataPrivate.filter((element) => {
                return element.categoria === category
            })
            InterfaceHome.templateShowcase(listSection)
        }
    }
    
    static filterDashboardBtn(arr, category){
        const listSection = arr.filter((element) => {
            return element.categoria === category
        })
        InterfaceDashboard.renderTable(listSection)
    }

    static filterName(arr){
        const name  = document.getElementById('searchInput')
        const value = name.value.toLowerCase()

        const listName = arr.filter((element)=>{
            return element.nome.toLowerCase().includes(value)
        })
        InterfaceDashboard.renderTable(listName)
    }
}