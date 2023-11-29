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
