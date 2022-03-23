import { ApiProductPrivate } from "../models/apiProductPrivate.js"

export class InterfaceDashboard{
    static templateTable(Img, nameProduct, category, description){
        const rowBody      = document.createElement('tr')
        rowBody.setAttribute('class', 'rowBody')
        const Tablebody    = document.getElementById('bodyTable-product')

        rowBody.innerHTML  = `
        <td class="img_name">
        <img class="imgProducts" src="${Img}">
        ${nameProduct}
        </td>
        <td class="tableTd">${category}</td>
        <td class="tableTd">${description}</td>
        <td>
        <button class="icon"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="icon"><i class="fa-solid fa-trash"></i></button>
        </td>
        `
        Tablebody.appendChild(rowBody)
    }

    static async renderTable(){
        const Tablebody     = document.getElementById('bodyTable-product')
        Tablebody.innerHTML = ""
        await ApiProductPrivate.list()
        ApiProductPrivate.dataProductPrivate.forEach(product => {
            const img         = product.imagem
            const nameProduct = product.nome
            const category    = product.categoria
            const description = product.descricao

            InterfaceDashboard.templateTable(img, nameProduct, category, description)
        });

    }
}