const eventHub = document.querySelector("#state-fair")
const contentTarget = document.querySelector(".customers")
let total = 0
contentTarget.innerHTML = `
  <p>Total tickets purchased: ${total}</p>
  `

export const Totaler = () => {
  console.log("hiya")
}
eventHub.addEventListener("totalTicketsPurchased", (event) => {
  let rides = document.querySelector("#rides").childElementCount
  let food = document.querySelector("#food").childElementCount
  let games = document.querySelector(".games").childElementCount
  let sideshow = document.querySelector(".sideshow").childElementCount
  total = food + rides + games + sideshow

  console.log(contentTarget)

  return (contentTarget.innerHTML = `
  <p>Total tickets purchased: ${total}</p>
  `)
})
