var ceasarShift= function(){

	var myString= "hello";
	var shifAmount= 14;
	var cipherString= ""

	var x= '';
	for(var counter= 0; counter< 5;counter++){
		
			var asciiCode= myString.charCodeAt(counter);

			x= String.fromCharCode((asciiCode- 65+ shifAmount)+65);
			cipherString+=x;
			
	}

	return cipherString;
}

document.getElementById('demo').innerHTML= window.ceasarShift();