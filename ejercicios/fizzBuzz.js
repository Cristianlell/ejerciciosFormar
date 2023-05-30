const fizz_buzz = (n) => {
    const arrayFizzBuzz = [];
    if (!(!!Number(n)) || Math.sign(n) == -1) {
        return "Ingrese un Número Positivo válido mayor a 0 ";
    }
    for (let i = 1; i <= n; i++) {
        if (i % 15 == 0) {
            arrayFizzBuzz.push("FizzBuzz");
        } else if (i % 3 == 0) {
            arrayFizzBuzz.push("Fizz");
        } else if (i % 5 == 0) {
            arrayFizzBuzz.push("Buzz");
        } else {
            arrayFizzBuzz.push(i);
        }
    }
    return arrayFizzBuzz;
};

module.exports = { fizz_buzz };
