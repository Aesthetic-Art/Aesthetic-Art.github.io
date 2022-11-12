let nextReview = document.querySelector('.review-next')
let previousReview=document.querySelector('.review-previous')
let reviewDots = Array.from(document.querySelectorAll('.review-dot'))
let reviewName = document.querySelector('.review-name')
let reviewImg = document.querySelector('.review-img')
let reviewTxt = document.querySelector('.review-txt')
let reviewCounter=1

function showNextReview() {
    for (let j = 0; j<reviewDots.length; j++){
        if (reviewDots[j].style.backgroundColor == "white") {
            reviewCounter=j+1
        }
    }

    let i=1
    reviewName.innerHTML = "Sarthak"
    reviewImg.src = "./static/media/sarthak.svg"
    reviewTxt.innerHTML = "Hola"

    if (reviewCounter == 1) {
        previousReview.firstElementChild.style.color="white"
    }

    else if (reviewCounter == 4) {
        nextReview.firstElementChild.style.color="#7D5A50"
    }

    for (const reviewDot of reviewDots) {
        if (i-reviewCounter==1) {
            reviewDot.style.backgroundColor = "white"
            reviewDot.style.opacity = "1"
            break
        }
        else {
            reviewDot.style.backgroundColor = "#C3C3C3"
            reviewDot.style.opacity = "0.3"
            i += 1
        }
    }
}

function showPreviousReview() {
    for (let j = 0; j<reviewDots.length; j++){
        if (reviewDots[j].style.backgroundColor == "white") {
            reviewCounter=j+1
        }
    }

    let i=reviewDots.length-1
    reviewName.innerHTML = "Sjsjsj"
    reviewImg.src = "./static/media/sarthak.svg"
    reviewTxt.innerHTML = "Hola"

    if (reviewCounter == 2) {
        previousReview.firstElementChild.style.color="#7D5A50"
    }

    else if (reviewCounter == 5) {
        nextReview.firstElementChild.style.color="white"
    }


    for (const reviewDot of reviewDots) {
        if (reviewCounter-i==1) {
            reviewDot.style.backgroundColor = "white"
            reviewDot.style.opacity = "1"
            break
        }
        else {
            reviewDot.style.backgroundColor = "#C3C3C3"
            reviewDot.style.opacity = "0.3"
            i += 1
        }
    }
}

nextReview.addEventListener('click', showNextReview, false)
previousReview.addEventListener('click', showPreviousReview, false)
