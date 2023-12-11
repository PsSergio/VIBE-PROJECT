const imgPC = document.querySelectorAll(".product-img-page-pc-version")
const imgMobile = document.querySelectorAll(".product-img-page")

const arrowLeft = document.getElementsByClassName("arrow-left")[0]
const arrowRight = document.getElementsByClassName("arrow-right")[0]
const arrowLeft2 = document.getElementsByClassName("arrow-left")[1]
const arrowRight2 = document.getElementsByClassName("arrow-right")[1]

let currentImg = 0

function hideImg (img){

    img.forEach(image => image.classList.remove("product-img-on"))

}

function showImg(img){

    img[currentImg].classList.add("product-img-on")

}


function prevSlide(img){

    hideImg(img)
    if(currentImg == 0){
        if(img[3].src == 'https://pssergio.github.io/VIBE-PROJECT/null' || img[3].src == 'http://127.0.0.1:5500/null'){
            currentImg = 2
        }else{
            currentImg = imgPC.length-1
        }
    }else{
        currentImg--
    }
    showImg(img)

}

function nextSlide(img){
    hideImg(img)
    
    if((img[3].src == 'https://pssergio.github.io/VIBE-PROJECT/null' || img[3].src == 'http://127.0.0.1:5500/null') && currentImg == 2){
        currentImg=0
    }else if(currentImg == imgPC.length-1){

        currentImg=0

    }else {
        currentImg++
    }
    showImg(img)
}

arrowLeft.addEventListener("click", () =>{

    prevSlide(imgPC)

})

arrowRight.addEventListener("click", () =>{

    nextSlide(imgPC)

})

arrowLeft2.addEventListener("click", () =>{

    prevSlide(imgMobile)

})

arrowRight2.addEventListener("click", () =>{

    nextSlide(imgMobile)

})