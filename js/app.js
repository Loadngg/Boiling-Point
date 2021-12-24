// Scroll Top on reload
// $(window).on('beforeunload', function(){
//     $(window).scrollTop(0);
// });

// Smooth scroll
const smoothLinks = document.querySelectorAll('a[href^="#"]'); 
    for (let smoothLink of smoothLinks) { 
    smoothLink.addEventListener('click', function(event) { 
    event.preventDefault(); 
    const yOffset = -80; 
    const id = smoothLink.getAttribute('href'); 
    const element = document.querySelector(id) 
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset; 

    window.scrollTo({top: y, behavior: 'smooth'}); 
    }) 
}

// Sticky header
let header = document.getElementById('header');
let headerH = header.clientHeight;
let scrollOffset = window.scrollY;

checkPos(scrollOffset);

window.onscroll = function () {
    scrollOffset = window.scrollY;

    checkPos(scrollOffset);
}

function checkPos(scrollOffset) {
    if (scrollOffset >= headerH) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
}

// Slick
$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:2,
        slidesToScroll: 1,
		autoplay:true,
		speed:1500,
		autoplaySpeed:2000,
	});
});

// News
// let requestURL = 'news.json';
// let request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();

// request.onload() = function() {
//     let news = request.response;
//     console.log(news[0]);
// }

// Show all partn
let btn = document.getElementById('btnPartn');
btn.onclick = function () {
    let hidden = document.getElementById('hiddenTable');
    var actualDisplay = getComputedStyle(hidden).display;
    if (actualDisplay === 'none') {
        console.log(actualDisplay);
        hidden.style.display = 'block';
        btn.innerHTML = 'скрыть всё';
    } else {
        hidden.style.display = 'none';
        btn.innerHTML = 'показать всё';
    }
}