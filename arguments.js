function add(){
    const newArr = [...arguments];
    let sum = 0;

    for (let i = 0; i < newArr.length; i++){
        sum = sum + newArr[i];
    }

    return sum;
}

const result = add(2, 3, 5, 7, 11);
console.log(result);