## FitText - Meteor Smart Package

[FitText](http://fittextjs.com) packaged for Meteor. FitText is a jQuery plugin that makes font-sizes scalable and fluid when using responsive layouts (like Bootstrap).

See the [FitText Docs](https://github.com/davatron5000/FitText.js) for more info.

### How to install?

1. Install [meteorite](https://github.com/oortcloud/meteorite)
2. `mrt add fittext`

### How to use FitText:
	
// app.less

	.my-container {
		width: 90%;
		height: 100%;
		margin-top: 20px;
		font-size: 100%;
	}

	.my-container h1 {
		width: 100%;
		color: #fff;
		font-family: 'Lobster', serif;
		font-size: 220px; /* set a fall-back size */
		line-height: 1;
		font-weight:bold;
		display: inline-block;
		margin: 0 auto; 
	}

// app.js

	Template.your_template.rendered = function () {
		$('h1').fitText(0.59); // you can play with this number or omit it all together to get your size just right
	};

// app.html
	
	// Don't forget to include you web-fonts... This needs to be done before your template loads, but should really be done in <head>
	// <link href='http://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>

	<template name="your_template">
		<div class="container my-container">
			<h1>My Giant Text!</h1>
		</div>
	</template>



	