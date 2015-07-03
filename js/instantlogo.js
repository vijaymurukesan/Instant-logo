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

		$('input').on('keyup', function(e){
			e.preventDefault();
			var code = e.which; // recommended to use e.which, it's normalized across browsers
			    //if(code==13)e.preventDefault();
			    if(code==32||code==13||code==188||code==186){
					e.preventDefault()
					$('#searchList').html('');
					displayLogo();        
		 		} else{
		 			e.preventDefault()
		 		}
		});
		$('#colorPicker').on('blur', function(){
			var hexvalue = '#' + $(this).val();
			fontcolor(hexvalue);
		})

	}
	this.displayLogo = function(){
		var logoName = $('input').val();
		if(logoName !==''){

			$(fontName).each(function(index, value){
			var classes = value + ' ' + 'color';
			var logoNameDom = $('<h2>').attr({
												'class': classes
			
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
	this.buildStyleSheet = function(id, cssrule){
		var idwithHash = '#'+id;
		if($(idwithHash).length == 0){
			var style = $('<style>').attr({
									'rel': 'stylesheet',
									'id': id
									})
									.text(cssrule);

			$('head').append(style);
		} else
		{
			$(idwithHash).text(cssrule);	
		}
		
		
		
	}
	this.fontcolor = function(textcolor){
		var id = 'color',
		color = textcolor,
		cssRuleColor = '.color{color:' + color +' }';
		buildStyleSheet( id, cssRuleColor)
	}

	return {
		init : this.init,
		fontcolor: this.fontcolor
	}
}());


$(document).ready(function(){
	instantLogo.init();
});