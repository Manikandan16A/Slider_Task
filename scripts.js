let currentSlide = 0;

function showSlide(index){
    const slides = document.querySelectorAll('.slide');
    if(index < 0){
        currentSlide = slides.length - 1;
    }else if(index >= slides.length){
        currentSlide = 0;
    }else{
        currentSlide = index;
    }
    const offset = -currentSlide*100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}
function changeSlide(direction){
    showSlide(currentSlide + direction);
}

setInterval(()=>{
    changeSlide(1);
},10000);

showSlide(currentSlide);