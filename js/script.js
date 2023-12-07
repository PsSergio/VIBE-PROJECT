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
