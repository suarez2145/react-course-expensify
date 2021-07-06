const add = (a, b) => {
    return a + b
}

const generateGreeting = (name = 'Anon') => {
    return `Hello ${name}!`
}
// to set test we call test() function and we add first argument as string ' describig what this test will do
// second argument is () arrow function followed by code block with code we want our test function to run;
test('should add two numbers', () => {
    const result = add(3,4);

    expect(result).toBe(7)
    
})

test('name should be exxon', () => {
    const result = generateGreeting('exxon')

    expect(result).toBe('Hello exxon!')
})

test(' should generate greeting for No name', () => {
    const result = generateGreeting();

    expect(result).toBe('Hello Anon!')
})