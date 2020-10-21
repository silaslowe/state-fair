const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export const RideTicketHolders = () => {
    console.log("hi")
}

eventHub.addEventListener("rideTicketPurchased", event => {
  
    contentTarget.innerHTML += `
    <div class="rider person"></div>
`
})
