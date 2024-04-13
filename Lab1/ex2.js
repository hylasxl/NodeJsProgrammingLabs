const today = new Date()
const dateFormatted = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(today);
console.log(dateFormatted);