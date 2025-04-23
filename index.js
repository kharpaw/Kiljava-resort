/*---next/prev---*/
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function()
{
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})
prev.addEventListener('click', function()
{
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})
/*---next/prev---*/
function toggleMobileMenu(menu) {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('open');
    menu.classList.toggle('open');
  }
  

