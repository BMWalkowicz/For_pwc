var i=1;
var DTile = new Array(9);
var endcom = '<h1>Koniec gry!</h1>';
for(var j=1;j<9;j++)
{
	DTile[j]=j+10;
}

function check(arg) 
{
	i++
	var krzyzyk = '<img src="x.png"/>';
	var kolko = '<img src="o.png"/>';
	var TerazKo = "<h1>Teraz kółko!</h1>";
	var TerazKr = "<h1>Teraz krzyżyk!</h1>";
	if (i%2==0) 
	{
		document.getElementById('tile'+arg).innerHTML = krzyzyk;
		document.getElementById('commentary').innerHTML = TerazKo;
		DTile[arg] = 1;
		if ( DTile[0]==DTile[1] && DTile[0]==DTile[2] ) WygranaX();
		if ( DTile[0]==DTile[3] && DTile[0]==DTile[6] ) WygranaX();
		if ( DTile[0]==DTile[4] && DTile[0]==DTile[8] ) WygranaX();
		if ( DTile[1]==DTile[4] && DTile[1]==DTile[7] ) WygranaX();
		if ( DTile[2]==DTile[5] && DTile[2]==DTile[8] ) WygranaX();
		if ( DTile[2]==DTile[4] && DTile[2]==DTile[6] ) WygranaX();
		if ( DTile[3]==DTile[4] && DTile[3]==DTile[5] ) WygranaX();
		if ( DTile[6]==DTile[7] && DTile[6]==DTile[8] ) WygranaX();
	}
	else
	{ 
		document.getElementById('tile'+arg).innerHTML = kolko;
		document.getElementById('commentary').innerHTML = TerazKr;
		DTile[arg] = 2;
		if ( DTile[0]==DTile[1] && DTile[0]==DTile[2] ) WygranaO();
		if ( DTile[0]==DTile[3] && DTile[0]==DTile[6] ) WygranaO();
		if ( DTile[0]==DTile[4] && DTile[0]==DTile[8] ) WygranaO();
		if ( DTile[1]==DTile[4] && DTile[1]==DTile[7] ) WygranaO();
		if ( DTile[2]==DTile[5] && DTile[2]==DTile[8] ) WygranaO();
		if ( DTile[2]==DTile[4] && DTile[2]==DTile[6] ) WygranaO();
		if ( DTile[3]==DTile[4] && DTile[3]==DTile[5] ) WygranaO();
		if ( DTile[6]==DTile[7] && DTile[6]==DTile[8] ) WygranaO();
	}
	document.getElementById('tile'+arg).style.cursor ="default";
	document.getElementById('tile'+arg).setAttribute('onclick',';');
	
	if (i==11) Remis();
}

function WygranaO()
{
	var punkt = '<font color="#0dc400"><h1>1</h1></font>';
	var svgAttributes = anime({
  targets: '#svgAttributes polygon',
  points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
  easing: 'easeInOutExpo'
	});
	document.getElementById("pkt1").innerHTML = punkt;
	document.getElementById("commentary").innerHTML = endcom;
	for(var k=1;k<9;k++)
	{
	document.getElementById('tile'+k).style.cursor ="default";
	document.getElementById('tile'+k).setAttribute('onclick',';');
	}
}


function WygranaX()
{
	var punkt = '<font color="#0dc400"><h1>1</h1></font>';
	var svgAttributes = anime({
  targets: '#svgAttributes polygon',
  points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
  easing: 'easeInOutExpo'
	});
	document.getElementById("pkt2").innerHTML = punkt;
	document.getElementById("commentary").innerHTML = endcom;
	for(var k=1;k<9;k++)
	{
	document.getElementById('tile'+k).style.cursor ="default";
	document.getElementById('tile'+k).setAttribute('onclick',';');
	}
}

function Remis()
{
	var punkt = '<font color="#0dc400"><h1>1</h1></font>';
	var svgAttributes = anime({
  targets: '#svgAttributes polygon',
  points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
  easing: 'easeInOutExpo'
	});
	document.getElementById("pkt3").innerHTML = punkt;
	document.getElementById("commentary").innerHTML = endcom;
	for(var k=1;k<9;k++)
	{
	document.getElementById('tile'+k).style.cursor ="default";
	document.getElementById('tile'+k).setAttribute('onclick',';');
	}
}

window.onload = check;