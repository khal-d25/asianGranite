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