const numbers = [1, 2, 3, 4, 5];
const result1 = [];

for(let i = 0; i < numbers.length; i++){
    result1.push(numbers[i] * numbers[i]);
}

const result2 = numbers.map(function(element){
    return element * element;
})

const result3 = numbers.map(x => x * x);

console.log(numbers, result1, result2, result3);

const bigger = numbers.filter(x => x > 3);
console.log(bigger);

const element = numbers.find(x => x > 3);
console.log(element);