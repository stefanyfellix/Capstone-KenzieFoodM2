# Entrega: Projeto Capstone

##Conceitos
OOP:
Sintaxe de classe;
classes estáticas.
Spread Operator;
Desconstrução;
LocalStorage;
Consumo de API.
Requisitos técnicos/funcionalidades
Implementar requisições:
Autenticação por meio do register e login
Consumo, Criação, Edição e Remoção
Extra: Uso dos endpoints 'cart', para manipulação do carrinho via API
Utilizar o DOM para construir o template de produtos. Cada card de produto deve conter:
Nome;
Foto;
Descrição;
Categoria(deve conter o ícone);
Preço.
Filtrar os produtos=> por categoria e campo de busca pelo nome
Carrinho:
Deve ser possível adicionar produtos ao carrinho.
Deve ser possível remover produtos do carrinho.
Atualizar o preço total do carrinho, baseado nos produtos do carrinho.
Atualizar a quantidade total de produtos no carrinho.


##Requisitos
Aplicar mobile first;
Criação da página de login e register feita pela equipe deve ser uma ideia da equipe, seguindo o esquema de cores do figma;
LocalStorage (Vocês podem implementar, no carrinho, para salvar os produtos adicionados pelo usuário e para salvar o token de acesso).
API
implementação das requisições referentes aos produtos e autenticação.
Requisições a respeito do carrinho: PATH, DELETE, POST


##Trabalhando com a API e o Front
Na aplicação, deve ser possível fazer o register e o login de um usuário. Porém, caso o mesmo não queira se cadastrar, ele tem liberdade para navegar na página, usando a requisição pública de produtos padrões. Assim, os produtos que forem adicionados no carrinho, por esse usuário anônimo, devem se manter apenas no LocalStorage.

Resumo do acesso de usuário autenticado e usuário anônimo.

##Anônimo
Entrada permitida na página Home;
Uso apenas da requisição pública de produtos;
Produtos adicionados devem ficar apenas no localStorage;
Acesso bloqueado a página de criação, edição e remoção de produtos.
##Autenticado
Entrada Permitida na página home;
Listagem de produtos feita pela requisição privada do usuário;
Produtos Adicionados ao carrinho inicialmente no localStorage, caso efetue o extra, adicionar na API;
Acesso total a página de criação, edição e remoção de produtos.

##Páginas 
Temos no nosso trabalho 
###Home Page
acesso a lista de produtos e carrinho. Tendo acesso a página de login.
###Admin Page
acesso somente a usúarios cadastrados. Acesso a lista de produtos que for criado pelo próprio usúario.Podendo também editar e excluir o produto.
##Login e Cadastro 
Autentica um usúario quando ele for cadastrado.



