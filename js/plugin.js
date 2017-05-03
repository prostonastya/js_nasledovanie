// Калькулятор

function Calc(){

}

Calc.prototype.init = function(){

	this.hello();

	var firstVal = prompt('Put first number', 0),
		secondtVal = prompt('Put second number', 0),
		operator = prompt('write operator', '+');
	this.result = 0;
	this.canCalc = false;

	this.validate(firstVal, secondtVal, operator);

	this.canCalc ? this.calculate() : alert ('Your number is not a number');
};

Calc.prototype.hello = function(){
	alert('Hello, I am an old calculator');
};

Calc.prototype.validate = function(first, second, operator){
	if(!isNaN(first) && !isNaN(second)){
		this.firstVal = +first;
		this.secondtVal = +second;
		this.operator = operator;
		this.canCalc = true;		
	} else {
		this.canCalc = false;
	}
}

Calc.prototype.methods = {
	'-': function(arg1,arg2){return arg1 - arg2},
	'+': function(arg1,arg2){return arg1 + arg2},
	'*': function(arg1,arg2){return arg1 * arg2},
	'/': function(arg1,arg2){return arg1 / arg2},
};

Calc.prototype.calculate = function(){
	if (this.methods[this.operator]){
		// this.result = this.methods['+'](this.firstVal, this.secondtVal)
		this.result = this.methods[this.operator](this.firstVal, this.secondtVal);
		alert(`Your result is: ${this.result}`);
	} else {
		alert('You chose undefined operator!!!')
	}
	return this.result
};

var calc = new Calc();


Calc.prototype.addNewMethods = function(name, func){
	this.methods[name] = func;
}


var CalcEngenear = function (){
	this.methods['x^2'] = function(arg1) {return arg1 * arg1 };
	this.methods['x^3'] = function(arg1) {return  arg1 * arg1 * arg1};
}

CalcEngenear.prototype = Object.create(Calc.prototype);
CalcEngenear.prototype.constructor = CalcEngenear;

CalcEngenear.prototype.addNewMethods = function(name, func){
	// var origres = Calc.prototype.addNewMethods.call(this);
	this.methods[name] = func;
	
};



var calcEngen = new CalcEngenear();

// f корень из числа:

function sqrt(number){	
	return Math.sqrt(number)
};

calcEngen.addNewMethods('sqrt',sqrt);