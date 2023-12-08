const BASEURL_PRODUTOS = "http://localhost:8080/produto/all"

async function getApiProdutos() {

    await fetch(BASEURL_PRODUTOS).then(response => {
        console.log(response.json())
    })

}

getApiProdutos()