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

const names = ['Rajasthan Stone1','Rajasthan Stone2','Rajasthan Stone3','Rajasthan Stone4','Rajasthan Stone5','Rajasthan Stone6','Rajasthan Stone7','Rajasthan Stone8','Rajasthan Stone9']
const desc = ['About of 1 BLOCKS: Maximum size of 8ft x 5ft x 5ft SLABS: Maximum size of 8ft x 5ft with thickness of 2-3cm','About of 2','About of 3','About of 4','About of 5','About of 6','About of 7','About of 8','About of 9']

catimgs = document.querySelectorAll('.catimg')

catimgs.forEach(n => {
    n.addEventListener('click',()=>{
        // console.dir(n)
        const torem = document.querySelector('.show')
        console.log(torem)
        if(torem !== null){
            torem.remove()
        }
        // torem.remove()
        const a = document.createElement('div')
        const b = document.createElement('div')
        const c = document.createElement('div')
        const d = document.createElement('h1')
        const e = document.createElement('span')
        
        const g = document.createElement('p')
        
        a.classList.add('show')
        const url = `url(${n.src})`
        a.style.backgroundImage = url
        b.classList.add('div1')
        c.classList.add('div2')
        const value = n.nextElementSibling.innerText;
        console.log(value)
        d.innerText = value;
        e.innerHTML = '<i class="uil uil-multiply"></i>'
        
        b.append(d)
        b.append(e)
        
       
        const i = names.indexOf(value)
        g.innerText = desc[i]

        
        c.append(g)

        a.append(b)
        a.append(c)

        e.addEventListener('click',()=>{
            e.parentElement.parentElement.remove()
        })

        document.body.append(a)




        
    })
    
});
    