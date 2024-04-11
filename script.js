function validEmail(str) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(str);
}

// Test cases
console.log(validEmail('abc@example.com')); // returns true
console.log(validEmail('xyz@abc.com.in')); // returns true
console.log(validEmail('john.doe@com.')); // returns false
console.log(validEmail('@example.com')); // returns false
console.log(validEmail('')); // returns false

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
