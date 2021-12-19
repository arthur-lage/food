const nameField = document.querySelector("#name")
const emailField = document.querySelector("#email")
const messageField = document.querySelector("#message")

const sendButton = document.querySelector("#send-message")
const sendAnotherButton = document.querySelector("#send-another-message")

sendButton.addEventListener("click", () => {
    function verifyName() {
        return nameField.value.length > 0 ? true : false
    }

    const verifyEmail = () => {
        return String(emailField.value)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    function verifyMessage() {
        return messageField.value.length >= 5 ? true : false
    }

    const name = verifyName()
    const email = verifyEmail()
    const message = verifyMessage()

    function checkErrors() {
        name == false && alert("Invalid name!")
        email == null && alert("Invalid email!")
        message == false && alert("Message needs at least 5 characters!")
    }

    checkErrors()

    if (name != false && email != null && message != false) {
        const contactSection = document.querySelector(".contact")

        contactSection.classList.add("sending")

        const timeoutTime = Math.floor(Math.random() * (3500 - 2000) + 2000)

        setTimeout(() => {
            contactSection.classList.remove("sending")

            contactSection.classList.add("sent")
        }, timeoutTime)

        nameField.value = ""
        emailField.value = ""
        messageField.value = ""
    }
})

sendAnotherButton.addEventListener("click", () => {
    const contactSection = document.querySelector(".contact")

    contactSection.classList.remove("sent")
})