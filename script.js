let navbarLinks = document.getElementsByClassName('navbarLinks')[0];
let faBars = document.querySelector('.farBar');
let faTimes = document.querySelector('.faTimes')

faBars.addEventListener('click', ()=> {
    navbarLinks.classList.toggle('active')
    faBars.classList.add('close')
    faTimes.classList.add('open')
    
})

faTimes.addEventListener('click', ()=> {
    navbarLinks.classList.toggle('active')
    faTimes.classList.remove('open')
    faBars.classList.remove('close')

})




let myLi = document.querySelectorAll('.myLi');

myLi.forEach(element => {
    element.addEventListener('click', ()=> {
        navbarLinks.classList.toggle('active');
        faTimes.classList.remove('open')
        faBars.classList.remove('close')
    })
});



// show less 

let span = document.getElementById('mySpan');
let spa = document.getElementById('mySpa');
let client = document.getElementsByClassName('client')[0]
let healthTips = document.getElementsByClassName('healtthTips')[0]



span.addEventListener('click', ()=> {
    client.classList.toggle('activeShowless');  
    span.style.display = 'none';
})

spa.addEventListener('click', ()=> {
    healthTips.classList.toggle('activeShowles');
    spa.style.display = 'none'
})



// go back up

// let scrollup = document.getElementsByClassName('backup')[0];

// const toTop = () => {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         scrollup.className = 'backup'
//     } else {
//         scrollup.className = 'onBackup'
//     }
// }
// window.onscroll = toTop();

// scrollup.addEventListener('click', ()=> {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// })

//  onscroll animation 

const aboutMe = document.querySelector('.aboutMe')
const fadeIn = document.querySelectorAll('.fadeIn')

const options = {
    threshold: 0,
    rootMargin: '0px 0px 0px 0px'
}
const aboutMeOpacity = new IntersectionObserver( (entries, aboutMeOpacity)=>{
    entries.forEach( entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('aboutMeFadein')
            aboutMeOpacity.unobserve(entry.target)
        }
    } )
},options )
aboutMeOpacity.observe(aboutMe)


const fadeInOptions = {
    threshold: 0.25,
    rootMargin: '0px 0px -100px 0px'
}

const fadeInAanimation = new IntersectionObserver( (entries, fadeInAanimation)=>{
    entries.forEach(entry=> {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('fadeInAppear')
            fadeInAanimation.unobserve(entry.target)
        }
    })
}, fadeInOptions )
fadeIn.forEach(fade=> {
    fadeInAanimation.observe(fade)
})


