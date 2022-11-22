const navToggle = document.querySelector(".nav-toggle1")
const navMenu = document.querySelector(".nav-menu1")

navToggle.addEventListener("click",()=>{
    navMenu.classList.toggle("nav-menu_visible1");
    
    if (navMenu.classList.contains("nav-menu_visible1")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
      } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
      }
});

const menuLinks = document.querySelectorAll('.nav-menu1 a[href^="#"');

menuLinks.forEach(menuLinks => {
  menuLinks.addEventListener("click",function(){
    navMenu.classList.toggle("nav-menu_visible1")
  })
})