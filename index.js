const mobile_nav = document.querySelector('.mobile-navbar-btn');
const nav_header = document.querySelector('.header')


const togglerFunction = ()=>{
    nav_header.classList.toggle("active")
}



mobile_nav.addEventListener('click',()=> togglerFunction()
   
)

// smooth scrolling ================

const sectionHero = document.querySelector('.section-hero')
const sectionAbout = document.querySelector('.section-about')
const sectionServices = document.querySelector('.section-services')
const sectionGallery = document.querySelector('.section-gallery')
const sectionContact = document.querySelector('.section-contact')


document.querySelector(".home-link").addEventListener("click", ()=>{
    sectionHero.scrollIntoView({behavior: "smooth"})
})

document.querySelector('.about-link').addEventListener("click", ()=>{
    sectionAbout.scrollIntoView({behavior:"smooth"})
})

document.querySelector(".services-link").addEventListener('click', ()=>{
    sectionServices.scrollIntoView({behavior:"smooth"})
} )


document.querySelector(".gallery-link").addEventListener('click', ()=>{
    sectionGallery.scrollIntoView({behavior:"smooth"})
})


document.querySelector('.contact-link').addEventListener('click', ()=>{
    sectionContact.scrollIntoView({behavior:"smooth"})
})