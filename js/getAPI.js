const BASEURL_PRODUTOS = "https://api-java-vibe.onrender.com/produto/all"
function organizarElementosProduto(img, name, subDesc, price, id){
    const ProductCard = document.createElement("div")
    ProductCard.classList.add("product-card")
    ProductCard.id = id

    ProductCard.addEventListener("click", () =>{

        localStorage.setItem('idProduto', id)
        localStorage.setItem('qtdProdutos', document.getElementsByClassName("product-card").length)
        
        window.location.href = "produto.html"

    })
    // PokemonCard.classList.add("col-4")
    
    //
    // const imgCardContainer = document.createElement("div")
    // imgCardContainer.classList.add("img-container-busca")
    

    const imgCard = document.createElement("img")
    imgCard.src = img
    imgCard.classList.add("product-img")
    // imgCard.classList.add("img-fluid")

    const nameCard = document.createElement("p")
    nameCard.innerHTML = name
    nameCard.classList.add("product-name")

    const subDescCard = document.createElement("p")
    subDescCard.innerHTML = subDesc
    subDescCard.classList.add("product-subDesc")

    const priceCard = document.createElement("p")
    priceCard.innerHTML = "R$"+price
    priceCard.classList.add("product-price")

    ProductCard.appendChild(imgCard)
    ProductCard.appendChild(nameCard)
    ProductCard.appendChild(subDescCard)
    ProductCard.appendChild(priceCard)

    document.getElementsByClassName("products-container")[0].appendChild(ProductCard)
}

async function getApiProdutos() {

    return await fetch(BASEURL_PRODUTOS).then(response => {
        response.json().then(produtoContainer =>{
            produtoContainer.map(produto =>{
                const name = produto.descProduto
                const img = produto.images.front
                const price = produto.precoProduto
                const subDesc = produto.subDescProduto
                const id = produto.codigoProduto
                organizarElementosProduto(img, name, subDesc, price, id)
            })
        })
    })

}
