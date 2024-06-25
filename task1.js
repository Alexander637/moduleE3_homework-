function countElements(arr) {
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;
    let nonNumberCount = 0;

    arr.forEach(element => {
        if (typeof element === 'number') {
            if (element === 0) {
                zeroCount++;
            } else if (element % 2 === 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        } else {
            nonNumberCount++;
        }
    });

    console.log(`Чётных элементов: ${evenCount}`);
    console.log(`Нечётных элементов: ${oddCount}`);
    console.log(`Нулевых элементов: ${zeroCount}`);
    console.log(`Не числовых элементов: ${nonNumberCount}`);
}


const array = [0, 1, 2, 3, 4, 5, null, 'a', {}, [], 0, 6, 7, '8', 9, 0];
countElements(array);
