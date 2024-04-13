const today = new Date()
const weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
console.log("Today is: ", weekDays[today.getDay()])
const hours = today.getHours()
let hoursString  = ""
if(hours > 12){
    hoursString = `${hours-12} PM`
} else hoursString = `${hours} AM`
console.log(`Current time is: ${hoursString} : ${today.getMinutes()} : ${today.getSeconds()}`)

