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

function prevSlide(){

    hideImg()
    if(currentImg == 0){
        if(img[3].src == 'https://pssergio.github.io/VIBE-PROJECT/...' || img[3].src == 'http://127.0.0.1:5500/...'){
            currentImg = 2
        }else{
            currentImg = img.length-1
        }
    }else{
        currentImg--
    }
    showImg()

}

function nextSlide(){
    hideImg()
    
    if((img[3].src == 'https://pssergio.github.io/VIBE-PROJECT/...' || img[3].src == 'http://127.0.0.1:5500/...') && currentImg == 2){
        currentImg=0
    }else if(currentImg == img.length-1){

        currentImg=0

    }else {
        currentImg++
    }
    showImg()
}

arrowLeft.addEventListener("click", () =>{

    prevSlide()

})

arrowRight.addEventListener("click", () =>{

    nextSlide()

})

