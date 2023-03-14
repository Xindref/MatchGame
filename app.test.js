describe('calculateTaxes tests', function () {
    it('should calculate low-bracket', function () {
        expect(calculateTaxes(10000)).toEqual(1500);
        expect(calculateTaxes(20000)).toEqual(5000);
    });

    it('should calculate high-bracket', function () {
        expect(calculateTaxes(50000)).toEqual(12500);
        expect(calculateTaxes(80000)).toEqual(20000);
    });

    it('should reject invalid income', function () {
        expect(() => calculateTaxes('asdfasdfasdf')).toThrowError();
        expect(() => calculateTaxes([])).toThrowError();
        expect(() => calculateTaxes(true)).toThrowError();
    });
})

describe('remove dupe tests', function () {
    it('should remove duplicates from array', function () {
        expect(removeDupes([1, 2, 3, 4, 4, 4, 4])).toEqual([1, 2, 3, 4]);
        expect(removeDupes([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
        expect(Array.isArray([1, 2, 3, 4])).toBe(true);
    })

    it('should remove duplicates from a string', function () {
        expect(removeDupes('hello')).toBe('helo');
        expect(typeof 'hello').toBe('string');
    })
})

describe('remove tests', function () {
    it('should remove value from array', function () {
        expect(remove[1, 2, 3, 4, 5, 6], 6).not.toContain(6);
    })
})