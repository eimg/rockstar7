const math = require('./math');

test('Testing add', function() {
	expect( math.add(1, 2) ).toBe(3);
	expect( math.add(1, "2") ).toBe(3);
});
