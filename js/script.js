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

function backToPrincipalPage(){
    location.href = "index.html"
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

const carousel1 = document.getElementById("carousel-pag-produto");
const carousel2 = document.getElementById("carousel-pag-produto1");
const firstImg1 = carousel1.querySelectorAll("div")[0];
if(carousel2 == null){

    const firstImg2 = 0
    
}else{
    
    const firstImg2 = carousel2.querySelectorAll("div")[0];

}
const arrowIcons1 = document.querySelectorAll(".wrapper i#left, .wrapper i#right");
const arrowIcons2 = document.querySelectorAll(".wrapper i#left1, .wrapper i#right1");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = (carousel, icons) => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    icons[0].style.display = carousel.scrollLeft === 0 ? "none" : "block";
    icons[1].style.display = carousel.scrollLeft === scrollWidth ? "none" : "block";
};

const autoSlide = (carousel, firstImg) => {
    if (carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff);
    let firstImgWidth = firstImg.clientWidth + 14;
    let valDifference = firstImgWidth - positionDiff;

    if (carousel.scrollLeft > prevScrollLeft) {
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }

    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
};

const autoSlide2 = (carousel, firstImg) => {
    if (carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff);
    let firstImgWidth = firstImg.clientWidth + 14;
    let valDifference = firstImgWidth - positionDiff;

    if (carousel.scrollLeft > prevScrollLeft) {
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }

    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
};

const dragStart = (e, carousel) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
};

const dragStart2 = (e) => dragStart(e, carousel2);

const dragging = (e, carousel, arrowIcons) => {
    if (!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons(carousel, arrowIcons);
};

const dragging2 = (e) => dragging(e, carousel2, arrowIcons2);

const dragStop = (carousel, firstImg) => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if (!isDragging) return;
    isDragging = false;
    autoSlide(carousel, firstImg);
};

const dragStop2 = () => dragStop(carousel2, firstImg2);

arrowIcons1.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg1.clientWidth + 14;
        carousel1.scrollLeft += icon.id === "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(carousel1, arrowIcons1), 60);
    });
});

arrowIcons2.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg2.clientWidth + 14;
        carousel2.scrollLeft += icon.id === "left1" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(carousel2, arrowIcons2), 60);
    });
});

carousel1.addEventListener("mousedown", (e) => dragStart(e, carousel1));
carousel1.addEventListener("touchstart", (e) => dragStart(e, carousel1));

document.addEventListener("mousemove", (e) => dragging(e, carousel1, arrowIcons1));
carousel1.addEventListener("touchmove", (e) => dragging(e, carousel1, arrowIcons1));

document.addEventListener("mouseup", () => dragStop(carousel1, firstImg1));
carousel1.addEventListener("touchend", () => dragStop(carousel1, firstImg1));

carousel2.addEventListener("mousedown", dragStart2);
carousel2.addEventListener("touchstart", dragStart2);

document.addEventListener("mousemove", dragging2);
carousel2.addEventListener("touchmove", dragging2);

document.addEventListener("mouseup", dragStop2);
carousel2.addEventListener("touchend", dragStop2);

