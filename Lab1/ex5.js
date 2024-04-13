const x = 2, y = 2, z = 4

const checkValidOperator = (x, y, z) => {
    let validOperators = []
    if (x + y === z) {
        validOperators.push("+")
    }
    if (x - y === z) {
        validOperators.push("-")
    }
    if (x * y === z) {
        validOperators.push("*")
    }
    if (x / y === z) {
        validOperators.push("/")
    }
    return validOperators
}

const validOperatorsArray = checkValidOperator(+x, +y, +z)
console.log(`x = ${x}, y = ${y}, z = ${z}`);
if (validOperatorsArray.length > 0) {
    validOperatorsArray.forEach((item) => {
        console.log(`${x} ${item} ${y} = ${z}`);
    })
} else {
    console.log("No suitable operator")
}