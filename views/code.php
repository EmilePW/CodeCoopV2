<?php
	ini_set('display_errors', 'On');

	if($_POST) {
		print_r($_POST);
		$mysqli = new mysqli("localhost", "root", "901jumper", "codecoop");
		//$codeOutput = $mysqli->real_escape_string($_POST['codeOutput']);
		$query = "INSERT INTO codesnippets (code) VALUES ('".$codeOutput."')";
		$mysqli->query($query);
	}
	
	
?>

<section class="code-area">	
	<ul>
		<li> <button ng-click="tab = 1">HTML</button> </li>
		<li> <button ng-click="tab = 2">CSS</button> </li>
	</ul>
	<div class="code-editors">
		<div class="html-editor editor" ng-show="tab === 1">
			<textarea class="editor-instance" ui-codemirror="editorOptions.html" ng-model="editorValues.html">
			 </textarea>
		</div>
		<div class="css-editor editor" ng-show="tab === 2">
			<textarea class="editor-instance" ui-codemirror="editorOptions.css" ng-model="editorValues.css">
			 </textarea>
		</div>
	</div>
</section>

<section class="output-area">
	<form method="post" action="">
		<iframe name="codeOutput" class="output" sandbox="allow-same-origin allow-forms allow-scripts"></iframe>
		<input type="submit" name="save" value="Save"/>
	</form>
</section>

