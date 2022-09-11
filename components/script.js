const open=document.querySelector('.open')
const close=document.querySelector('.close')

open.addEventListener('click',()=>{
    if(close.classList.contains('close')){
        close.classList.add('active')
        open.classList.remove('active')
    }
})

close.addEventListener('click',()=>{
    if(open.classList.contains('open')){
        open.classList.add('active')
        close.classList.remove('active')
    }
})