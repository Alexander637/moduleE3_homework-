function createAdder(firstNumber) {
    return function(secondNumber) {
        return firstNumber + secondNumber;
    };
}


const addFive = createAdder(3);
const result = addFive(8);

console.log(result);
