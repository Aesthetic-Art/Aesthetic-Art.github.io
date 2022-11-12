let nextReview = document.querySelector('.review-next')
let previousReview=document.querySelector('.review-previous')
let reviewDots = Array.from(document.querySelectorAll('.review-dot'))
let reviewName = document.querySelector('.review-name')
let reviewImg = document.querySelector('.review-img')
let reviewTxt = document.querySelector('.review-txt')
let reviewCounter = 1

function showNextReview() {
    let i=1
    reviewName.innerHTML = "Sarthak"
    reviewImg.src = "./static/media/sarthak.svg"
    reviewTxt.innerHTML = "Hola"
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
            reviewCounter+=1
        }
    }
}

function showPreviousReview() {
    
}

nextReview.addEventListener('click', showNextReview, false)
previousReview.addEventListener('click', showPreviousReview, false)
