const img = document.querySelectorAll(".product-img-page-pc-version")

const arrowLeft = document.getElementsByClassName("arrow-left")[0]
const arrowRight = document.getElementsByClassName("arrow-right")[0]

let currentImg = 0

function hideImg (){

    img.forEach(image => image.classList.remove("product-img-on"))

}

function showImg(){

    img[currentImg].classList.add("product-img-on")
    console.log(img[currentImg])

}

console.log(img[3].src)

arrowLeft.addEventListener("click", () =>{

    hideImg()
    if(currentImg == 0){
        if(img[3].src == undefined){
            console.log('a')
        }
        currentImg = img.length-1
    }else{
        currentImg--
    }
    showImg()


})

arrowRight.addEventListener("click", () =>{

    hideImg()
    if(currentImg == img.length-1){

        currentImg=0

    }else {
        currentImg++
    }
    showImg()

})

