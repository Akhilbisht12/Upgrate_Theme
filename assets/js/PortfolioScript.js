window.onload = () => {
    img2 = document.querySelector('.p-img2')
    img1 = document.querySelector('.p-img1')
    mainSec = document.querySelector('.mainSec')
}

window.addEventListener('scroll', (e)=>{
    var x = window.pageYOffset;
    if(window.innerWidth<992){
        mainSec.setAttribute('class', 'container mainSec');
    }
    if(x>0){
        img2.style.transform = 'translate(40%,0)'
        img1.style.transform = 'translate(-40%,20%)'
    }

    if(x===0){
        img1.style.transform = 'translate(-80%,0)';
        img2.style.transform = 'translate(60%,20%) scale(1.25)'
    }

    if(x===0 && window.innerWidth < 992){
        img1.style.transform = 'translate(-130%,20%)';
        img2.style.transform = 'translate(100%,20%) scale(1.25)';
    }
    
    
    
    console.log(window.innerWidth)
})