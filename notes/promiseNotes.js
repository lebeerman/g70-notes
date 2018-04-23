/*
Further Reading: 
https://developers.google.com/web/fundamentals/primers/promises
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
Why Promises? 

- similar to callbacks - allows us to wait on certain code to finish 
execution prior to running the next bit of code.
- ensure that API data isn't processed or formatted until after an API call succeeds.

Promises:
  - eventual result of an async operation. placeholder.

  3 states:
   1. Pending - waiting
   2. Fulfilled - has a value
   3. Rejected - fails

   Example Structure: 
   runFunction().then(successFunc, failureFunc)

   .then acts as the promise indicator.

   Functional Example:
   `
   function delay(t){
      return new Promise(function(resolve){
        return setTimeout(resolve, t)
      });
    }
    function logHi(){
      console.log('hi');
    }
    delay(2000).then(logHi);
    `
    Modern Style:
    `
    doSomething().then(successCallback, failureCallback);
    `
*/