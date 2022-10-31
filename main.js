const year = document.getElementById("year")
const thisYear = new Date().getFullYear()
year.setAttibute("datetime", thisYear)
year.textContent = thisYear
