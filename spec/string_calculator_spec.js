describe('String Calculator', function() {
	beforeEach(function() {
		calculator = new StringCalculator();
	});

	it('should return 2 for an empty string', function() {
		expect(calculator.AddTwoNumbers("1","1")).toEqual("2");
	});
	it('should return 1 for an empty string', function() {
		expect(calculator.AddTwoNumbers("1","asd")).toEqual("1");
	});
	it('should return 2 for an empty string', function() {
		expect(calculator.AddTwoNumbers("asd","asdasd")).toEqual("0");
	});
});
