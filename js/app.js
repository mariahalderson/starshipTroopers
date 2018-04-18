$(document).foundation()

var navLinks = document.querySelectorAll('#mainNav li a'),
	aboutLink = document.querySelector('#aboutLink'),
	marginY = 0,
	destination = 0,
	speed = 10,
	scroller = null,
	vidPlayer = document.querySelector('video'),
	lever = document.querySelector('#lever'),
	playPause = document.querySelector('#playPause'),
	rewind = document.querySelector('#rewind'),
	forward = document.querySelector('#forward'),
	mainImg = document.querySelector('#mainImage'),
	thumbs = Array.from(document.querySelectorAll('.gallery')),
	leftImg = document.querySelector('#gallery-left');

//smooth scrolling
function initScroll(elementId){
	//how far from top is each page tag
	destination = document.getElementById(elementId).offsetTop;

	if (destination < 0) {
		destination = 0;
	}
	
	if(marginY < destination){
		scroller = setTimeout(function(){
			initScroll(elementId);
		}, 1);
	}if(marginY >= destination){
		clearTimeout(scroller);
	}

	marginY += speed;
	window.scroll(0, marginY);

//need to figure out how to scroll back up

	// if(destination > destination){
	// 	marginY -= speed;
	// 	window.scroll(0, marginY);
	// }

	console.log(elementId+" destination: "+destination);
}


function hopper(e){
	e.preventDefault();
	initScroll(this.dataset.link);
}

//change color of active navigation links by adding "active class"
function addActive(){
	navLinks.forEach(navLink => navLink.classList.remove('active'));
	this.classList.add('active');
}

//video functions

function initVid(){
	vidPlayer.play();
}

function togglePlay(){
	if(vidPlayer.paused){
		vidPlayer.play();
	}else{
		vidPlayer.pause();
	}
}

function back(){
	vidPlayer.currentTime -= 5;
}

function ffwd(){
	vidPlayer.currentTime += 5;
}

function fillImage(){
	mainImg.innerHTML = `<img src="images/${this.id}.jpg" alt="gallery image">`
}

// function imageLeft(){

// 	mainImg.innerHTML = `<img src="images/${thumbs[]}.jpg" alt="gallery image">`
// }


navLinks.forEach(navLink => navLink.addEventListener('click', hopper));
navLinks.forEach(navLink => navLink.addEventListener('click', addActive));
playPause.addEventListener('click', togglePlay);
lever.addEventListener('click', initVid);
rewind.addEventListener('click', back);
forward.addEventListener('click', ffwd);

thumbs.forEach(thumb => thumb.addEventListener('click', fillImage));
// leftImg.addEventListener('click', imageLeft);




