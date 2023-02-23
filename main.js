const dailyButton = document.getElementById("daily")
const weeklyButton = document.getElementById("weekly")
const monthlyButton = document.getElementById("monthly")

const teste = document.querySelector(".teste")
const teste2 = document.querySelector("#hour")

const response = await fetch("data.json")
const data = await response.json()

dailyButton.addEventListener("click", () => {
  teste.innerHTML = data[0].timeframes.daily.current + "hrs"
  teste2.innerHTML = data[0].timeframes.daily.previous + "hrs"
})

weeklyButton.addEventListener("click", () => {
  teste.innerHTML = data[0].timeframes.weekly.current + "hrs"
  teste2.innerHTML = data[0].timeframes.weekly.previous + "hrs"
})

monthlyButton.addEventListener("click", () => {
  teste.innerHTML = data[0].timeframes.monthly.current + "hrs"
  teste2.innerHTML = data[0].timeframes.monthly.previous + "hrs"
})
