// Exercise #3: Find a Minimum Number
let numbers = [100, 20, 3, 1000];
let minNumber;
for (let i = 0; i < numbers.length; i++) {
    minNumber = i === 0 ? numbers[i] : Math.min(minNumber, numbers[i]);
}

console.log(minNumber);
