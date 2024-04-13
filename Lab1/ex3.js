const toCelcius = (temperature) => {
    return `${temperature}^F is ${(+temperature-32) * 5/9}^C`
}

const toFahrenheit = (temperature) => {
    return `${temperature}^C is ${+temperature * 9/5 + 32}^F`
}

console.log(toCelcius(45));
console.log(toFahrenheit(60))