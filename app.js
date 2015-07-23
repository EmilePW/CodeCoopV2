'use strict';

	var editorValues = {
					html : "<html>\n" +
						   "<head>\n" +
						   "\t<title></title>\n" +
						   "</head>\n" +
						   "<body>\n" +
						   "<style>" +
						   "</style>\n" +
						   "<!-- Enter Your Code Below -->\n\n" +
						   "</body>\n" +
						   "</html>",
					css: "body {\n\t\n}\n\n"
				};

	var staticHtml = 	   "<html>\n" +
						   "<head>\n" +
						   "\t<title></title>\n" +
						   "</head>\n" +
						   "<body>\n" +
						   "<style>" +
						   "</style>\n" +
						   "<!-- Enter Your Code Below -->\n\n" +
						   "</body>\n" +
						   "</html>"

	document.querySelector('.output').srcdoc = editorValues.html;

	var render = function() {
		var output = document.querySelector('.output');
		var currentCode = htmlEditor.getValue();
		var currentCss = cssEditor.getValue();

		currentCode = currentCode.replace(/<style>[\s\S]*?<\/style>/, '<style>' + currentCss + '</style>');
		output.srcdoc = currentCode;
	}

	var htmlInstance = document.getElementById('html-instance');

	var cssInstance = document.getElementById('css-instance');

	var htmlEditor = CodeMirror.fromTextArea(htmlInstance, {
		mode: "htmlmixed"
	});

	htmlEditor.setValue(editorValues.html);

	var cssEditor = CodeMirror.fromTextArea(cssInstance, {
		mode: "css"
	});

	cssEditor.setValue(editorValues.css);

	var editor = document.getElementsByClassName('CodeMirror');

	document.addEventListener("keydown", render);
