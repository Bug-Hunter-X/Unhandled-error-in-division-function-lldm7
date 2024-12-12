```javascript
function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return 0; // This will cause an error if a or b is null or undefined
  }
  return a / b; 
}

console.log(myFunction(10, 0)); // Throws an error
console.log(myFunction(10, null)); //Throws an error
console.log(myFunction(null, 10)); //Throws an error
```