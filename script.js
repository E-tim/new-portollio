let navbarLinks = document.getElementsByClassName('navbarLinks')[0];
let icons = document.getElementById('farBar');

icons.addEventListener('click', ()=> {
    navbarLinks.classList.toggle('active')
})



let myLi = document.querySelectorAll('.myLi');

myLi.forEach(element => {
    element.addEventListener('click', ()=> {
        navbarLinks.classList.toggle('active');
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

let scrollup = document.getElementsByClassName('backup')[0];

const toTop = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollup.className = 'backup'
    } else {
        scrollup.className = 'onBackup'
    }
}
window.onscroll = toTop();

scrollup.addEventListener('click', ()=> {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})