const BASEURL_PRODUTOS = "http://localhost:8080/produto/all"

function organizarElementosProduto(img, name, subDesc, price){
    const PokemonCard = document.createElement("div")
    PokemonCard.classList.add("product-card")
    
    //

    const imgCard = document.createElement("img")
    imgCard.src = img
    imgCard.classList.add("product-img")

    const nameCard = document.createElement("p")
    nameCard.innerHTML = name
    nameCard.classList.add("product-name")

    const subDescCard = document.createElement("p")
    subDescCard.innerHTML = subDesc
    subDescCard.classList.add("product-subDesc")

    const priceCard = document.createElement("p")
    priceCard.innerHTML = "R$"+price
    priceCard.classList.add("product-price")

    PokemonCard.appendChild(imgCard)
    PokemonCard.appendChild(nameCard)
    PokemonCard.appendChild(subDescCard)
    PokemonCard.appendChild(priceCard)

    document.getElementsByClassName("products-container")[0].appendChild(PokemonCard)
}

async function getApiProdutos() {

    await fetch(BASEURL_PRODUTOS).then(response => {
        response.json().then(produtoContainer =>{
            produtoContainer.map(produto =>{
                const name = produto.descProduto
                const img = produto.images.front
                const price = produto.precoProduto
                const subDesc = produto.subDescProduto

                organizarElementosProduto(img, name, subDesc, price)
            })
        })
    })

}

getApiProdutos()