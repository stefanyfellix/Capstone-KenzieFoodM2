import { ApiAuthentication } from "../models/apiAuthentication.js";
import { ApiCart } from "../models/apiCart.js";
import { LocalStorage } from "../models/localStorage.js";

export class InterfaceHome{

    static cartEmpty = true;
    static cartQuantity = 0;
    static cartTotal = 0;
    
    static async cardShowcase({id, nome, preco, categoria, imagem, descricao}){
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
        addCart.addEventListener('click', async () => {
            InterfaceHome.cardCart(id, nome, preco, categoria, imagem);

            if (ApiAuthentication.userToken.token !== ""){
                ApiCart.add({
                    product_id: id
                }, ApiAuthentication.userToken.token);
            } else{
                let arr = await LocalStorage.getLocalStorage("cart");
                if (arr === false) arr = [];
                arr.push(
                    {
                    "quantity": 1,
                    "products": {
                        "id": id,
                        "nome": nome,
                        "preco": preco,
                        "categoria": categoria,
                        "imagem": imagem,
                        "descricao" : descricao
                        }
                    }
                );
                LocalStorage.removeItemLocalStorage("cart");
                LocalStorage.setLocalStorage("cart", arr);
            }
            
        });

        img.src = imagem;
        title.innerText = nome;
        description.innerText = descricao;
        category.innerText = categoria;
        price.innerText = preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
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
        arrayOfProducts.forEach((product) => InterfaceHome.cardShowcase(product));
    }

}
