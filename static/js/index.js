let nextReview = document.querySelector('.review-next')
let previousReview=document.querySelector('.review-previous')
let reviewDots = Array.from(document.querySelectorAll('.review-dot'))
let reviewName = document.querySelector('.review-name')
let reviewImg = document.querySelector('.review-img')
let reviewTxt = document.querySelector('.review-txt')
let reviewCounter = 1

function showNextReview() {
    reviewName.innerHTML = "Sarthak"
    reviewImg.src = "./static/media/sarthak.svg"
    reviewTxt.innerHTML = "Hola"
    for (let reviewDot in reviewDots) {
        
    }
}

function showPreviousReview() {
    
}

nextReview.addEventListener('click', showNextReview, false)
previousReview.addEventListener('click', showPreviousReview, false)
