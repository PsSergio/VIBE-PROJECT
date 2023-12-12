document.addEventListener('DOMContentLoaded', () => {
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
    
    
    const subtitlesFooter = document.getElementsByClassName("subtitle-content")
    // const descFooter = document.getElementsByClassName("desc-content")
    
    for(let i = 0; i < subtitlesFooter.length; i++){
    
        subtitlesFooter[i].addEventListener("click", (e) => {
    
            const descContent = e.target.parentNode.children[1]
            
            abrirDropDown(descContent)
    
        })
    
    }
    
    
    
    const carousel = document.getElementsByClassName("carousel")[0]
    // const DivImg = carousel.querySelector("div")
    firstImg = carousel.querySelectorAll("div")[0]
    arrowIcons = document.querySelectorAll(".wrapper i");
    
    
    
    
    let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
    
    const showHideIcons = () => {
        // showing and hiding prev/next icon according to carousel scroll left value
        let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
        arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
        arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
    }
    
    arrowIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
            // if clicked icon is left, reduce width value from the carousel scroll left else add to it
            carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
            setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
        });
    });
    
    const autoSlide = () => {
        // if there is no image left to scroll then return from here
        if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
    
        positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
        let firstImgWidth = firstImg.clientWidth + 14;
        // getting difference value that needs to add or reduce from carousel left to take middle img center
        let valDifference = firstImgWidth - positionDiff;
    
        if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
            return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
        }
        // if user is scrolling to the left
        carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    
    const dragStart = (e) => {
        // updatating global variables value on mouse down event
        isDragStart = true;
        prevPageX = e.pageX || e.touches[0].pageX;
        prevScrollLeft = carousel.scrollLeft;
    }
    
    const dragging = (e) => {
        // scrolling images/carousel to left according to mouse pointer
        if(!isDragStart) return;
        e.preventDefault();
        isDragging = true;
        carousel.classList.add("dragging");
        positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
        carousel.scrollLeft = prevScrollLeft - positionDiff;
        showHideIcons();
    }
    
    const dragStop = () => {
        isDragStart = false;
        carousel.classList.remove("dragging");
    
        if(!isDragging) return;
        isDragging = false;
        autoSlide();
    }
    
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("touchstart", dragStart);
    
    document.addEventListener("mousemove", dragging);
    carousel.addEventListener("touchmove", dragging);
    
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("touchend", dragStop);
    
    })
    
    var quantityButtons = document.querySelectorAll('.Quantity button');
    var quantitySpan = document.querySelectorAll('.Quantity .num')[0];
    var quantity = 0;
    
    var quantityButtons2 = document.querySelectorAll('.Quantity2 button');
    var quantitySpan2 = document.querySelectorAll('.Quantity2 .num2')[0];
    var quantity2 = 0;
    
    var totalQuantitySpan = document.getElementById('QNTDC');
    var subtotalSpan = document.getElementById('SBC');
    
    function updateQuantityDisplay() {
      quantitySpan.textContent = quantity;
      updateTotal(0, quantity);
      updateTotalQuantity();
    }
    
    function updateQuantity() {
      var buttonType = this.classList.contains('plus') ? 'plus' : 'minus';
    
      if (buttonType === 'plus') {
        quantity++;
      } else if (quantity > 0) {
        quantity--;
      }
    
      updateQuantityDisplay();
    }
    
    function updateQuantityDisplay2() {
      quantitySpan2.textContent = quantity2;
      updateTotal(1, quantity2);
      updateTotalQuantity();
    }
    
    function updateQuantity2() {
      var buttonType = this.classList.contains('plus2') ? 'plus2' : 'minus2';
    
      if (buttonType === 'plus2') {
        quantity2++;
      } else if (quantity2 > 0) {
        quantity2--;
      }
    
      updateQuantityDisplay2();
    }
    
    function updateSubtotalInSummary(subtotal) {
        
        var maxSubtotal = 199.99;
      
        
        if (subtotal > maxSubtotal) {
          subtotal = maxSubtotal;
        }
      
        var subtotalCell = document.getElementById('subtotalCell');
        subtotalCell.textContent = '$' + subtotal.toFixed(2);
      }
      
      
      function updateTotalInSummary() {
        var discountElement = document.getElementById('discountCell'); 
        var discount = parseFloat(discountElement.textContent.replace('R$', '').replace(',', '.')) || 0;
        var totalCell = document.getElementById('totalCell');
        var totalSubtotal = (quantity + quantity2) * 199.99;
        var total = totalSubtotal - discount; 
      
        totalCell.textContent = '$' + total.toFixed(2);
      }
      
    
    function updateTotal(row, quantity) {
        var price = 199.99;
        var subtotal = price * quantity;
        var totalElement = document.querySelectorAll('.Total')[row];
        totalElement.textContent = '$' + subtotal.toFixed(2);
        updateSubtotalInSummary(subtotal);
        updateTotalInSummary();
      }
    
      function updateTotalQuantity() {
        var totalQuantity = quantity + quantity2;
        var totalSubtotal = (quantity + quantity2) * 199.99;
        totalQuantitySpan.textContent = 'Quantidade de Produtos: ' + totalQuantity;
        subtotalSpan.textContent = 'Subtotal: $' + totalSubtotal.toFixed(2);
        updateSubtotalInSummary(totalSubtotal); 
        updateTotalInSummary(); 
      }
    
    quantityButtons.forEach(function (button) {
      button.addEventListener('click', updateQuantity);
    });
    
    quantityButtons2.forEach(function (button) {
      button.addEventListener('click', updateQuantity2);
    });
    
    updateQuantityDisplay();
    updateQuantityDisplay2();