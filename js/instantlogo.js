;
var fontName = ['gooddogregular','alex_brushregular'];

function displayLogo(){
	var logoName = $('input').val();
		if(logoName !==''){
			$(fontName).each(function(index, value){
			console.log(value);
			var logo = '<div class="col-m-6"><h1 class="' + value + ' ">' + logoName + '</h1></div>';
			$('#searchList').append(logo);
		});	
	}
}

$('button').on('click', function(e){
	e.preventDefault();
	$('#searchList').html('');
	displayLogo();	
});


$('input').on('keyup', function(e){
	e.preventDefault();
	var code = e.which; // recommended to use e.which, it's normalized across browsers
	    if(code==13)e.preventDefault();
	    if(code==32||code==13||code==188||code==186){
		$('#searchList').html('');
		displayLogo();        
    }
});
