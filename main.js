navigator.getWebcam = ( navigator.getUserMedia || 
						navigator.webkitGetUserMedia ||
						navigator.mozGetUserMedia ||
						navigator.msGetUserMedia);

var peer = new Peer({key: 'tg15cy1t500jxlxr',
						debug: 3,
						config: {'iceServers': [
						{ url: 'stun:stun.l.google.com:19302'},
						{ url: 'stun:stun1.l.google.com:19302'},
						]}});

//On open set the peer id
peer.on('open', function(){
	$('.my-id').text(peer.id);
});

var vidOn = 1;

$('#video-chat').hide();

peer.on('call', function(call) {
	//Answer call automatically
	call.answer(window.localStream);
	step3(call);
});

//Click handers setup
$(function() {
	$('#make-call').click(function() {
		//Initiate a call
		$('.vid-instruct').hide();
		var call = peer.call($('#callto-id').val(), window.localStream);
		step3(call);
	});
	$('#end-call').click(function() {
		window.existingCall.close();
		step2();
	});

	//Retry if getUserMedia fails
	$('#open-call').click(function() {
		vidOn = -vidOn;
		console.log(vidOn);
		if(vidOn === 1){
			$('#video-status').css('border-color', 'green');
			$('#video-chat').show();
			$('#step1-error').hide();
			step1();
			//Get things started 
			step1();
		}
		else {
			$('#video-status').css('border-color', 'red');
			$('#explain-video').hide();
			$('#video-chat').hide();
		}
	})
});

$('#vid-info').click(function() {
	$('#explain-video').show();
})



function step1() {
	//Get audio/video stream
	navigator.getWebcam({audio: false, video: true}, function(stream) {
		//Disaply video stream in video object
		$('#my-video').prop('src', URL.createObjectURL(stream));

		window.localStream = stream;
		step2();
	}, function(){ $('#step1-error').show(); } );
}

function step2() {
	$('#step1', '#step3').hide();
	$('#step2').show();
}

function step3(call) {
	//Hang up on an existing call if present
	if (window.existingCall) {
		window.existingCall.close();
	}

	//Wait for stream on the call, then setup peer video
	call.on('stream', function(stream) {
		$('#their-video').prop('src', URL.createObjectURL(stream));
	});
	$('#step1', '#step2').hide();
	$('#step3').show();
}



