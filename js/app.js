$(document).foundation()
console.log("heloo");
var navLinks = document.querySelectorAll('.page'),
	mainMenu = document.querySelector('#mainNav'),
	marginY = 0,
	destination = 0,
	speed = 15,
	scroller = null,
	vidPlayer = document.querySelector('video'),
	lever = document.querySelector('#lever'),
	playPause = document.querySelector('#playPause'),
	stop = document.querySelector('#stop'),
	rewind = document.querySelector('#rewind'),
	forward = document.querySelector('#forward'),
	mainImg = document.querySelector('#mainImage'),
	thumbs = document.querySelectorAll('.gallery');

//smooth scrolling
function initDownScroll(dest) {	
	if(marginY < dest){
		scroller = setTimeout(function(){
			initDownScroll(dest);
		}, 1);
	}if(marginY >= dest){
		clearTimeout(scroller);
		scroller = null;
	}

	marginY += speed;
	window.scroll(0, marginY);
}

function initUpScroll(dest) {	
	if(marginY > dest){
		scroller = setTimeout(function() {
			initUpScroll(dest);
		}, 1);
	}if(marginY <= dest){
		clearTimeout(scroller);
	}

	marginY -= speed;
	window.scroll(0, marginY);
}

function hopper(e){
	e.preventDefault();

	destination = document.querySelector(`${this.getAttribute('href')}`).offsetTop;

	// check the 2 values here - if current position (marginY) < destination, do the normal scroll. if it's more, do the opposite cuz that means we want to scroll upward

	if (marginY < destination) { 
		initDownScroll(destination); 
	} else {
		initUpScroll(destination);
	}
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

function stopVid(){
	vidPlayer.pause();
	vidPlayer.currentTime = 0;
}


navLinks.forEach(navLink => navLink.addEventListener('click', hopper));
navLinks.forEach(navLink => navLink.addEventListener('click', addActive));
playPause.addEventListener('click', togglePlay);
lever.addEventListener('click', initVid);
stop.addEventListener('click', stopVid);
rewind.addEventListener('click', back);
forward.addEventListener('click', ffwd);



