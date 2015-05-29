'use strict';

var htmlArea = document.querySelector('#html_edit');

var cssArea = document.querySelector('#css_edit');

var jsArea = document.querySelector('#js_edit');

var htmlEditor = CodeMirror.fromTextArea(htmlArea, {value: "Type your HTML here", mode: "htmlmixed"});

var cssEditor = CodeMirror.fromTextArea(cssArea, {value: "function myScript(){return 100;}\n", mode: "css"})

var jsEditor = CodeMirror.fromTextArea(jsArea, {value: "Type your JavaScript here", mode: "javascript"});

var editors = [htmlEditor, cssEditor, jsEditor];

htmlEditor.setValue("<!--Type your HTML here-->\n<p class=\"intro\">\n<span class=\"title\">\nWelcome to CodeCoop.\n</span>\n<br>\n<br>\nYou can use this site to practice\nyour web design and development\nskills with a friend or teach them.\n<br>\n<br>\nAll of the editors and the canvas\nare draggable and resizable so you\nare not constrained by tabs or\neditor size.\n<br>\n<br>\nUse the icons on the left to turn\non or off the editors along with\nvideo chat, press collaborate to\ninvite someone to work with you.\n</p>");

cssEditor.setValue("/*This is the CSS Editor*/\n\nbody {\n\tbackground: #fff;\n}\n\n.intro {\n\tfont-size: 16px;\n\tfont-family: 'Cabin', sans-serif;\n\ttext-align: center;\n}\n\n.title {\n\tfont-size:18px;\n}");

jsEditor.setValue("//This is the JavaScript editor");

var the_html = $('.CodeMirror').first();

var the_css = $('.CodeMirror').first().next();

$('.CodeMirror').addClass('editor')

$('.editor').first().addClass('html-editor');

$('.editor:odd').addClass('css-editor');

$('.editor').last().addClass('js-editor');

$('#explain-video').hide();

console.log(the_css);

the_css.hide();

document.addEventListener('keyup', function(){ render() }, false);

var template = 
	"<!doctype html>\n" +
    "<html>\n\t" +
    "<head>\n\t\t" +
    "<meta charset=\"utf-8\">\n\t\t" +
    "<title>Test</title>\n\n\t\t\n\t" +
    "<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js\"></script>" +
    "</body>\n" +
    "</head>\n\t" +
    "<body>\n\t\n\t" +
    "</html>";

var getSource = function() {
	var html = htmlEditor.getValue();
	var	css = cssEditor.getValue();
	var	js = jsEditor.getValue();
	var src = '';

	//HTML
	src = template.replace('</body>', html + '</body>');

	//CSS
	css = '<style>' + css + '</style>';
	src = src.replace('</head>', css + '</head>');

	//JavaScript
	js = '<script>' + js + '</script>';
	src = src.replace('</body>', js + '</body>');

	return src;
}

var render = function() {
	var source = getSource();

	var iframe = document.querySelector('#output iframe');
	var	iframe_doc = iframe.contentDocument;

	iframe_doc.open();
	iframe_doc.write(source);
	iframe_doc.close();
};

var htmlOn = 1;
var cssOn = 1;
var jsOn = 1;
var canvasOn = 1;
var collabOn = -1;

$('.collab').click(function(){
	collabOn *= -1;
	if(collabOn === 1){
		TogetherJS();
		$('#collab-status').css('border-color', 'green');
	}
	else {
		TogetherJS();
		$('#collab-status').css('border-color', 'red');
	}
});

$('.collab').click(function() {
	
});

$('#canvas-switch').click(function(){
	canvasOn *= -1;
	if(canvasOn === 1){
		$('#output').show();
		$('#canvas-status').css('border-color', 'green');
	}
	else {
		$('#output').hide();
		$('#canvas-status').css('border-color', 'red');
	}
});

$('#html-switch').click(function(){
	htmlOn *= -1;
	if(htmlOn === 1){
		$('#html-area').show();
		$('#html-status').css('border-color', 'green');
	}
	else {
		$('#html-area').hide();
		$('#html-status').css('border-color', 'red');
	}
});

$('#css-switch').click(function(){
	cssOn *= -1;
	if(cssOn === 1){
		$('#css-area').show();
		$('#css-status').css('border-color', 'green');
	}
	else {
		$('#css-area').hide();
		$('#css-status').css('border-color', 'red');
	}
});

$('#js-switch').click(function(){
	jsOn *= -1;
	if(jsOn === 1){
		$('#js-area').show();
		$('#js-status').css('border-color', 'green');
	}
	else {
		$('#js-area').hide();
		$('#js-status').css('border-color', 'red');
	}
});

//Drag and Drop functionality
$('#html-window').mousedown(function() {
	var offset = $('#html-area').offset();
	var xDiff = event.pageX - offset.left;
	var yDiff = event.pageY - offset.top;
	$('#html-area').css('z-index', '13');
	$('.arrow1').css('z-index', '14');
	$('.rc1').css('z-index', '15');
	$('#video-chat').css('z-index', '10');
	$('.arrow5').css('z-index', '11');
	$('.rc5').css('z-index', '12');
	$('#output').css('z-index', '7');
	$('.arrow4').css('z-index', '8');
	$('.rc4').css('z-index', '9');
	$('#js-area').css('z-index', '4');
	$('.arrow3').css('z-index', '5');
	$('.rc3').css('z-index', '6');
	$('#css-area').css('z-index', '1');
	$('.arrow2').css('z-index', '2');
	$('.rc2').css('z-index', '3');

		$(this).mousemove(function(event) {
			$( '#html-area' ).offset({ top: event.pageY - yDiff, left: event.pageX - xDiff })
		})
}).mouseup( function() {
	$(this).off('mousemove');
});

$('#css-window').mousedown(function() {
	var offset = $('#css-area').offset();
	var xDiff = event.pageX - offset.left;
	var yDiff = event.pageY - offset.top;
	$('#css-area').css('z-index', '13');
	$('.arrow2').css('z-index', '14');
	$('.rc2').css('z-index', '15');
	$('#video-chat').css('z-index', '10');
	$('.arrow5').css('z-index', '11');
	$('.rc5').css('z-index', '12');
	$('#output').css('z-index', '7');
	$('.arrow4').css('z-index', '8');
	$('.rc4').css('z-index', '9');
	$('#js-area').css('z-index', '4');
	$('.arrow3').css('z-index', '5');
	$('.rc3').css('z-index', '6');
	$('#html-area').css('z-index', '1');
	$('.arrow1').css('z-index', '2');
	$('.rc1').css('z-index', '3');
		$(this).mousemove(function(event) {
			$( '#css-area' ).offset({ top: event.pageY - yDiff, left: event.pageX - xDiff })
		})
}).mouseup( function() {
	$(this).off('mousemove');
});

$('#js-window').mousedown(function() {
	var offset = $('#js-area').offset();
	var xDiff = event.pageX - offset.left;
	var yDiff = event.pageY - offset.top;
	$('#js-area').css('z-index', '13');
	$('.arrow3').css('z-index', '14');
	$('.rc3').css('z-index', '15');
	$('#video-chat').css('z-index', '10');
	$('.arrow5').css('z-index', '11');
	$('.rc5').css('z-index', '12');
	$('#output').css('z-index', '7');
	$('.arrow4').css('z-index', '8');
	$('.rc4').css('z-index', '9');
	$('#css-area').css('z-index', '4');
	$('.arrow2').css('z-index', '5');
	$('.rc2').css('z-index', '6');
	$('#html-area').css('z-index', '1');
	$('.arrow1').css('z-index', '2');
	$('.rc1').css('z-index', '3');
		$(this).mousemove(function(event) {
			$( '#js-area' ).offset({ top: event.pageY - yDiff, left: event.pageX - xDiff })
		})
}).mouseup( function() {
	$(this).off('mousemove');
});

$('#output-window').mousedown(function() {
	var offset = $('#output').offset();
	var xDiff = event.pageX - offset.left;
	var yDiff = event.pageY - offset.top;
	$('#output').css('z-index', '13');
	$('.arrow4').css('z-index', '14');
	$('.rc4').css('z-index', '15');
	$('#video-chat').css('z-index', '10');
	$('.arrow5').css('z-index', '11');
	$('.rc5').css('z-index', '12');
	$('#js-area').css('z-index', '7');
	$('.arrow3').css('z-index', '8');
	$('.rc3').css('z-index', '9');
	$('#css-area').css('z-index', '4');
	$('.arrow2').css('z-index', '5');
	$('.rc2').css('z-index', '6');
	$('#html-area').css('z-index', '1');
	$('.arrow1').css('z-index', '2');
	$('.rc1').css('z-index', '3');
		$(this).mousemove(function(event) {
			$( '#output' ).offset({ top: event.pageY - yDiff, left: event.pageX - xDiff })
		})
}).mouseup( function() {
	$(this).off('mousemove');
});

$('#vid-window').mousedown(function() {
	var offset = $('#video-chat').offset();
	var xDiff = event.pageX - offset.left;
	var yDiff = event.pageY - offset.top;
	$('#video-chat').css('z-index', '13');
	$('.arrow5').css('z-index', '14');
	$('.rc5').css('z-index', '15');
	$('#output').css('z-index', '10');
	$('.arrow4').css('z-index', '11');
	$('.rc4').css('z-index', '12');
	$('#js-area').css('z-index', '7');
	$('.arrow3').css('z-index', '8');
	$('.rc3').css('z-index', '9');
	$('#css-area').css('z-index', '4');
	$('.arrow2').css('z-index', '5');
	$('.rc2').css('z-index', '6');
	$('#html-area').css('z-index', '1');
	$('.arrow1').css('z-index', '2');
	$('.rc1').css('z-index', '3');
		$(this).mousemove(function(event) {
			$( '#video-chat' ).offset({ top: event.pageY - yDiff, left: event.pageX - xDiff })
		})
}).mouseup( function() {
	$(this).off('mousemove');
});

//resize functionality
$('.rc3').mousedown(function(event) {
	event.preventDefault();
	var x = event.pageX;
	var y = event.pageY;
	var currWidth = $('#js-area').width();
	var currHeight = $('#js-area').height();
	var editorHeight = $('.js-editor').height();
	$('#js-area').css('z-index', '13');
	$('.arrow3').css('z-index', '14');
	$('.rc3').css('z-index', '15');
	$('#video-chat').css('z-index', '10');
	$('.arrow5').css('z-index', '11');
	$('.rc5').css('z-index', '12');
	$('#output').css('z-index', '7');
	$('.arrow4').css('z-index', '8');
	$('.rc4').css('z-index', '9');
	$('#css-area').css('z-index', '4');
	$('.arrow2').css('z-index', '5');
	$('.rc2').css('z-index', '6');
	$('#html-area').css('z-index', '1');
	$('.arrow1').css('z-index', '2');
	$('.rc1').css('z-index', '3');
	$(this).mousemove(function(event) {
		event.preventDefault();
		$('.rc3').offset({top: event.pageY - 31, left: event.pageX - 31});
		$('.arrow3').offset({top: event.pageY - 31, left: event.pageX - 31});
		$('#js-area').width(
			currWidth + event.pageX - x
		);
		$('#js-area').height(
			currHeight + event.pageY - y
		);
		$('.js-editor').height(
			editorHeight + event.pageY - y
		);
		$('.rc3').css({'top': '' + $('#js-area').height() - 28, 'left': '' + $('#js-area').width() - 37.5});
		$('.arrow3').css({'top': '' + $('#js-area').height() - 2, 'left': '' + $('#js-area').width() - 12});
	})
}).mouseup(function(event) {
	event.preventDefault();
	$('.rc3').off('mousemove');
}).mouseleave(function(event){
	event.preventDefault();
	$('.rc3').off('mousemove');
});

$('.rc1').mousedown(function(event) {
	event.preventDefault();
	var x = event.pageX;
	var y = event.pageY;
	var currWidth = $('#html-area').width();
	var currHeight = $('#html-area').height();
	var editorHeight = $('.html-editor').height();
	$('#html-area').css('z-index', '13');
	$('.arrow1').css('z-index', '14');
	$('.rc1').css('z-index', '15');
	$('#video-chat').css('z-index', '10');
	$('.arrow5').css('z-index', '11');
	$('.rc5').css('z-index', '12');
	$('#output').css('z-index', '7');
	$('.arrow4').css('z-index', '8');
	$('.rc4').css('z-index', '9');
	$('#js-area').css('z-index', '4');
	$('.arrow3').css('z-index', '5');
	$('.rc3').css('z-index', '6');
	$('#css-area').css('z-index', '1');
	$('.arrow2').css('z-index', '2');
	$('.rc2').css('z-index', '3');
	$(this).mousemove(function(event) {
		event.preventDefault();
		$('.rc1').offset({top: event.pageY - 31, left: event.pageX - 31});
		$('.arrow1').offset({top: event.pageY - 31, left: event.pageX - 31});
		$('#html-area').width(
			currWidth + event.pageX - x
		);
		$('#html-area').height(
			currHeight + event.pageY - y
		);
		$('.html-editor').height(
			editorHeight + event.pageY - y
		);
		$('.rc1').css({'top': '' + $('#html-area').height() - 28, 'left': '' + $('#html-area').width() - 37.5});
		$('.arrow1').css({'top': '' + $('#html-area').height() - 2, 'left': '' + $('#html-area').width() - 12});
	})
}).mouseup(function(event) {
	event.preventDefault();
	$('.rc1').off('mousemove');
}).mouseleave(function(event){
	event.preventDefault();
	$('.rc1').off('mousemove');
});

$('.rc2').mousedown(function(event) {
	event.preventDefault();
	var x = event.pageX;
	var y = event.pageY;
	var currWidth = $('#css-area').width();
	var currHeight = $('#css-area').height();
	var editorHeight = $('.css-editor').height();
	$('#css-area').css('z-index', '13');
	$('.arrow2').css('z-index', '14');
	$('.rc2').css('z-index', '15');
	$('#video-chat').css('z-index', '10');
	$('.arrow5').css('z-index', '11');
	$('.rc5').css('z-index', '12');
	$('#output').css('z-index', '7');
	$('.arrow4').css('z-index', '8');
	$('.rc4').css('z-index', '9');
	$('#js-area').css('z-index', '4');
	$('.arrow3').css('z-index', '5');
	$('.rc3').css('z-index', '6');
	$('#html-area').css('z-index', '1');
	$('.arrow1').css('z-index', '2');
	$('.rc1').css('z-index', '3');
	$(this).mousemove(function(event) {
		event.preventDefault();
		$('.rc2').offset({top: event.pageY - 31, left: event.pageX - 31});
		$('.arrow2').offset({top: event.pageY - 31, left: event.pageX - 31});
		$('#css-area').width(
			currWidth + event.pageX - x
		);
		$('#css-area').height(
			currHeight + event.pageY - y
		);
		$('.css-editor').height(
			editorHeight + event.pageY - y
		);
		$('.rc2').css({'top': '' + $('#css-area').height() - 28, 'left': '' + $('#css-area').width() - 37.5});
		$('.arrow2').css({'top': '' + $('#css-area').height() - 2, 'left': '' + $('#css-area').width() - 12});
	})
}).mouseup(function(event) {
	event.preventDefault();
	$('.rc2').off('mousemove');
}).mouseleave(function(event){
	event.preventDefault();
	$('.rc2').off('mousemove');
});

$('.rc4').mousedown(function(event) {
	event.preventDefault();
	var x = event.pageX;
	var y = event.pageY;
	var currWidth = $('#output').width();
	var currHeight = $('#output').height();
	var editorHeight = $('.output-frame').height();
	$('#output').css('z-index', '13');
	$('.arrow4').css('z-index', '14');
	$('.rc4').css('z-index', '15');
	$('#video-chat').css('z-index', '10');
	$('.arrow5').css('z-index', '11');
	$('.rc5').css('z-index', '12');
	$('#html-area').css('z-index', '7');
	$('.arrow1').css('z-index', '8');
	$('.rc1').css('z-index', '9');
	$('#js-area').css('z-index', '4');
	$('.arrow3').css('z-index', '5');
	$('.rc3').css('z-index', '6');
	$('#css-area').css('z-index', '1');
	$('.arrow2').css('z-index', '2');
	$('.rc2').css('z-index', '3');
	$(this).mousemove(function(event) {
		event.preventDefault();
		$('.rc4').offset({top: event.pageY - 31, left: event.pageX - 31});
		$('.arrow4').offset({top: event.pageY - 31, left: event.pageX - 31});
		$('#output').width(
			currWidth + event.pageX - x
		);
		$('#output').height(
			currHeight + event.pageY - y
		);
		$('.output-frame').height(
			editorHeight + event.pageY - y
		);
		$('.rc4').css({'top': '' + $('#output').height() - 30, 'left': '' + $('#output').width() - 37.5});
		$('.arrow4').css({'top': '' + $('#output').height() - 5, 'left': '' + $('#output').width() - 12});
	})
}).mouseup(function(event) {
	event.preventDefault();
	$('.rc4').off('mousemove');
}).mouseleave(function(event){
	event.preventDefault();
	$('.rc4').off('mousemove');
});

$('.rc5').mousedown(function(event) {
	event.preventDefault();
	var x = event.pageX;
	var y = event.pageY;
	var currWidth = $('#video-chat').width();
	var currHeight = $('#video-chat').height();
	var editorHeight = $('#video-container').height();
	$('#video-chat').css('z-index', '13');
	$('.arrow5').css('z-index', '14');
	$('.rc5').css('z-index', '15');
	$('#output').css('z-index', '10');
	$('.arrow4').css('z-index', '11');
	$('.rc4').css('z-index', '12');
	$('#html-area').css('z-index', '7');
	$('.arrow1').css('z-index', '8');
	$('.rc1').css('z-index', '9');
	$('#js-area').css('z-index', '4');
	$('.arrow3').css('z-index', '5');
	$('.rc3').css('z-index', '6');
	$('#css-area').css('z-index', '1');
	$('.arrow2').css('z-index', '2');
	$('.rc2').css('z-index', '3');
	$(this).mousemove(function(event) {
		event.preventDefault();
		$('.rc5').offset({top: event.pageY - 31, left: event.pageX - 31});
		$('.arrow5').offset({top: event.pageY - 31, left: event.pageX - 31});
		$('#video-chat').width(
			currWidth + event.pageX - x
		);
		$('#video-chat').height(
			0.75 * (currWidth + event.pageX - x)
		);
		$('#my-video').height(
			0.75 * (currWidth + event.pageX - x) / 4
		);
		$('#my-video').width(
			(currWidth + event.pageX - x) / 4
		);
		$('#their-video').height(
			0.75 * (currWidth + event.pageX - x)
		);
		$('#their-video').width(
			currWidth + event.pageX - x
		);
		$('#video-container').height(
			editorHeight + event.pageY - y
		);
		$('.rc5').css({'top': '' + $('#video-chat').height() - 28, 'left': '' + $('#video-chat').width() - 37.5});
		$('.arrow5').css({'top': '' + $('#video-chat').height() - 2, 'left': '' + $('#video-chat').width() - 12});
	})
}).mouseup(function(event) {
	event.preventDefault();
	$('.rc5').off('mousemove');
}).mouseleave(function(event){
	event.preventDefault();
	$('.rc5').off('mousemove');
});


$('#html-area').mousedown(function() {
	$('#html-area').css('z-index', '13');
	$('.arrow1').css('z-index', '14');
	$('.rc1').css('z-index', '15');
	$('#video-chat').css('z-index', '10');
	$('.arrow5').css('z-index', '11');
	$('.rc5').css('z-index', '12');
	$('#output').css('z-index', '7');
	$('.arrow4').css('z-index', '8');
	$('.rc4').css('z-index', '9');
	$('#js-area').css('z-index', '4');
	$('.arrow3').css('z-index', '5');
	$('.rc3').css('z-index', '6');
	$('#css-area').css('z-index', '1');
	$('.arrow2').css('z-index', '2');
	$('.rc2').css('z-index', '3');
});

$('#css-area').mousedown(function() {
	$('#css-area').css('z-index', '13');
	$('.arrow2').css('z-index', '14');
	$('.rc2').css('z-index', '15');
	$('#video-chat').css('z-index', '10');
	$('.arrow5').css('z-index', '11');
	$('.rc5').css('z-index', '12');
	$('#output').css('z-index', '7');
	$('.arrow4').css('z-index', '8');
	$('.rc4').css('z-index', '9');
	$('#js-area').css('z-index', '4');
	$('.arrow3').css('z-index', '5');
	$('.rc3').css('z-index', '6');
	$('#html-area').css('z-index', '1');
	$('.arrow1').css('z-index', '2');
	$('.rc1').css('z-index', '3');
})

$('#js-area').mousedown(function() {
	$('#js-area').css('z-index', '13');
	$('.arrow3').css('z-index', '14');
	$('.rc3').css('z-index', '15');
	$('#video-chat').css('z-index', '10');
	$('.arrow5').css('z-index', '11');
	$('.rc5').css('z-index', '12');
	$('#output').css('z-index', '7');
	$('.arrow4').css('z-index', '8');
	$('.rc4').css('z-index', '9');
	$('#css-area').css('z-index', '4');
	$('.arrow2').css('z-index', '5');
	$('.rc2').css('z-index', '6');
	$('#html-area').css('z-index', '1');
	$('.arrow1').css('z-index', '2');
	$('.rc1').css('z-index', '3');
});

$('#output').mousedown(function() {
	$('#output').css('z-index', '13');
	$('.arrow4').css('z-index', '14');
	$('.rc4').css('z-index', '15');
	$('#video-chat').css('z-index', '10');
	$('.arrow5').css('z-index', '11');
	$('.rc5').css('z-index', '12');
	$('#html-area').css('z-index', '7');
	$('.arrow1').css('z-index', '8');
	$('.rc1').css('z-index', '9');
	$('#js-area').css('z-index', '4');
	$('.arrow3').css('z-index', '5');
	$('.rc3').css('z-index', '6');
	$('#css-area').css('z-index', '1');
	$('.arrow2').css('z-index', '2');
	$('.rc2').css('z-index', '3');
});

$('#video-chat').mousedown(function() {
	$('#video-chat').css('z-index', '13');
	$('.arrow5').css('z-index', '14');
	$('.rc5').css('z-index', '15');
	$('#output').css('z-index', '10');
	$('.arrow4').css('z-index', '11');
	$('.rc4').css('z-index', '12');
	$('#html-area').css('z-index', '7');
	$('.arrow1').css('z-index', '8');
	$('.rc1').css('z-index', '9');
	$('#js-area').css('z-index', '4');
	$('.arrow3').css('z-index', '5');
	$('.rc3').css('z-index', '6');
	$('#css-area').css('z-index', '1');
	$('.arrow2').css('z-index', '2');
	$('.rc2').css('z-index', '3');
});



render();

$('#close-vid-expl').click(function() {
	$('#explain-video').hide();
});