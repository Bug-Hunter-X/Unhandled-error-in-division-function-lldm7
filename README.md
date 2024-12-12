# Unhandled Error in Division Function

This repository demonstrates a common error in JavaScript where a function does not handle null or undefined values correctly when performing division.  The `myFunction` attempts to divide two numbers but throws an error if either input is 0, null, or undefined. 

The `bug.js` file contains the buggy code. The `bugSolution.js` file provides a corrected version that handles these edge cases gracefully.

## How to reproduce

1. Clone this repository.
2. Navigate to the directory in your terminal.
3. Run `node bug.js`  This will show the error.
4. Run `node bugSolution.js`. This will show the fixed version of the code.
