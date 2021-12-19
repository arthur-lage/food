const mobileNavLink = document.querySelectorAll(".mobile-nav-link")

mobileNavLink.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("menuIsOpen")
        document.querySelector(".mobile-links")
        document.querySelector(".mobile-menu").classList.remove("open")
    })
})