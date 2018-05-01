### Why Promises? 
  - similar to callbacks - allows us to wait on certain code to finish execution prior to running the next bit of code.
  - ensure that API data isn't processed or formatted until after an API call succeeds.

### Further Reading: 
  - https://developers.google.com/web/fundamentals/primers/promises
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
  - https://codeburst.io/the-ultimate-guide-to-learning-full-stack-web-development-in-6-months-for-30-72b3854a7458

---
## Promises: 
eventual result of an async operation. placeholder.

  3 states:
  1. Pending - waiting
  1. Fulfilled - has a value
  1. Rejected - fails

  Example Structure: 
  ```
    runFunction().then(successFunc, failureFunc)
    // .then acts as the promise indicator.
  ```

  Functional Example:
  ```
    function delay(t){
      return new Promise(function(resolve){
        return setTimeout(resolve, t)
      });
    }
    function logHi(){
      console.log('hi');
    }
    delay(2000).then(logHi);
  ```
  
  Modern Style:
  ```
    doSomething().then(successCallback, failureCallback);
  ```
*/