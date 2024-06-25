const power = (x, n) => {
    if (n === 0) {
        return 1;
    } else {
        let result = x;
        for (let i = 1; i < n; i++) {
            result *= x;
        }
        return result;
    }
};

const base = 2;
const exponent = 6;
const result = power(base, exponent);
console.log(`${base} в степени ${exponent} равно ${result}`);
