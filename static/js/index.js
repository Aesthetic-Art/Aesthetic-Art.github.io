window.onscroll = function() {myFunction()}

var navbar = document.getElementById("navbar")
var sticky = navbar.offsetTop;
var navItems = Array.from(document.querySelectorAll('.navbar-item a'))

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        navItems.forEach(function (navItem) {
            navItem.classList.add("navbar-item-sticky")
        })
    } else {
        navbar.classList.remove("sticky")
        navItems.forEach(function (navItem) {
            navItem.classList.remove("navbar-item-sticky")
        })
    }
}

const reviews = [
    {
        image: "./static/media/apurva.svg",
        name: "Apurva Bidkar",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet neque orci. Orci varius natoque penatibus et magnis vulputate elementum non a orci"
    },
    {
        image: "./static/media/sarthak.svg",
        name: "Sarthak Karandikar",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet neque orci. Orci varius natoque penatibus et magnis vulputate elementum non a orci"
    },
    {
        image: "./static/media/s.svg",
        name: "Saiee Nagane",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet neque orci. Orci varius natoque penatibus et magnis vulputate elementum non a orci"
    },
    {
        image: "./static/media/s.svg",
        name: "Saiee Nagane",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet neque orci. Orci varius natoque penatibus et magnis vulputate elementum non a orci"
    },
    {
        image: "./static/media/s.svg",
        name: "Saiee Nagane",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet neque orci. Orci varius natoque penatibus et magnis vulputate elementum non a orci"
    }
]

let nextReview = document.querySelector('.review-next')
let previousReview=document.querySelector('.review-previous')
let reviewDots = Array.from(document.querySelectorAll('.review-dot'))
let reviewName = document.querySelector('.review-name')
let reviewImg = document.querySelector('.review-img')
let reviewTxt = document.querySelector('.review-txt')
let reviewCounter = 1


function showNextReview() {
    for (let j = 0; j<reviewDots.length; j++){
        if (reviewDots[j].style.backgroundColor == "white") {
            reviewCounter=j+1
        }
    }

    let i = 1
    console.log(reviewCounter)
    reviewName.innerHTML = reviews[reviewCounter]['name']
    reviewImg.src = reviews[reviewCounter]['image']
    reviewTxt.innerHTML = reviews[reviewCounter]['text']

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

    let i = reviewDots.length 
    console.log(reviewCounter)
    reviewName.innerHTML = reviews[reviewCounter-2]['name']
    reviewImg.src = reviews[reviewCounter-2]['image']
    reviewTxt.innerHTML = reviews[reviewCounter-2]['text']

    if (reviewCounter == 2) {
        previousReview.firstElementChild.style.color = "#7D5A50"
        previousReview.ele
    }

    else if (reviewCounter == 5) {
        nextReview.firstElementChild.style.color="white"
    }


    for (const reviewDot of [...reviewDots].reverse()) {
        if (reviewCounter-i==1) {
            reviewDot.style.backgroundColor = "white"
            reviewDot.style.opacity = "1"
            break
        }
        else {
            reviewDot.style.backgroundColor = "#C3C3C3"
            reviewDot.style.opacity = "0.3"
            i -= 1
        }
    }
}

nextReview.addEventListener('click', showNextReview, false)
previousReview.addEventListener('click', showPreviousReview, false)