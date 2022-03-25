import { InterfaceHome } from "./interfaceHome.js"
import { InterfaceDashboard } from "./interfaceDashboard.js"
import { ApiProductPublic } from "../models/apiProductPublic.js"
import { ApiProductPrivate } from "../models/apiProductPrivate.js"

export class Filter {
    //parametro category é uma string
    static filterPermision(permission, category) {
        const dataPublic = ApiProductPublic.dataProductPublic
        const dataPrivate = ApiProductPrivate.dataProductPrivate
        if (permission === 'public') {
            const listSection = dataPublic.filter((element) => {
                console.log(element.categoria)
                return element.categoria === category
            })
            InterfaceHome.templateShowcase(listSection)
        } else if (permission === "private") {
            const listSection = dataPrivate.filter((element) => {
                return element.categoria === category
            })
            InterfaceHome.templateShowcase(listSection)
        }
    }

    static filterDashboardBtn(arr, category) {
        const listSection = arr.filter((element) => {
            return element.categoria === category
        })
        InterfaceDashboard.renderTable(listSection)
    }

    static filterName(permission, page){
        const name  = document.getElementById('searchInput')
        const value = name.value.toLowerCase()
        console.log(value)

        if(permission === 'public'){
            console.log(ApiProductPublic.dataProductPublic)
            const listNamePublic = ApiProductPublic.dataProductPublic.filter((element)=>{
                return element.nome.toLowerCase().includes(value)
            })
            console.log(listNamePublic)
            if (page === 'home'){
                InterfaceHome.templateShowcase(listNamePublic)
            } else if (page === 'admin'){
                InterfaceDashboard.renderTable(listNamePublic)
            }
        }else if(permission === "private"){
            console.log(ApiProductPublic.dataProductPublic)
            const listNamePrivate = ApiProductPrivate.dataProductPrivate.filter((element)=>{
                return element.nome.toLowerCase().includes(value)
            })

            if (page === 'home'){
                InterfaceHome.templateShowcase(listNamePrivate)
            } else if (page === 'admin'){
                InterfaceDashboard.renderTable(listNamePrivate)
            }
        }
    }
}