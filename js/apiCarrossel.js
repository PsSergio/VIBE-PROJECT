async function getAPIforCarrossel(id){

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
            document.getElementsByClassName("img-product-general")[5].src = produto.images.front
            document.getElementsByClassName("img-product-general")[6].src = produto.images.back
            document.getElementsByClassName("img-product-general")[7].src = produto.images.sideLeft
            document.getElementsByClassName("img-product-general")[8].src = produto.images.sideRigth
            document.getElementsByClassName("img-product-general")[9].src = produto.images.top

            idPacoteAtual = produto.pacoteProduto.idPacote

        })

    })

}