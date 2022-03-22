const body = document.querySelector('body')

export class InterfaceDashboard {

  static registerModal() {
    const modal = document.createElement('div')
    modal.classList.add('modal--wrapper')
    modal.innerHTML = `

    <h2 class="modal--title">Cadastro de produto</h2>
    <form id="registerProductForm" action="" method="POST" class="modal">
      <label for="productName">Nome do produto</label>
      <input type="text" name="nome" id="productName" placeholder="Digitar o nome" required>
      <label for="productDescription">Descrição</label>
      <textarea name="descricao" id="productDescription" placeholder="Digitar a descrição" required></textarea>
      <label for="productCategory">Categorias
        <div id="productCategory">
          <button type="button" name="categoria" value="Panificadora" class="category--button">Panificadora</button>
          <button type="button" name="categoria" value="Frutas" class="category--button">Frutas</button>
          <button type="button" name="categoria" value="Bebidas" class="category--button">Bebidas</button>
        </div>
      </label>
      <label for="productPrice">Valor do produto</label>
      <input type="number" name="preco" id="productPrice" placeholder="Digite o valor aqui" required>
      <p class="wrong--price hidden">Preço deve ser maior que 0</p>
      <label for="productImage">Link da imagem</label>
      <input type="url" name="imagem" id="productImage" placeholder="Inserir link" required>

      <button type="submit" id="submitProductInfo">Cadastrar Produto</button>
    </form>
    `

    body.appendChild(modal)
  }

  static editProductModal() {
    const modal = document.createElement('div')
    modal.classList.add('modal--wrapper')
    modal.innerHTML = `
    <h2 class="modal--title">Editar produto</h2>
    <form id="editProductForm" action="" method="POST" class="modal">
      <label for="productName">Nome do produto</label>
      <input type="text" name="nome" id="productName" placeholder="Digitar o nome">
      <label for="productDescription">Descrição</label>
      <textarea name="descricao" id="productDescription" placeholder="Digitar a descrição"></textarea>
      <label for="productCategory">Categorias
        <div id="productCategory">
          <button type="button" name="categoria" value="Panificadora" class="category--button">Panificadora</button>
          <button type="button" name="categoria" value="Frutas" class="category--button">Frutas</button>
          <button type="button" name="categoria" value="Bebidas" class="category--button">Bebidas</button>
        </div>
      </label>
      <label for="productPrice">Valor do produto</label>
      <input type="number" name="preco" id="productPrice" placeholder="Digite o valor aqui">
      <p class="wrong--price hidden">Preço deve ser maior que 0</p>
      <label for="productImage">Link da imagem</label>
      <input type="url" name="imagem" id="productImage" placeholder="Inserir link">

      <span>
        <button type="click" id="deleteProduct">Excluir</button>
        <button type="submit" id="saveProductChange">Salvar Alterações</button>
      </span>
    </form>
    `
    body.appendChild(modal)
  }
}