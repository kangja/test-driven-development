const adder = require("./adder"); 

//we can describe the test that we want to execute
//we're going to say that the overall functionality or function that we are describing is adder and now we can add our different test cases. What do we know about adder? We know that it should add two numbers. And then we can "expect" that adder of (1,2) will be 3. 

//In the command line, let's run yarn jest to see the test in action and we get fail messages at first. And it's good and now we succesfully done the Red aspect. Let's go back to our adder.js and make our test pass.
describe("adder", () => {
  it("should add two numbers", () => {
    expect(adder(1, 2)).toBe(3);

  });
  it("should return a sole input", () => {
    expect(adder(5)).toBe(5);
  });
  it("should add three numbers", () => {
    expect(adder(1, 2, 3)).toBe(6);
  });
  it("should return 0 if no numbers are passed", () => {
    expect(adder()).toBe(0);
  });
  it("should add any number of arguments", () => {
    expect(adder(1, 2, 3, 4, 5, 6)).toBe(21);
  });
}) 
//we now have 2 failing tests. For out new tests, we are seeing we're failing. 
// ✓ should add two numbers (15 ms)
// ✕ should return a sole input (11 ms)
// ✕ should add three numbers (12 ms)
// Let's go back to adder.js and add these functions. 