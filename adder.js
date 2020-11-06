// module.exports = null; //we are doing this so that we have something to import to our test. rather than making module.exports = null, let's create a function called adder that takes 2 numbers, which are a and b. And we simply return a = b. And now we could export Adder.

// function adder(a, b) {
//   return a + b;
// }

// module.exports = adder; 

// let's run yarn Jest and our test passes. We are now at the green phase of red-green clean because we can say that adder of 1 and 2 does indeed equal 3. At this point, we could think about refactoring. 

// Maybe we don't think there's much to refactor here but we could.I might turn out that our team's style is to use arrow functions and implicit returns. So we might say well we want to say 
// const adder = (a, b) => a + b;

// module.exports = adder; 
//it shouldn't affect the functionality and the nice thing about test-driven development is that we can rerun our test now and make sure that despite changing our code, we still pass. It was the refactor aspect of red-green refactor. 

// let's go a little bit further here. It turns out we should take one number or three numbers so let's add some more tests in adder.test.js. 




// we will now take 3 variables and return a, b, and c. It seems like it might work for the 3rd test we've added. 
// const adder = (a, b, c) => {
//   return a + b + c;
// }
// module.exports = adder; 
// When we do yarn jest, we get Tests: 2 failed, 1 passed, 3 total.
// We can see that two we fail is not actually the last two test cases. It's now the first and second ones because we are not getting NaN for our 1st test. 

// This is good because what we've seen here is that we have sort of this regression issue where our 1st case that we wrote doesn't pass and this is actually a good thing to see. Because as we develop further features, we can keep testing our older requirements to make sure that nothing breaks as we go forth. 

// Let's try a simple fix here. 
// const adder = (a, b, c) => {
//   return a + (b || 0) + (c || 0); //let's say B or 0 and C or 0
// };
// module.exports = adder;
// Now we have all 3 of our tests passing again! Perhaps we also need to make sure that if no numbers are passed to it, it should return zero. Let's add that in adder.test.js. 

// Let's do yarn jest again and our new test now fails. We get NaN. 
// Here's a quick fix and let's follow the same paradigm. 
// const adder = (a, b, c) => {
//   return (a || 0) + (b || 0) + (c || 0); //let's say A or 0 and B or 0 and C or 0
// };
// module.exports = adder;
// Tests:       4 passed, 4 total
// It's all good and now we have 1 final criteria that's thrown on our way. It should add any number of arguments.

// And our new one fails as we expected because we are just adding the 1st 3 numbers. Instead of creating more variables and adding them up using ||, let's think about rewriting this thing altogether. We're going to use the rest operator and take nums and within our adder, we are going to return and use reduce. 
// const adder = (...nums) => {
//   return nums.reduce((total, num) => total + num, 0); //we will return total and the current number and we will start at 0. 
// };
// module.exports = adder;
// Tests:       5 passed, 5 total
//The beauty here is this is relatively large refactor of this functionality and we see that all of our previous tests including our any number of arguments tests has passed. 

// One last refactor we're doing here because our team likes implicit returns, let's use it. 
const adder = (...nums) => nums.reduce((total, num) => total + num, 0);

module.exports = adder;
