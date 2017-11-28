By the end of this breakout, you will be able to:
1. Describe steps to take to Setup Unit Tests with Mocha
1. Explain the difference between `equal` and `deepEqual`
1. Describe how to use the data in the drill `README`


## How to Setup Unit Tests with Mocha
1. Create a node project

`npm init` || `npm init -y`

1. Install your testing dependencies

`npm install mocha chai --save-dev`

1. Create a directory called `test`
  - Create a file `name-of-js-file.test.js`

1. Change the test script to run mocha
  - In your package.json `"test": "mocha"`

1. Create a variable named `assert` and require your preferred assertion library

1. Write your `describe` and `it` blocks

1. Write your assertion statements
  - Ensure you are pulling in your code using `module.exports`

1. Run your tests! Red, Green, Refactor  
