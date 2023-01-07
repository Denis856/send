var productContainers = [...document.querySelectorAll('.product')];
var nxtBtn = [...document.querySelectorAll('.page1__arrow1')];
var preBtn = [...document.querySelectorAll('.page1__arrow2')];
var block4 = document.querySelectorAll('.block4__up');


productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    });
});

$(document).ready(function(){
   $('.block4__up').click(function(event){
      $('.block4__up').not($(this)).removeClass('active');
      $(this).toggleClass('active').next().slideToggle(300);
   });
});

block4.forEach(elem =>{
   elem.addEventListener('click', ()=>{
      elem.querySelector('.block4__plus').classList.toggle('active');
   });
});
