let tooltipElem;
 document.onmouseover = function(event) {
    let target = event.target;
    // если у нас есть подсказка...
    let tooltipHtml = target.dataset.tooltip;
    if (!tooltipHtml) return;
    // ...создадим элемент для подсказки
    tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip';
    tooltipElem.innerHTML = tooltipHtml;
    document.body.append(tooltipElem);
  // спозиционируем его сверху от аннотируемого элемента (top-center)
  let coords = target.getBoundingClientRect();
  let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) left = 0; // не заезжать за левый край окна
  let top = coords.top - tooltipElem.offsetHeight - 5;
  if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
    top = coords.top + target.offsetHeight + 5;
  }
  tooltipElem.style.left = left + 'px';
  tooltipElem.style.top = top + 'px';
};

document.onmouseout = function(e) {
  if (tooltipElem) {
    tooltipElem.remove();
    tooltipElem = null;
  }
};







 var smoothJumpUp = function() {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            window.scrollBy(0,-50);
            setTimeout(smoothJumpUp, 10);
        }
    };
    
	
	
	
	
    window.onscroll = function() {
      var scrolled = window.pageYOffset || document.documentElement.scrollTop;
      if (scrolled > 100) {
      	document.getElementById('upbutton').style.display = 'block';
      } else {
      	document.getElementById('upbutton').style.display = 'none';
      }
    };
	
	
	
	
	
	
	
	
	
	
	

 var showSlides = function(n) {
  var i;
  
  var slides = document.getElementsByClassName("slider-block");
  var dots = document.getElementsByClassName("slider-point");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}




var plusSlides = function(n){
  slideIndex += n;
  showSlides(slideIndex);
}

// Thumbnail image controls
var currentSlide = function(n) {
  slideIndex = n;
  showSlides(slideIndex);

}





var slideIndex = 1;
showSlides(slideIndex);




var recall = function(){
	window.open("popup.html", "PopUp Window", "resizable=no,scrollbars=no,width=350,height=150,copyhistory=1");
	
}
	



