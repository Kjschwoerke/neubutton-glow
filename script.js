const redColor = () => {
    let softButton = document.getElementsByClassName("neu-button")

    for (let i = 0; i<softButton.length; i++){
        softButton[i].classList.add("red")
        softButton[i].classList.remove("yellow")
        softButton[i].classList.remove("blue")
    }
    console.log('Test the Function Red')
}

const yellowColor = () => {
    let softButton = document.getElementsByClassName("neu-button")

    console.log(softButton.length)
    for (let i = 0; i<softButton.length; i++){
        softButton[i].classList.add("yellow")
        softButton[i].classList.remove("red")
        softButton[i].classList.remove("blue")
    }
       
    console.log('Test the Function Yellow')
}

const blueColor = () => {
    let softButton = document.getElementsByClassName("neu-button")

    console.log(softButton.length)
    for (let i = 0; i<softButton.length; i++){
        softButton[i].classList.add("blue")
        softButton[i].classList.remove("red")
        softButton[i].classList.remove("yellow")
    }
       
    console.log('Test the Function Yellow')
}