const ddown = document.querySelector('#ddown')


var x =0
setInterval(()=>{
    if(x%2===0){

        ddown.style.color = "black"
        x = x +1;
    }
    else if(x%2 === 1){
        ddown.style.color = "white"
        x = x +1;
    }
},2000)


const menu = document.querySelector('#menu')
const nav = document.querySelector('#nav')
const upper = document.querySelector('#upper')
const lower = document.querySelector('#lower')
const name1 = document.querySelector('#name')

var c = 1;
menu.addEventListener('click',()=>{
    // console.log("clicked")
    if(c%2 === 1){
        nav.style.height = '30vh'
        upper.style.height = '20%'
        lower.style.height = '80%'
        name1.style.display = 'inline-block'
        c = c+1;
        // console.log(c)
    }
    else if (c%2 === 0){
        nav.style.height = '10vh'
        upper.style.height = '100%'
        lower.style.height = '0px'
        name1.style.display = 'none'

        c = c+1;

    }
})

const hbtn =document.querySelector('#hbtn')
const abtn =document.querySelector('#abtn')
const lbtn =document.querySelector('#lbtn')
const cbtn =document.querySelector('#cbtn')
const cobtn =document.querySelector('#cobtn')
const sbtn =document.querySelector('#sbtn')

const home = document.querySelector('#home')
const about = document.querySelector('#about')
const logistics = document.querySelector('#logistics')
const catalog = document.querySelector('#catalog')
const contact = document.querySelector('#contact')
const social = document.querySelector('#social')

hbtn.addEventListener('click',()=>{
    menu.click();
    home.scrollIntoView({ behavior: 'smooth'});


})
abtn.addEventListener('click',()=>{
    menu.click();
    about.scrollIntoView({ behavior: 'smooth'});


})
lbtn.addEventListener('click',()=>{
    menu.click();
    logistics.scrollIntoView({ behavior: 'smooth'});


})
cbtn.addEventListener('click',()=>{
    menu.click();
    catalog.scrollIntoView({ behavior: 'smooth'});

})
cobtn.addEventListener('click',()=>{
    menu.click();
    contact.scrollIntoView({ behavior: 'smooth'});


})
sbtn.addEventListener('click',()=>{
    menu.click();
    social.scrollIntoView({ behavior: 'smooth'});


})


