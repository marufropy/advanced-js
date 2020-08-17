const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const copied = nums.slice(2, 5);
console.log(copied);
console.log(nums);

const changed = nums.splice(2, 3, 44, 55, 66, 77);
console.log(changed);
console.log(nums);

const newStr = nums.join("");
console.log(newStr);
console.log(nums);