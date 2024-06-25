function isPrime(num) {
    if (num > 1000) {
        return "Данные неверны";
    }
    if (num <= 1) {
        return "Число не является простым";
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return "Число не является простым";
        }
    }
    return "Число является простым";
}


const number = 30;
console.log(isPrime(number));
