window.addEventListener("scroll", () => {
    const header = document.querySelector("header")
    header.classList.toggle("sticky", window.scrollY > 0)
})

const mobileMenu = document.querySelector(".mobile-menu")

mobileMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("open")

    if(mobileMenu.classList.contains("open")) {
        const header = document.querySelector("header")
        
        document.body.classList.add("menuIsOpen")
        header.classList.add("sticky")
    } else {
        const header = document.querySelector("header")

        document.body.classList.remove("menuIsOpen")
        header.classList.remove("sticky")
    }
})