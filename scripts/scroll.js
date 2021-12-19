const sectionToReveal = document.querySelectorAll(".reveal")

const reveal = () => {
    for(let i = 0; i < sectionToReveal.length; i++){
        let windowHeight = window.innerHeight
        let revealTop = sectionToReveal[i].getBoundingClientRect().top
        let revealPoint = 150

        if(revealTop < windowHeight - revealPoint){
            sectionToReveal[i].classList.add("active")
        }
    }
}

window.addEventListener("scroll", reveal)