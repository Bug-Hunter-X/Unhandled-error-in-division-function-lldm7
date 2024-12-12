```javascript
function myFunction(a, b) {
  // Check if any of the inputs is null or undefined
  if (a === null || a === undefined || b === null || b === undefined ) {
    return 0; // Handle null or undefined values gracefully
  }
  if (b === 0) {
    return Infinity; // Handle division by zero
  }
  return a / b; 
}

console.log(myFunction(10, 0)); // Returns Infinity
console.log(myFunction(10, null)); // Returns 0
console.log(myFunction(null, 10)); // Returns 0
```