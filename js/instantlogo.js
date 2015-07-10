;
var instantLogo = instantLogo || {};

var instantLogo = (function(){
	var fontName = [
					'gooddogregular',
					'alex_brushregular'
					];
	var fontNameObj = {
		'name':'gooddogregular',
		'style':'Artistic',
		'type':'San sarif',
		'author': 'font owner',
		'license':true,
		'licensetype': 'MIT'
	};
	this.init = function(){
		
		$('button').on('click', function(e){
			e.preventDefault();
			$('#searchList').html('');
			displayLogo();	
		});
		$('#userLogoInput').on('keyup', function(e){
			e.preventDefault();
			var code = e.which; 
			    if(code==13){
					e.preventDefault()
					$('#searchList').html('');
					displayLogo();        
		 		} else{
		 			e.preventDefault()
		 		}
		});
		// $('#colorPicker').on('blur', function(){
		// 	var hexvalue = '#' + $(this).val();
		// 	fontcolor(hexvalue);
		// });
		$('#bgPicker').on('blur', function(){
			var hexvalue = '#' + $(this).val();
			backgroundcolor(hexvalue);
		});
		displayLogo();
	}
	this.eachCharacterStyleTool = function(logoName){
		var logoName = logoName;
		$('#eachCharPicker').html('');
		for(var i=0; i<logoName.length; i++){
			var number = i+ 1;
			$('#eachCharPicker').append('<input type="text" name="eachCharStyle" class="color" value="000" id="char' + number + '" />'  );
		}

		$('#pickers input, #eachCharPicker input').on('blur',function(){
			var hexvalue = '#' + $(this).val();
			var functionName = this.name;
			var id = this.id;
			//find obj
			var fn = window[functionName];
			// is object
			if (typeof fn === "function") fn(hexvalue, id);
		});

	}
	this.displayLogo = function(){
		var logoName = $('#userLogoInput').val();
		eachCharacterStyleTool(logoName);
		if(logoName !==''){
			$(fontName).each(function(index, value){
			var logoNameDom = $('<h2>').attr({
												'class': value
											});
			for(var i=0; i<logoName.length; i++){
				console.log(logoName[i]);
				logoNameDom.append('<span class="char'+ (i+1) +'">'+ logoName[i]+'</span>');
			}
			var logo = $('<div>')
						.attr({
								'class':'col-m-6 bg'
							}).append(logoNameDom);
			$('#searchList').append(logo);
			});	
		}
	}
	var styleProperties = {
		'fontcolor': '.font-color { color:"#000" }',
	};
	var cssString;
	this.buildStyleSheet = function(id, cssrule){
		styleProperties[id] = cssrule;
		cssString = '';
		console.log(styleProperties);
		for(var x in styleProperties){
			
			cssString = cssString.concat(styleProperties[x]);
		}
		console.log(cssString);
		$('#userModifiedCSS').html(cssString);
	}
	this.fontcolor = function(textcolor){
		var id = 'fontcolor',
		cssRuleColor = '.font-color { color:' + textcolor +' }';
		buildStyleSheet( id, cssRuleColor);
	}
	this.backgroundcolor = function(bg){
		var id = 'background',
		cssRuleColor = '.bg > div{ background:' + bg +' }';

		buildStyleSheet( id, cssRuleColor);
	}
	this.eachCharStyle = function(hexvalue, id){
		cssRule = '.'+id+'{color:'+ hexvalue +'}';
		buildStyleSheet( id, cssRule);
	}
	return {
		init : this.init,
		fontcolor: this.fontcolor
	}
}());


$(document).ready(function(){
	instantLogo.init();
});