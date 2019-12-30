//function colorfulText(){
 /// let input = document.getElementById("input").value;
  //let text = document.getElementById("text");
 //text.style.color= input
//} 
function colorChanger(){

if(document.getElementById('blue').checked){
document.body.style.background = "blue"
}
else if(document.getElementById('red').checked){
document.body.style.background = "red"
}
else if(document.getElementById('static').checked){
document.body.style.background = "gray"
}
else if(document.getElementById('text')){
document.getElementById("text").style.color = "red"
}
}

function colorful(){
	let changer = document.getElementById('backgroundChanger').value;
document.body.style.background= changer;
let textChanger = document.getElementById('text')
document.getElementById('colors').innerHTML = changer;

}
 let currentColor = document.body.style.background;
function colorFulTWO(){
	let colorCHANGER = document.getElementById('colors').value;
	let carma = 'gray';
    document.body.style.background = colorCHANGER;
    document.getElementById("liColor").innerHTML = colorCHANGER
}
	let r = 0;
		let g = 0;
			let b = 0;
			let bright = 0;
			let light = 0;
	function rCol(){

 document.getElementById("rCol1").innerHTML = r+=2
 document.body.style.background = `RGB(${r},${g},${b})`
 if(r > 250){
 r = 0;
 }
}

function gCol(){


 document.getElementById("gCol2").innerHTML = g+=2
 document.body.style.background = `RGB(${r},${g},${b})`
  if(g > 250){
 g = 0;
 }
}
function bCol(){

 document.getElementById("bCol3").innerHTML = b+=2
 document.body.style.background = `RGB(${r},${g},${b})`

  if(b > 250){
 b = 0;
 }
}

function black(){
	    document.getElementById("white").innerHTML = light--
	    if(light === -250){
light = 0;
	    }
 document.getElementById("rCol1").innerHTML = r < 0 ? r = 0 : r--
 document.getElementById("gCol2").innerHTML = g < 0 ? g = 0 : g--
 document.getElementById("bCol3").innerHTML = b < 0 ? b = 0 : b--
 document.body.style.background = `RGB(${r},${g},${b})`

}

function white(){
	document.getElementById("black").innerHTML = bright++
		    if(bright === 250){
bright = 0;
	    }
	document.getElementById("rCol1").innerHTML = r > 250 ? r = 0 : r++
	 document.getElementById("gCol2").innerHTML = g > 250 ? g = 0 : g++
 document.getElementById("bCol3").innerHTML = b > 250 ? b = 0 : b++
 document.body.style.background = `RGB(${r},${g},${b})`

}

