var vid = document.querySelector("video"),
controls = document.querySelectorAll(".video_controls_bar"),
volup = document.querySelector("#volup"),
voldown = document.querySelector("#voldown"),
volmute = document.querySelector("#mutebtn"),
ppause = document.querySelector("#ppause");
full = document.querySelector("#fullscreenbtn");

//click to view
var buy = document.querySelector("#clicktoview");
var remove = document.querySelector("#removeclass");


function volumeUp(){
  if (vid.volume <= 1) {
			vid.volume += .2;
		}
}

function volumeDown(){
  if (vid.volume >= 0) {
		vid.volume -= .2;
	}
}

function volumeMute(){
  vid.volume = 0;
}

function ppausebtn(){
  if(vid.paused){
    vid.play();

  }else{
    vid.pause();
  }
}

function fullscreenbtnmenu(){

  if (vid.requestFullscreen) {
    vid.requestFullscreen();
  } else if (vid.mozRequestFullScreen) {
    vid.mozRequestFullScreen();
  } else if (vid.webkitRequestFullscreen) {
    vid.webkitRequestFullscreen();
  } else if (vid.msRequestFullscreen) {
    vid.msRequestFullscreen();
  }
}

//click to view
function viewform(){
  remove.classList.remove('hidden');
}


volup.addEventListener("click", volumeUp, false);
voldown.addEventListener("click", volumeDown, false);
volmute.addEventListener("click", volumeMute, false);
ppause.addEventListener("click", ppausebtn, false);
full.addEventListener("click", fullscreenbtnmenu, false);

//click to view
buy.addEventListener("click", viewform, false);






// gallery

var mainphoto = document.querySelector('#photo'),
caption = document.querySelector('#caption'),
prev = document.querySelector('#prevbtn'),
next = document.querySelector('#nextbtn'),
thumbs = document.querySelectorAll('.dot'),
count = 0,
photos = ['military.png','rico_denise_casper.jpg','shot.png','whipped.png','starshiptroopers11717.jpg','starship-hed.jpg'],
captions = ['Recruitment','Main Crew','Training','Disipline','Indured soldier','Dead Bug'];

//console.log(thumbs);
// functions that perform necessary actions on the objects above
//functions = 'named' chunks of code that run once when called by name

/*if(statement is true) {
	do this if it is true
}else if(something else is true) {
	do the other thing
}*/


function nextPhoto() {
	count++;
	if(count == photos.length) {
		count = 0;
	}

	mainphoto.src = 'images/'+photos[count];
	caption.innerHTML = captions[count];
}

function prevPhoto() {
	count--;
	if(count < 0) {
		count = photos.length - 1;
	}
	mainphoto.src = 'images/'+photos[count];
	caption.innerHTML = captions[count];
}


function showPhotoById(evt) {
	var pick = evt.target.id;
	//console.log(evt.target.id);
	mainphoto.src = 'images/'+photos[pick];
	caption.innerHTML = captions[pick];count = pick;
	count = pick;
}


function showPhotoByData() {
	var pick = this.dataset.pick;
	console.log(pick);
	mainphoto.src = 'images/'+photos[pick];
	caption.innerHTML = captions[pick];
	count = pick;
}


//listeners and events

for(var i = 0; i < thumbs.length; i++) {
	thumbs[i].addEventListener('click',showPhotoByData, false);
}
next.addEventListener('click', nextPhoto,false);
prev.addEventListener('click', prevPhoto,false);



// end gallery
