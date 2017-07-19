var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var pictureCt = document.querySelector('.picture')
var ct = document.querySelector('#ct')
var index = 0
var dots = document.querySelectorAll('.dot')

function showDot(){
	for(var i=0; i<dots.length; i++){
		dots[i].classList.remove('active')
	}
	dots[index].classList.add('active')
	// console.log(index)
}

for(var i=0; i<dots.length; i++){
	dots[i].onclick = function(){
		for(var i=0; i<dots.length; i++){
			dots[i].classList.remove('active')
		}
		this.classList.add('active')

	}
	
}
function next_btn(){

	// var newRight = parseInt(pictureCt.style.right)+435
	// pictureCt.style.right = newRight + 'px'
	// console.log(newRight)
	index++
	if(index>3){
		index=0
	}
	var newRight 
	if(parseInt(pictureCt.style.right) === 2175){
		newRight = 870
	}else{
		newRight = parseInt(pictureCt.style.right)+435
	}

	pictureCt.style.right = newRight+'px'

	// console.log(parseInt(pictureCt.style.right))

}

function prev_btn(){
  index--
	if(index<0){
		index=3
	}
	var newRight 
	if(parseInt(pictureCt.style.right) === 0) {
			newRight = 1305
	}else {
		newRight = parseInt(pictureCt.style.right)-435
	}

	pictureCt.style.right = newRight + 'px'
	console.log(newRight)
	console.log(index)
}

next.onclick = function(){
	next_btn()
	showDot()
}
prev.onclick = function(){
	prev_btn()
	showDot()
}

var timer = null 

function autoPlay(){
	timer = setInterval(function(){
		next_btn()
		showDot()
	},1500)
}

autoPlay()

ct.onmouseenter = function(){
	clearInterval(timer)
	console.log('stop')
	prev.classList.remove('display')
	next.classList.remove('display')

}

ct.onmouseleave = function(){
	autoPlay()
	console.log('start')
	prev.classList.add('display')
	next.classList.add('display')
}




