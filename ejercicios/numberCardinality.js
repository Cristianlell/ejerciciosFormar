const number_cardinality = (n) => {
    let lastDigit;
    let message = "Ingrese un Número válido ";
    if (!!!Number(n)) {
        return message;
    }
    lastDigit = Number(n.toString().slice(-1));
    if (lastDigit === 0) {
        return (message = "zero");
    }
    if (lastDigit === 5) {
        return (message = "five");
    }
    if (lastDigit % 2 === 0 && lastDigit !== 0) {
        return (message = "even");
    }
    if (lastDigit % 2 !== 0 && lastDigit !== 5) {
        return (message = "odd");
    }
};
module.exports = { number_cardinality };
