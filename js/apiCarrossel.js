async function getAPIforCarrossel(i, id, carrossel){

    return await fetch(URL_ACHAR_PRODUTOS+`?codigoProduto=${id}`).then(response => {
        response.json().then(produto =>{

            trocaElementosCarrossel(i, carrossel, produto.images.front, produto.descProduto, produto.precoProduto, produto.codigoProduto)

        })

    })

}


function sortearNumeros(){
    
    let listaAleatório = []
    for(let i = 0; i < 9; i++){

        let numGerado = Math.floor(Math.random() * 16)+1
        if(listaAleatório.indexOf(numGerado) == -1){

            listaAleatório.push(numGerado)

        }else{
            i--
        }

    }

    return listaAleatório

}

function trocaElementosCarrossel(i, carrossel, img, name, price, id){

        const nameEl = carrossel.children[i].children[1]
        const imgEl = carrossel.children[i].children[0]
        const priceEl = carrossel.children[i].children[2]

        carrossel.children[i].id = id
        nameEl.innerHTML = name
        imgEl.src = img
        priceEl.innerHTML = 'R$'+price

        carrossel.children[i].addEventListener("click", () =>{

            localStorage.setItem('idProduto', id)
            window.location.href = "produto.html"


        })

}

// trocaElementosCarrossel(document.getElementsByClassName("carousel")[0])

function executaTrocaDosElementosCarrossel(carrossel){

    listaIdSorteados = sortearNumeros()
    // console.log(listaIdSorteados)

    for(let i = 0; i < 9; i++){

        getAPIforCarrossel(i, listaIdSorteados[i], carrossel)

    }

}
