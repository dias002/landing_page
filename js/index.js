const arrowDown = document.querySelector('.header_arrow')
arrowDown.addEventListener('click', function(){
    window.scrollBy({ top: 7000, behavior: 'smooth' })
})
