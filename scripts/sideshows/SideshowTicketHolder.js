import { Totaler } from "../total.js"

const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

export const SideshowTicketHolder = () => {
  eventHub.addEventListener("sideshowTicketPurchased", (event) => {
    contentTarget.innerHTML += `
        <div class="gawker person"></div>
    `
  })
}
