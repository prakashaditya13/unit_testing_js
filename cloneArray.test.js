const cloneArray = require('./cloneArray')

test('properly clone an array', () => {
    const array = [1,2,3]
    expect(cloneArray(array)).toEqual(array) //Pass By value
    expect(cloneArray(array)).not.toBe(array) //Pass by reference

}) 