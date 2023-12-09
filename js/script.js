let dropDownOpened = false;

function abrirDropDown(dropDownContainer){

    if(!dropDownOpened){
        dropDownContainer.style.display = 'block'
        dropDownOpened = true
        // console.log('a')
        return
    }
    dropDownContainer.style.display = 'none'
    dropDownOpened = false;
    // console.log('b')

    
}

function closeDropDown(dropDown){

    dropDown.style.display = 'none'

}

const subtitlesFooter = document.getElementsByClassName("subtitle-content")
// const descFooter = document.getElementsByClassName("desc-content")

for(let i = 0; i < subtitlesFooter.length; i++){

    subtitlesFooter[i].addEventListener("click", (e) => {

        const descContent = e.target.parentNode.children[1]
        
        abrirDropDown(descContent)

    })

}

function verifyLogin(){
    let email = document.getElementById("EmailInput").value
    let senha = document.getElementById("SenhaInput").value
    if(email === "admin" && senha === "123456" ){
        location.href = "index.html"
        alert(`Bem vindo, ${email}`)
    }
    else{
        alert("Usuário ou senha incorretos, tente novamente!")
    }
}

let cont = 1
setInterval(function(){
    document.getElementById('radio' +cont).checked=true
    cont++
    if(cont>2){
        cont = 1
    }
},7000)