const { TestScheduler } = require('jest')
const {sum,createUser} = require('./sum')

test('properly adds two number',() => {
    expect(sum(1,2)).toBe(3)
})

test('Check the object of user', () => {
    expect(createUser()).toEqual({
        firstName: "aditya",
        lastName: "Prakash"
    })
})