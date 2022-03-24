import { LocalStorage } from "../models/localStorage.js"
import { UserInteraction } from "./userInteraction.js"
import { ApiProductPublic } from "./../models/apiProductPublic.js"

const body = document.querySelector('body')
const token = LocalStorage.getLocalStorage()

export class InterfaceDashboard {

    static templateTable(Img, nameProduct, category, description, id) {
        const rowBody = document.createElement('tr')
        rowBody.setAttribute('id', id)
        rowBody.setAttribute('class', 'rowBody')
        const Tablebody = document.getElementById('bodyTable-product')

        rowBody.innerHTML = `
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

    static renderTable(arr) {
        const Tablebody = document.getElementById('bodyTable-product')
        Tablebody.innerHTML = ""
        arr.forEach(product => {
            const img = product.imagem
            const nameProduct = product.nome
            const category = product.categoria
            const description = product.descricao
            const id = product.id

            InterfaceDashboard.templateTable(img, nameProduct, category, description, id)
        });
    }

    static showModal(whichModal, id) {

        const modal = document.createElement('div')
        modal.classList.add('modal--wrapper')

        const spanTitle = document.createElement('span')
        modal.appendChild(spanTitle)

        const modalTitle = document.createElement('h2')
        modalTitle.classList.add('modal--title')
        modalTitle.innerText = 'Cadastro de produto'
        spanTitle.appendChild(modalTitle)

        const closeModal = document.createElement('p')
        closeModal.innerText = 'X'
        closeModal.addEventListener('click', () => {
            modal.classList.add('hidden')
        })
        spanTitle.appendChild(closeModal)

        const registerProductForm = document.createElement('form')
        registerProductForm.method = 'POST'
        registerProductForm.classList.add('modal')
        registerProductForm.id = 'registerProductForm'
        modal.appendChild(registerProductForm)

        const nameLabel = document.createElement('label')
        nameLabel.setAttribute('for', 'productName')
        nameLabel.innerText = 'Nome do produto'
        registerProductForm.appendChild(nameLabel)

        const nameInput = document.createElement('input')
        nameInput.type = 'text'
        nameInput.name = 'nome'
        nameInput.id = 'productName'
        nameInput.placeholder = 'Digitar o nome'
        nameInput.setAttribute('required', '')
        registerProductForm.appendChild(nameInput)

        const descriptionLabel = document.createElement('label')
        descriptionLabel.setAttribute('for', 'productDescription')
        descriptionLabel.innerText = 'Descrição'
        registerProductForm.appendChild(descriptionLabel)

        const descriptionInput = document.createElement('textarea')
        descriptionInput.name = 'descricao'
        descriptionInput.id = 'productDescription'
        descriptionInput.placeholder = 'Digitar a descrição'
        descriptionInput.setAttribute('required', '')
        registerProductForm.appendChild(descriptionInput)

        const categoryLabel = document.createElement('label')
        categoryLabel.setAttribute('for', 'productCategory')
        registerProductForm.appendChild(categoryLabel)

        const categoryButtons = document.createElement('div')
        categoryButtons.id = 'productCategory'
        categoryLabel.appendChild(categoryButtons)

        const bakeryButton = document.createElement('button')
        bakeryButton.type = 'button'
        bakeryButton.name = 'categoria'
        bakeryButton.value = 'Panificadora'
        bakeryButton.classList.add('category--button')
        bakeryButton.innerText = 'Panificadora'
        bakeryButton.addEventListener('click', (event) => {
            UserInteraction.categoryValue = event.target.value
            bakeryButton.classList.add('active')
            fruitsButton.classList.remove('active')
            drinksButton.classList.remove('active')
        })
        categoryButtons.appendChild(bakeryButton)

        const fruitsButton = document.createElement('button')
        fruitsButton.type = 'button'
        fruitsButton.name = 'categoria'
        fruitsButton.value = 'Frutas'
        fruitsButton.classList.add('category--button')
        fruitsButton.innerText = 'Frutas'
        fruitsButton.addEventListener('click', (event) => {
            UserInteraction.categoryValue = event.target.value
            fruitsButton.classList.add('active')
            bakeryButton.classList.remove('active')
            drinksButton.classList.remove('active')
        })
        categoryButtons.appendChild(fruitsButton)

        const drinksButton = document.createElement('button')
        drinksButton.type = 'button'
        drinksButton.name = 'categoria'
        drinksButton.value = 'Bebidas'
        drinksButton.classList.add('category--button')
        drinksButton.innerText = 'Bebidas'
        drinksButton.addEventListener('click', (event) => {
            UserInteraction.categoryValue = event.target.value
            drinksButton.classList.add('active')
            bakeryButton.classList.remove('active')
            fruitsButton.classList.remove('active')
        })
        categoryButtons.appendChild(drinksButton)

        const priceLabel = document.createElement('label')
        priceLabel.setAttribute('for', 'productPrice')
        priceLabel.innerText = 'Valor do produto'
        registerProductForm.appendChild(priceLabel)

        const priceInput = document.createElement('input')
        priceInput.type = 'number'
        priceInput.name = 'preco'
        priceInput.id = 'productPrice'
        priceInput.placeholder = 'Digite o valor aqui'
        priceInput.setAttribute('required', '')
        registerProductForm.appendChild(priceInput)

        const wrongPrice = document.createElement('p')
        wrongPrice.classList.add('wrong--price', 'hidden')
        wrongPrice.innerText = 'Preço deve ser maior que 0'
        registerProductForm.appendChild(wrongPrice)

        const imageLabel = document.createElement('label')
        imageLabel.setAttribute('for', 'productImage')
        imageLabel.innerText = 'Link da imagem'
        registerProductForm.appendChild(imageLabel)

        const imageUrlInput = document.createElement('input')
        imageUrlInput.type = 'url'
        imageUrlInput.name = 'imagem'
        imageUrlInput.id = 'productImage'
        imageUrlInput.placeholder - 'Inserir Link'
        imageUrlInput.setAttribute('required', '')
        registerProductForm.appendChild(imageUrlInput)

        const submitButton = document.createElement('button')
        submitButton.type = 'submit'
        submitButton.id = 'submitProductInfo'
        submitButton.innerText = 'Cadastrar Produto'
        submitButton.addEventListener('submit', () => {
            modal.classList.add('hidden')
            UserInteraction.registerNewProduct()
        })
        registerProductForm.appendChild(submitButton)

        if (whichModal === 1) {
            modalTitle.innerText = 'Editar produto'
            registerProductForm.removeChild(submitButton)

            nameInput.removeAttribute('required', '')
            descriptionInput.removeAttribute('required', '')
            priceInput.removeAttribute('required', '')
            imageUrlInput.removeAttribute('required', '')

            const span = document.createElement('span')
            registerProductForm.appendChild(span)

            const deleteProductFromApi = document.createElement('button')
            deleteProductFromApi.type = 'click'
            deleteProductFromApi.id = 'deleteProduct'
            deleteProductFromApi.innerText = 'Excluir'
            deleteProductFromApi.addEventListener('click', (event) => {
                event.preventDefault()
                modal.classList.add('hidden')
                this.deleteModal()
            })
            span.appendChild(deleteProductFromApi)

            const saveEditedProduct = document.createElement('button')
            saveEditedProduct.type = 'submit'
            saveEditedProduct.id = 'saveProductChange'
            saveEditedProduct.innerText = 'Salvar Aterações'
            saveEditedProduct.addEventListener('submit', (event) => {
                modal.classList.add('hidden')
                UserInteraction.editProduct(event, token, id)

            })
            span.appendChild(saveEditedProduct)
        }

        body.appendChild(modal)
    }

    static deleteModal(id) {
        const deleteModal = document.createElement('div')
        deleteModal.classList.add('modal--wrapper', 'delete--modal')

        const modalTitle = document.createElement('h2')
        modalTitle.classList.add('modal--title')
        modalTitle.innerText = 'Cadastro de produto'
        deleteModal.appendChild(modalTitle)

        const modalText = document.createElement('h1')
        modalText.innerText = 'Tem certeza que deseja excluir o produto?'
        deleteModal.appendChild(modalText)

        const confirmationButtons = document.createElement('div')
        confirmationButtons.classList.add('confirm--buttons')
        deleteModal.appendChild(confirmationButtons)

        const acceptDelete = document.createElement('button')
        acceptDelete.classList.add('deleteModalButton')
        acceptDelete.innerText = 'Sim'
        acceptDelete.addEventListener('click', (event) => {
            UserInteraction.deleteProduct(event, token, id)
            deleteModal.classList.add('hidden')
        })
        confirmationButtons.appendChild(acceptDelete)

        const refuseDelete = document.createElement('button')
        refuseDelete.classList.add('deleteModalButton')
        refuseDelete.innerText = 'Não'
        refuseDelete.addEventListener('click', () => {
            deleteModal.classList.add('hidden')
        })
        confirmationButtons.appendChild(refuseDelete)

        body.appendChild(deleteModal)
    }

    static statusMessageModal(status) {
        const statusModal = document.createElement('div')
        statusModal.classList.add('modal--wrapper')
        statusModal.classList.add('status--modal')

        const spanTitle = document.createElement('span')
        statusModal.appendChild(spanTitle)

        const modalTitle = document.createElement('h2')
        modalTitle.classList.add('modal--title')
        modalTitle.innerText = 'Status'
        spanTitle.appendChild(modalTitle)

        const closeModal = document.createElement('p')
        closeModal.innerText = 'X'
        closeModal.addEventListener('click', () => {
            statusModal.classList.add('hidden')
        })
        spanTitle.appendChild(closeModal)

        const statusMessage = document.createElement('p')
        statusMessage.classList.add('status--message')
        statusMessage.innerText = 'Produto adicionado com sucesso'
        statusModal.appendChild(statusMessage)

        if (status !== 201) {
            statusMessage.innerText = 'Ocorreu algum erro, o produto não foi adicionado'
            statusModal.style.borderBottom = '8px solid var(--color-primary)'
        }

        body.appendChild(statusModal)
    }
}