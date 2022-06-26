// result divs
var display_user_number_first;
var display_user_operation;
var display_user_number_second;
var result;
var firstnumber= true;
var assigned = false;

var displayValElement = document.getElementById('result-display');

var calcNumBtns = document.getElementsByClassName('calc-num-btn');
var calcOperatorBtns = document.getElementsByClassName('calc-operator-btn');

var displayVal = '0';
var pendingVal;
var evalStringArray = [];
var sinArray = [];
var cosArray = [];
var tanArray = [];
var cotArray = [];





// KEY NUMBERS PRESSED FUNCTIONS
document.addEventListener('keydown',function() {
	 processEvent(event);
})


function processEvent(event) {

	 switch (event.keyCode) {
		 //numbers being pressed
	 	case 48: updateDisplayVal(0); break;
		case 49: updateDisplayVal(1); break;
		case 50: updateDisplayVal(2); break;
		case 51: updateDisplayVal(3); break;
		case 52: updateDisplayVal(4); break;
		case 53: updateDisplayVal(5); break;
		case 54: updateDisplayVal(6); break;
		case 55: updateDisplayVal(7); break;
		case 56: updateDisplayVal(8); break;
		case 57: updateDisplayVal(9); break;

		//minus
		case 189: 	processOperation('-'); break;
		//plues
		case 187: 	processOperation('+'); break;
		//enter
		case 13: 	processOperation('='); break;
		//backspace
		case 8: 	backspace(); break;
		//period
		case 190: 	addPeriod(); break;

		//multiplication
		case 106: 	processOperation('x'); break;

		//division
		case 111: 	processOperation('÷'); break;

	 	default:

	 }
 }
 //end of number keys pressed function




// all button divs
const one_div = document.getElementById ('one');
const two_div = document.getElementById ('two');
const three_div = document.getElementById ('three');
const four_div = document.getElementById ('four');
const five_div = document.getElementById ('five');
const six_div = document.getElementById ('six');
const seven_div = document.getElementById ('seven');
const eight_div = document.getElementById ('eight');
const nine_div = document.getElementById ('nine');
const zero_div = document.getElementById ('zero');
const division_div = document.getElementById ('_division');
const multiplication_div = document.getElementById ('_multiplication');
const subtraction_div = document.getElementById ('_subtraction');
const addition_div = document.getElementById ('_addition');
const equal_div = document.getElementById ('equal');
const period_div = document.getElementById ('period');

var clear_div = document.getElementById ('clear');
var backspace_div = document.getElementById ('backspace');

const sin_div = document.getElementById('sin');
const cos_div = document.getElementById('cos');
const tan_div = document.getElementById('tan');
const cot_div = document.getElementById('cot');







// update display
function updateDisplayVal (clickObj) {
	if (displayVal === '0') { displayVal = ''}

	var text = clickObj;
	displayVal += text;
	displayValElement.innerText = displayVal;
}





function processOperation (clickObj) {
  var operator = clickObj;

  switch(operator) {

  	case '÷':
  		pendingVal = displayVal;
  		displayVal = '0';
  		displayValElement.innerText = displayVal
  		evalStringArray.push(pendingVal);
  		evalStringArray.push('/');
  		break;

  	case 'x':
  		pendingVal = displayVal;
  		displayVal = '0';
  		displayValElement.innerText = displayVal
  		evalStringArray.push(pendingVal);
  		evalStringArray.push('*');
  		break;

  	case '+':
  		pendingVal = displayVal;
  		displayVal = '0';
  		displayValElement.innerText = displayVal
  		evalStringArray.push(pendingVal);
  		evalStringArray.push('+');
  		break;

  	case '-':
  		pendingVal = displayVal;
  		displayVal = '0';
  		displayValElement.innerText = displayVal
  		evalStringArray.push(pendingVal);
  		evalStringArray.push('-');
  		break;

		case 'sin':
			pendingVal = displayVal;
		 	var sinDisplay = "sin(" + pendingVal + ")";
			sinArray.push(sinDisplay);
			displayValElement.innerText = sinDisplay;
			break;

		case 'cos':
			pendingVal = displayVal;
			var cosDisplay = "cos(" + pendingVal + ")";
			cosArray.push(cosDisplay);
			displayValElement.innerText = cosDisplay;
			break;

		case 'tan':
			pendingVal = displayVal;
			var tanDisplay = "tan(" + pendingVal + ")";
			tanArray.push(tanDisplay);
			displayValElement.innerText = tanDisplay;
			break;

		case 'cot':
			pendingVal = displayVal;
			var cotDisplay = "cot(" + pendingVal + ")";
			cotArray.push(cotDisplay);
			displayValElement.innerText = cotDisplay;
			break;




  	case '=':

 // SIN FUNCTION
				if(sinArray.length != 0) {
					if (pendingVal % 180 == 0) {
						displayValElement.innerText = 0;
					}

					else if (pendingVal%30==0 && pendingVal%60!=0 && pendingVal%90!=0 && pendingVal%120!=0 && pendingVal%150!=0 && pendingVal%180!=0  ) {
						var pi = Math.PI;
						var convert = pendingVal * (pi/180);
						displayValElement.innerText = Math.sin(convert).toFixed(1);
					}

				else {
					var pi = Math.PI;
					var convert = pendingVal * (pi/180);
					sinResult = Math.sin(convert);
					displayValElement.innerText = sinResult;

					sinArray = [];
				}
			}
//COS FUNCTION
				else if (cosArray.length != 0) {
					if (pendingVal % 90 == 0 && pendingVal % 180 != 0 && pendingVal != 0) {
						displayValElement.innerText = 0;
					}

					else if ( pendingVal/60 == 1 || pendingVal/60 == 4 || pendingVal/60 == 7 || pendingVal/60 == 10 || pendingVal/60 == 13 || pendingVal/60 == 16 || pendingVal/60 == 19 || pendingVal/60 == 22   ) {
						var pi = Math.PI;
						var convert = pendingVal * (pi/180);
						displayValElement.innerText = Math.cos(convert).toFixed(1);
					}
					else {
						var pi = Math.PI;
						var convert = pendingVal * (pi/180);
						displayValElement.innerText = Math.cos(convert);
						cosArray = [];
					}
				}
//TAN FUNCTION
				else if (tanArray.length !=0) {
					var pi = Math.PI;
					var convert = pendingVal * (pi/180);
					displayValElement.innerText = Math.tan(convert);
					tanArray = [];
				}
//COT FUNCTION
				else if (cotArray.length !=0) {
					var pi = Math.PI;
					var convert = pendingVal * (pi/180);
					displayValElement.innerText = 1 / Math.tan(convert);
					cotArray = [];
				}



				else  {
					evalStringArray.push(displayVal);
					var evaluation = eval(evalStringArray.join('  '))
					displayVal = evaluation + '';
					displayValElement.innerText = displayVal;
					evalStringArray = [];
					break;
				}


  }
}



//when operator buttons are pressed, event listener

division_div.addEventListener ('click', function(){
	processOperation('÷');
})
multiplication_div.addEventListener ('click', function(){
	processOperation('x');
})

addition_div.addEventListener ('click', function(){
	processOperation('+');
})

subtraction_div.addEventListener ('click', function(){
	processOperation('-');
})
equal_div.addEventListener ('click', function(){
	processOperation('=');
})


// when number buttons are presse, event listener

one_div.addEventListener ('click', function (){
 updateDisplayVal(1);
})
two_div.addEventListener ('click', function (){
 updateDisplayVal(2);
})
three_div.addEventListener ('click', function (){
 updateDisplayVal(3);
})
four_div.addEventListener ('click', function (){
 updateDisplayVal(4);
})
five_div.addEventListener ('click', function (){
 updateDisplayVal(5);
})
six_div.addEventListener ('click', function (){
 updateDisplayVal(6);
})
seven_div.addEventListener ('click', function (){
 updateDisplayVal(7);
})
eight_div.addEventListener ('click', function (){
 updateDisplayVal(8);
})
nine_div.addEventListener ('click', function (){
 updateDisplayVal(9);
})
zero_div.addEventListener ('click', function (){
 updateDisplayVal(0);
})

sin_div.addEventListener ('click', function () {
	var sin= 'sin';
	processOperation(sin);
 // 5 is for sin used to determine in processOperation function
})

cos_div.addEventListener ('click', function() {
	var cos= 'cos';
	processOperation(cos);
})

tan_div.addEventListener ('click', function(){
	var tan = 'tan';
	processOperation(tan);
})

cot_div.addEventListener ('click', function(){
	var cot = 'cot';
	processOperation(cot);
})


//backspace button

backspace_div.addEventListener ('click', function(){
	backspace();
})
function backspace () {
	let lengthofDisplayVal = displayVal.length;
	displayVal = displayVal.slice(0,lengthofDisplayVal-1);
	if (displayVal === '') { displayVal = '0'};

	displayValElement.innerText = displayVal;
}

//clear acc button

clear_div.addEventListener ('click', function(){
	clear();
})
function clear() {
	displayVal = '0';
	pendingVal = undefined;
	evalStringArray = [];
	displayValElement.innerText = displayVal;
}

// period button (decimal) being pressed to insert period

period_div.addEventListener('click', function(){
	addPeriod();
})
function addPeriod() {
	if (!displayVal.includes('.')) {
		displayVal += '.';
		displayValElement.innerText = displayVal;
	}
}




// BUTTON TO SHOW COS TAN SIN COT FUNCTIONS BEING PRESSED
var sc= document.getElementById('sc');

var button = document.getElementById('Sbutton');
button.onclick = () =>
				{
					if (sc.className == 'scientific-calculator-display-none') {
						sc.className = 'scientific-calculator'
					}
				 else {
					 sc.className = 'scientific-calculator-display-none'
				 }
				}

var sbuttonHint = document.getElementById('SbuttonHint');

button.addEventListener('mouseover', function() {
	 showHint();
})
button.addEventListener('mouseout', function() {
	 removeHint();
})
function showHint () {
		sbuttonHint.className = 'SbuttonHintShow'
}
function removeHint () {
		sbuttonHint.className = 'display_none'
}







// MENU ICON BEING PRESSED  ONLY IN MOBILE VERSION
var button_mobile = document.getElementById('Sbutton_Mobile');

button_mobile.onclick = () =>
{
	if(sc.className == 'scientific-calculator-display-none'){
		sc.className = 'scientific-calculator-mobile'
	}

	else {
		sc.className = 'scientific-calculator-display-none'
	}
}

var button_mobile_menu = document.getElementById('display_none_icon');

button_mobile_menu.addEventListener('click', function(){
	myFunction()
})
function myFunction() {
document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('#display_none_icon')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

var dekstop_menu = document.getElementById('header_icon');
dekstop_menu.addEventListener('click', function(){
dekstopmenu();

})

function dekstopmenu() {
document.getElementById("dekstop_menu").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('#header_icon')) {
    var dropdowns = document.getElementsByClassName("dekstop_menu-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
