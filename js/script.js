document.querySelector('.menu_btn').addEventListener('click',() => {
    document.querySelector('.menu_btn').classList.toggle('active')
    document.querySelector('.header_menu').classList.toggle('active')
})
document.querySelectorAll('.header_menu_item').forEach((oneLink) => {
    oneLink.addEventListener('click',() =>{
    document.querySelector('.menu_btn').classList.toggle('active')
    document.querySelector('.header_menu').classList.toggle('active')
    })
})