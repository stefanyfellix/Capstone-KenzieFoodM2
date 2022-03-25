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
        const showcase = document.getElementById("showcase");
        showcase.innerHTML = '';
        arrayOfProducts.forEach((product) => InterfaceHome.cardShowcase(product));
    }

    static transitionPages (response){
        const header = document.querySelector(".header--container")
        if (response === "private"){
            const btnLogout = document.createElement('button')
            btnLogout.classList.add('header--logoutButton')

            const btnDashboard = document.createElement('button')
            btnDashboard.classList.add("header--dashboardButton")
            btnLogout.innerText = "Logout"
            btnDashboard.innerHTML = `<a href="./../admin/admin.html">Dashboard</a>`
            btnLogout.addEventListener("click", () =>{
                LocalStorage.removeItemLocalStorage("authentication")
                location.reload()
                });
            header.appendChild(btnLogout)
            header.appendChild(btnDashboard)
            console.log("tchau")
        } else if(response==="public"){
            const btnLogin = document.createElement('button')
            btnLogin.classList.add('header--loginButton')
            btnLogin.innerHTML   = `<a href="./../login/login.html">Login</a>`
            header.appendChild(btnLogin)
            console.log("oi")
        }
    }

    static cardCart(id, nome, preco, categoria, imagem){
        const cartBody = document.getElementById("cartBody");

        if (InterfaceHome.cartEmpty === true){
            cartBody.innerHTML = "";
            InterfaceHome.cartEmpty = false;
            cartBody.classList.remove("cartEmpty");
            const infosCart = document.getElementById("infosCart");
            infosCart.classList.remove('infosCart__displayNone');
        }

        InterfaceHome.cartQuantity++;
        InterfaceHome.cartTotal += preco;
        InterfaceHome.updateCartInfos();

        const card = document.createElement("section");
        const imgContainer = document.createElement("div");
        const img = document.createElement("img");
        const infosContainer = document.createElement("div");
        const title = document.createElement("h2");
        const category =  document.createElement("span");
        const price = document.createElement("p");
        const removeContainer = document.createElement("div");
        const removeButton = document.createElement("button");

        card.classList.add("cart--card");
        imgContainer.classList.add("cart--card--imgContainer");
        infosContainer.classList.add("cart--card--infosContainer");
        title.classList.add("cart--card--title");
        category.classList.add("cart--card--category");
        price.classList.add("cart--card--price");
        removeContainer.classList.add("cart--card--removeContainer");
        removeButton.classList.add("cart--card--removeCart");

        img.src = imagem;
        title.innerText = nome;
        category.innerText = categoria;
        price.innerText = preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        imgContainer.appendChild(img);
        infosContainer.appendChild(title);
        infosContainer.appendChild(category);
        infosContainer.appendChild(price);
        removeContainer.appendChild(removeButton);
    
        card.appendChild(imgContainer);
        card.appendChild(infosContainer);
        card.appendChild(removeContainer);

        cartBody.appendChild(card);

        removeButton.addEventListener('click', async () => {
            card.remove();
            if (cartBody.childElementCount === 0){
                InterfaceHome.cartEmpty = true;
                const infosCart = document.getElementById("infosCart");
                infosCart.classList.add('infosCart__displayNone');
                cartBody.innerHTML = 
                `
                    <i id="icon-cartAside" class="fa-solid fa-bag-shopping"></i>
                    <p>Por enquanto não temos produto no carrinho</p>
                `;
                cartBody.classList.add("cartEmpty");
            }

            InterfaceHome.cartQuantity--;
            InterfaceHome.cartTotal -= preco;
            InterfaceHome.updateCartInfos();

            if (ApiAuthentication.userToken.token !== ""){
                const arr = await ApiCart.list(ApiAuthentication.userToken.token);
                const indexDeleted = arr.findIndex(e => e.products.id === id);
                const currentQuantity = arr[indexDeleted].quantity - 1;
                await ApiCart.delete(ApiAuthentication.userToken.token, id);
                if (currentQuantity !== 0){
                    await ApiCart.add({
                        product_id: id,
                        quantity: currentQuantity 
                    }, ApiAuthentication.userToken.token);
                }

            } else{
                let arr = await LocalStorage.getLocalStorage("cart");
                let aux = 0;
                arr = arr.filter(e => {
                    if (e.products.id !== id || (e.products.id === id && aux !== 0)){
                        return true;
                    } else{
                        aux++;
                        return false;
                    }
                });
                if (arr.length === 0){
                    LocalStorage.removeItemLocalStorage("cart");
                    return;
                }
                LocalStorage.removeItemLocalStorage("cart");
                LocalStorage.setLocalStorage("cart", arr);
            }
        });
    }

    static async fillTheCart(permission){
        if (permission === "public"){
            const cartProductsLocalStorage = await LocalStorage.getLocalStorage("cart");
            for (let i = 0; i < cartProductsLocalStorage.length; i++){
                const {id, nome, preco, categoria, imagem} = cartProductsLocalStorage[i].products;
                InterfaceHome.cardCart(id, nome, preco, categoria, imagem);
            }
        } else if (permission === "private"){
            const cartProductsLocalStorage = await ApiCart.list(ApiAuthentication.userToken.token);
            console.log(cartProductsLocalStorage)
            for (let i = 0; i < cartProductsLocalStorage.length; i++){
                const {id, nome, preco, categoria, imagem} = cartProductsLocalStorage[i].products;
                for (let j = 0; j < cartProductsLocalStorage[i].quantity; j++){
                    InterfaceHome.cardCart(id, nome, preco, categoria, imagem);
                }
            }
        }
         
    }

    static updateCartInfos(){
        const quantityCart = document.getElementById("quantityCart");
        const totalCart = document.getElementById("totalCart");

        quantityCart.innerText = InterfaceHome.cartQuantity;
        totalCart.innerText = InterfaceHome.cartTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        
    }

    static modalCart(){
        const cart = document.getElementById('asideCart');
        const cartBody = document.getElementById("cartBody");
        const backBlur = document.createElement('div');
        cart.classList.add("cartMobile")
        
        backBlur.classList.add('backBlur');
        cartBody.style.height = "calc(100% - 133px)";
        document.body.appendChild(backBlur);
        document.body.appendChild(cart);

        backBlur.addEventListener("click", () => {
            const main = document.getElementById("main");
            main.appendChild(cart);
            backBlur.remove();
            cartBody.style.height = "calc(100% - 70px)";
            cart.classList.remove("cartMobile");
        });
    }
}
