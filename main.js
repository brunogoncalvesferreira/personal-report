const dailyButton = document.getElementById("daily")
const weeklyButton = document.getElementById("weekly")
const monthlyButton = document.getElementById("monthly")

const response = await fetch("data.json")
const data = await response.json()

const currentHours = document.querySelectorAll("h1")
const hoursLastEeek = document.querySelectorAll("small")

function handleClickActionOnButtons() {
  dailyButton.addEventListener("click", async () => {
    currentHours.forEach((current, index) => {
      current.innerHTML = data[index].timeframes.daily.current + "hrs"
    })

    hoursLastEeek.forEach((previous, index) => {
      previous.innerHTML = data[index].timeframes.daily.previous + "hrs"
    })
  })

  weeklyButton.addEventListener("click", async () => {
    currentHours.forEach((current, index) => {
      current.innerHTML = data[index].timeframes.weekly.current + "hrs"
    })

    hoursLastEeek.forEach((previous, index) => {
      previous.innerHTML = data[index].timeframes.weekly.previous + "hrs"
    })
  })

  monthlyButton.addEventListener("click", async () => {
    currentHours.forEach((current, index) => {
      current.innerHTML = data[index].timeframes.monthly.current + "hrs"
    })

    hoursLastEeek.forEach((previous, index) => {
      previous.innerHTML = data[index].timeframes.monthly.previous + "hrs"
    })
  })
}
handleClickActionOnButtons()
