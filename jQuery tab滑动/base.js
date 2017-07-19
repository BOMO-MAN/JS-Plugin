var tab = $('.tab')
var box = $('.box')

tab.on('mouseenter',function(){
	var target = $(event.target)
	var index = target.index()
	target.addClass('active')
	      .siblings().removeClass('active')
	showBox(index)	     
})

function showBox(index){
	$('.box').eq(index).removeClass('display')
	$('.box').eq(index).siblings().addClass('display')
}
