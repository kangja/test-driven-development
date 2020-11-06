// module.exports = null; //we are doing this so that we have something to import to our test. rather than making module.exports = null, let's create a function called adder that takes 2 numbers, which are a and b. And we simply return a = b. And now we could export Adder.

// function adder(a, b) {
//   return a + b;
// }

// module.exports = adder; 

// let's run yarn Jest and our test passes. We are now at the green phase of red-green clean because we can say that adder of 1 and 2 does indeed equal 3. At this point, we could think about refactoring. 

// Maybe we don't think there's much to refactor here but we could.I might turn out that our team's style is to use arrow functions and implicit returns. So we might say well we want to say 
const adder = (a, b) => a + b;

module.exports = adder; 
//it shouldn't affect the functionality and the nice thing about test-driven development is that we can rerun our test now and make sure that despite changing our code, we still pass. 

