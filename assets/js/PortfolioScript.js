window.onload = () => {
    img2 = document.querySelector('.p-img2')
    img1 = document.querySelector('.p-img1')
    mainSec = document.querySelector('.mainSec')
    slide = document.querySelector('.slide')
    ph = document.querySelector('.ph')
    pp = document.querySelector('.pp')
    pb = document.querySelector('.pb')
}

window.addEventListener('scroll', (e)=>{
    var x = window.pageYOffset;
    if(window.innerWidth<992){
        mainSec.setAttribute('class', 'container mainSec');
    }
    if(x>0){
        img2.style.transform = 'translate(0%,0)'
        img1.style.transform = 'translate(0%,20%)'
    }

    if(x===0){
        img1.style.transform = 'translate(0%,40%)';
        img2.style.transform = 'translate(60%,15%) scale(1.25)'
    }

    if(x===0 && window.innerWidth < 992){
        img1.style.transform = 'translate(-130%,20%)';
        img2.style.transform = 'translate(100%,20%) scale(1.25)';
    }

    if(x>200){
        slide.style.transform = 'translateY(-35%)';
    }else{
        slide.style.transform = 'translateX(0)'
    }

    if(x>300){
        slide.style.transform = 'translateY(-70%)'
    }

    if(x>400){
        ph.innerHTML = 'ChatIn : Group Chat App'
        slide.style.transition = 'none'
        slide.style.transform = 'translateY(0)'
        img1.style.transform = 'translate(0%,40%)';
        img2.style.transform = 'translate(60%,15%) scale(1.25)'
    }else{
        ph.innerHTML = 'Grocery Shop App'
        slide.style.transition = '500ms'
    }

    if(x>500){
        img2.style.transform = 'translate(0%,0)'
        img1.style.transform = 'translate(0%,20%)'
        slide.style.transition = '500ms'
    }

    if(x>600){
        slide.style.transform = 'translateY(-35%)'
    }
    
    if(x>700){
        slide.style.transform = 'translateY(-70%)'
    }
    
    console.log(window.innerWidth)
})