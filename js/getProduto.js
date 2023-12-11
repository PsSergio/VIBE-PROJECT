const URL_ACHAR_PRODUTOS = "http://localhost:8080/produto/find"
let idProduto = localStorage.getItem('idProduto')
let idPacoteAtual
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
            document.getElementsByClassName("img-product-general")[5].src = produto.images.front
            document.getElementsByClassName("img-product-general")[6].src = produto.images.back
            document.getElementsByClassName("img-product-general")[7].src = produto.images.sideLeft
            document.getElementsByClassName("img-product-general")[8].src = produto.images.sideRigth
            document.getElementsByClassName("img-product-general")[9].src = produto.images.top

            idPacoteAtual = produto.pacoteProduto.idPacote

        })

    })

}

let listaProdutosMesmoPacote = []

async function verificaPacoteProdutos(id){
    const container = document.getElementsByClassName("pacote-produtos-container")[0]
    return await fetch(URL_ACHAR_PRODUTOS+`?codigoProduto=${id}`).then(response => {
        response.json().then(produto =>{
            
            if(idPacoteAtual == produto.pacoteProduto.idPacote && produto.codigoProduto != idProduto){

                const produtoMesmoPacote = document.createElement("img")
                produtoMesmoPacote.classList.add("pacote-card")
                produtoMesmoPacote.src = produto.images.front
                container.appendChild(produtoMesmoPacote)

                produtoMesmoPacote.addEventListener("click", () =>{

                    localStorage.setItem('idProduto', produto.codigoProduto)
                    location.reload()

                })

            }


        })

    })

}

let qtdProdutos = localStorage.getItem('qtdProdutos')

getProdutoByID(idProduto)

function executaVerificacaoPacoteProdutos(){

    for(let i = 1; i <= qtdProdutos; i++){

        verificaPacoteProdutos(i)
    
    }

}

executaVerificacaoPacoteProdutos()