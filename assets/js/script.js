var sec1, header, logo;
var data = [
    {
        name : 'Moblie App Development',
        para : 'We work with react native and deploy your apps to google play store and apple store.',
        img : './assets/images/ser.png'
    },
    {
        name : 'Website Development',
        para : 'We are professional at making web apps with MERN and deploy apps to aws or digital ocean. We also provide Wordpress website.',
        img : './assets/images/ser.png'
    },
    {
        name : 'Branding',
        para : 'We know how brand stand out from others and make your company image around speacific theme.',
        img : './assets/images/ser.png'
    },
    {
        name : 'SEO & Marketing',
        para : 'We help your business grow by applying modern and effective techniques for seo and marketing.',
        img : './assets/images/ser.png'
    }
];

const handleContinue = () => {
    var y= document.querySelectorAll('.form-select')
    console.log(y)
    if(y[0].selectedIndex!==0 && y[1].selectedIndex!==0){
        alert('okay')
    }else{
        alert('Fill Out Details')
    }
}

window.onload = () =>{
    sec1 = document.getElementsByClassName('sec1')[0];
    header = document.getElementsByClassName('header')[0]
    logo = document.getElementsByClassName('logo')[0];
    sec2p = document.querySelector('.sec2p')
    sec2h1 = document.querySelector('.sec2h1')
    video = document.querySelector('.videoHome')
    sec2 = document.querySelector('.sec2')
    sec3 = document.querySelector('.sec3')
    sec4 = document.querySelector('.sec4')
    services = document.querySelector('.services-ca')
    sec3h1 = document.querySelector('.sec3h1')
    sec3p = document.querySelector('.sec3p')
    cardImg = document.querySelectorAll('.card-img-top')
    cardTitle = document.querySelectorAll('.card-title')
    cardText = document.querySelectorAll('.card-text')
}

window.addEventListener('scroll', (e)=>{
    var x = window.pageYOffset;
    if(x==0){
        sec1.setAttribute('class', 'sec1 position-fixed top-0 w-100')
        sec2.setAttribute('class','')
        video.setAttribute('src','./assets/images/demo.jpg')
        sec3.setAttribute('class', 'sec3 d-none')

    }
    else if(x>100 && x<300){
        sec1.setAttribute('class', 'sec1 d-none')
        sec2.setAttribute('class', 'sec2 position-fixed top-0 bg-dark text-white w-100')
        sec2h1.innerHTML="GRocery Shopping App"
        sec2p.innerHTML="GRocery is an online gracery shopping app deployed on playstore. Made with React Native And wordpress"
        video.setAttribute('src','./assets/images/demo2.jpg')
        sec3.setAttribute('class', 'sec3 d-none')

    }
     if(x>300 && x<500){
        sec2h1.innerHTML ='Chat-In : Room Chat';
        sec2p.innerHTML = 'Chat is an nodejs HTML Bootstrap based room chatting app'
        sec2.setAttribute('class', 'sec2 position-fixed top-0 bg-warning text-white w-100')
        video.setAttribute('src','./assets/images/demo.jpg')
        sec3.setAttribute('class', 'sec3 d-none')

    }

    if(x>500 && x<600){
        sec2h1.innerHTML ='News App';
        sec2p.innerHTML = 'News app is an short news app'
        sec2.setAttribute('class', 'sec2 position-fixed top-0 bg-info text-white w-100')
        video.setAttribute('src','./assets/images/demo.jpg')
        sec3.setAttribute('class', 'sec3 d-none')
    }

    if(x>600 && x<700){
        sec2.setAttribute('class', 'sec2 d-none')
        sec3.setAttribute('class', 'sec3 position-fixed top-0 w-100')
    }

    if(x>700){
        services.style.transform ='translateX(20rem)'
    }else{
        services.style.transform = 'translateX(40rem)'
    }
    if(x>800){
        services.style.transform = 'translateX(0rem)'
    }
    if(x>900){
        sec3h1.innerHTML='Our Services'
        sec3p.innerHTML='Its not just about mobile and web development. We also Provide the folowing the Services'
        services.style.transform = 'translateX(-80rem)';
        data.map((item,i)=>{
            cardTitle[i].innerHTML = `${item.name}`
            cardText[i].innerHTML=`${item.para}`
            cardImg[i].setAttribute('src',`./assets/images/ser.png`)
        })
    }

    if(x>1000){
        console.log(cardTitle)
        sec3h1.innerHTML='Technology We Use'
        sec3p.innerHTML='We use multiple technolgy to provide you the best product within your budget'
        data.map((item,i)=>{
            cardTitle[i].innerHTML = ''
            cardText[i].innerHTML=''
            cardImg[i].setAttribute('src',`./assets/images/tech/${i+1}.png`)
        })
    }

    if(x>1100){
        services.style.transform = 'translateX(-40rem)'
    }

    if(x>1200){
        services.style.transform = 'translateX(0rem)'
    }

    if(x>1300){
        services.style.transform = 'translateX(80rem)'
        sec4.setAttribute('class','sec4 d-none')
        sec3.setAttribute('class', 'sec3 position-fixed top-0 w-100')
    }

    if(x>1400){
        sec3.setAttribute('class', 'sec3 d-none')
        sec4.setAttribute('class', 'sec4 position-fixed top-0 w-100')
    }

})