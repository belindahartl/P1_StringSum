// StringCalculator.js
class StringCalculator{
	constructor() {}
		AddTwoNumbers(number1, number2){
			if(!isNaturalNumber(number1))
				number1 = 0;
			if(!isNaturalNumber(number2))
				number2 = 0;

			return String(parseInt(number1) + parseInt(number2));
		} 
}
function isNaturalNumber(n) {
    n = n.toString(); // force the value incase it is not
    var n1 = Math.abs(n),
        n2 = parseInt(n, 10);
    return !isNaN(n1) && n2 === n1 && n1.toString() === n;
}