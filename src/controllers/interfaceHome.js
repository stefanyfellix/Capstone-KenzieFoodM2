export class InterfaceHome{
    
    static cardShowcase({id, nome, preco, categoria, imagem, descricao}){
        const showcase = document.getElementById("showcase");
        const card = document.createElement("section");
        const imgContainer = document.createElement("div");
        const img = document.createElement("img");
        const title = document.createElement("h2");
        const description = document.createElement("p");
        const tagContainer = document.createElement("div");
        const category = document.createElement("span");
        const divContainer = document.createElement("div");
        const price = document.createElement("p");
        const addCart = document.createElement("button");
    
        card.classList.add("showcase--card");
        imgContainer.classList.add("card--imgContainer");
        title.classList.add("card--title");
        description.classList.add("card--description");
        tagContainer.classList.add("card--tagContainer");
        category.classList.add("card--tag");
        divContainer.classList.add("card--divContainer");
        price.classList.add("card--price");
        addCart.classList.add("card--addCart");
    
        card.id = id;
        //addCart.addEventListener('click')
    
        img.src = imagem;
        title.innerText = nome;
        description.innerText = descricao;
        category.innerText = categoria;
        price.innerText = "R$ " + preco;
    
        imgContainer.appendChild(img);
        tagContainer.appendChild(category);
        divContainer.appendChild(price);
        divContainer.appendChild(addCart);
    
        card.appendChild(imgContainer);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(tagContainer);
        card.appendChild(divContainer);
    
        showcase.appendChild(card);
    }

    static templateShowcase(arrayOfProducts){
        arrayOfProducts.forEach((product) => cardShowcase(product));
    }
}
