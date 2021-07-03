const next = document.querySelector('#nextbtn')
const bimgs = document.querySelector('.banner_imgs')

var arr = bimgs.children

var number = 0;

setInterval(()=>{
    let num = number%3
    arr[num].style.width = '0';
    
    number++;
    num = number%3
    arr[num].style.width = '100%';
},5000)


const menu = document.querySelector('#btt')
const cross = document.querySelector('#cross')
const links = document.querySelector('.links')


menu.addEventListener('click',()=>{
    links.style.top = '0'
    menu.style.opacity = '0%'
    
})

cross.addEventListener('click',()=>{
    links.style.top = '-200%'
    menu.style.opacity = '100%'

})
    
