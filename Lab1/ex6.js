const initArray = [5,6,7,8,9,10,10,9], nth = 3
let numberArray = [...initArray], k = nth
while(k > 1){
    const max = Math.max(...numberArray)
    numberArray = numberArray.filter(num=>num!=max)
    k--;
}
console.log(`The ${nth}th greatest number in array [${[...initArray]}] is ${Math.max(...numberArray)}`)