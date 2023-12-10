const URL_ACHAR_PRODUTOS = "http://localhost:8080/produto/find"
let idProduto = localStorage.getItem('idProduto')
console.log(idProduto)
async function getProdutoByID(id){

    return await fetch(URL_ACHAR_PRODUTOS+`?codigoProduto=${id}`).then(response => {
        response.json().then(produto =>{
            
            document.getElementsByClassName("name-product-page")[0].innerHTML = produto.descProduto
            document.getElementsByClassName("subDesc-product-page")[0].innerHTML = produto.subDescProduto
            document.getElementsByClassName("price-product-page")[0].innerHTML = "R$" + produto.precoProduto

            //images 

            document.getElementsByClassName("img-product-general")[0].src = produto.images.front
            document.getElementsByClassName("img-product-general")[1].src = produto.images.back
            document.getElementsByClassName("img-product-general")[2].src = produto.images.sideLeft
            document.getElementsByClassName("img-product-general")[3].src = produto.images.sideRigth
            document.getElementsByClassName("img-product-general")[4].src = produto.images.top

        })

    })

}

getProdutoByID(idProduto)