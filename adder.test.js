const adder = require("./adder"); 

//we can describe the test that we want to execute
//we're going to say that the overall functionality or function that we are describing is adder and now we can add our different test cases. What do we know about adder? We know that it should add two numbers. And then we can "expect" that adder of (1,2) will be 3. 

//In the command line, let's run yarn jest to see the test in action and we get fail messages at first. And it's good and now we succesfully done the Red aspect. Let's go back to our adder.js and make our test pass.
describe("adder", () => {
  it("should add two numbers", () => {
    expect(adder(1, 2)).toBe(3);
  })
}) 