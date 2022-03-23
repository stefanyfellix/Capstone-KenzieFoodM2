import { UserInteraction } from "./userInteraction.js"

const body = document.querySelector('body')

export class InterfaceDashboard {

  static showModal(whichModal) {
    const modal = document.createElement('div')
    modal.classList.add('modal--wrapper')

    const modalTitle = document.createElement('h2')
    modalTitle.classList.add('modal--title')
    modalTitle.innerText = 'Cadastro de produto'
    modal.appendChild(modalTitle)

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
    nameInput.setAttribute('required', "")
    registerProductForm.appendChild(nameInput)

    const descriptionLabel = document.createElement('label')
    descriptionLabel.setAttribute('for', 'productDescription')
    descriptionLabel.innerText = 'Descrição'
    registerProductForm.appendChild(descriptionLabel)

    const descriptionInput = document.createElement('textarea')
    descriptionInput.name = 'descricao'
    descriptionInput.id = 'productDescription'
    descriptionInput.placeholder = 'Digitar a descrição'
    descriptionInput.setAttribute('required', "")
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
      Panificadora.classList.add('active')
      Frutas.classList.remove('active')
      Bebidas.classList.remove('active')
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
      Frutas.classList.add('active')
      Panificadora.classList.remove('active')
      Bebidas.classList.remove('active')
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
      Bebidas.classList.add('active')
      Panificadora.classList.remove('active')
      Frutas.classList.remove('active')
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
    priceInput.setAttribute('required', "")
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
    submitButton.addEventListener('submit', UserInteraction.registerNewProduct)
    registerProductForm.appendChild(submitButton)

    if (whichModal === 1) {
      modalTitle.innerText = 'Editar produto'
      registerProductForm.removeChild(submitButton)

      const span = document.createElement('span')
      registerProductForm.appendChild(span)

      const deleteProductFromApi = document.createElement('button')
      deleteProductFromApi.type = 'click'
      deleteProductFromApi.id = 'deleteProduct'
      deleteProductFromApi.innerText = 'Excluir'
      deleteProductFromApi.addEventListener('click', UserInteraction.deleteProduct)
      span.appendChild(deleteProductFromApi)

      const saveEditedProduct = document.createElement('button')
      saveEditedProduct.type = 'submit'
      saveEditedProduct.id = 'saveProductChange'
      saveEditedProduct.innerText = 'Salvar Aterações'
      saveEditedProduct.addEventListener('submit', UserInteraction.editProduct)
      span.appendChild(saveEditedProduct)
    }

    body.appendChild(modal)
  }
}