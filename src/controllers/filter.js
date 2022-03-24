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
            const listSectionPublic = dataPublic.filter((element) => {
                return element.categoria === category
            })
            InterfaceHome.templateShowcase(listSectionPublic)
        }else if(permission === "private"){
            const listSectionPrivate = dataPrivate.filter((element) => {
                return element.categoria === category
            })
            InterfaceHome.templateShowcase(listSectionPrivate)
        }
    }
    
    static filterDashboardBtn(arr, category){
        const listSection = arr.filter((element) => {
            return element.categoria === category
        })
        InterfaceDashboard.renderTable(listSection)
    }

    static filterName(permission){
        const name  = document.getElementById('searchInput')
        const value = name.value.toLowerCase()

        if(permission === 'public'){
            const listNamePublic = ApiProductPublic.dataProductPublic.filter((element)=>{
                return element.nome.toLowerCase().includes(value)
            })
            InterfaceDashboard.renderTable(listNamePublic)
        }else if(permission === "private"){
            const listNamePrivate = ApiProductPrivate.dataProductPrivate.filter((element)=>{
                return element.nome.toLowerCase().includes(value)
            })
            InterfaceDashboard.renderTable(listNamePrivate)
        }
    }
}