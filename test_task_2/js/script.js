const SLOTS_PER_REEL = 12;
const REEL_RADIUS = 150;

function createSlots (ring) {
	
	var slotAngle = 360 / SLOTS_PER_REEL;
	var seed = getSeed();

	for (var i = 0; i < SLOTS_PER_REEL; i ++) {
		var slot = document.createElement('div');
		
		slot.className = 'slot';

		var transform = 'rotateX(' + (slotAngle * i) + 'deg) translateZ(' + REEL_RADIUS + 'px)';

		slot.style.transform = transform;

		var content = $(slot).append(`<img src = "img/slot-machine/${((seed + i)%6)}.png" height = "74px" width = "76px"/>`);

		ring.append(slot);
	}
}

function getSeed() {
	return Math.floor(Math.random()*(SLOTS_PER_REEL));	
}

function spin(timer) {
	for(var i = 1; i < 6; i ++) {
		var oldSeed = -1;
		var oldClass = $('#ring'+i).attr('class');
		if(oldClass.length > 4) {
			oldSeed = parseInt(oldClass.slice(10));
		}
		var seed = getSeed();
		while(oldSeed == seed) {
			seed = getSeed();
		}

		$('#ring'+i)
			.css('animation','back-spin 1s, spin-' + seed + ' ' + (timer + i*0.5) + 's')
			.attr('class','ring spin-' + seed);
	}
}

$(document).ready(function() {
 	createSlots($('#ring1'));
 	createSlots($('#ring2'));
 	createSlots($('#ring3'));
 	createSlots($('#ring4'));
 	createSlots($('#ring5'));

 	$('.go').on('click',function(){
 		var timer = 2;
 		spin(timer);
 	})
 });