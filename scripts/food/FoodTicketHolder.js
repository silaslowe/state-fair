const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

export const FoodTicketHolders = () => {
    console.log("hi")
}

eventHub.addEventListener("foodTicketPurchased", event => {
  
    contentTarget.innerHTML += `
    <div class="eater person"></div>
`
})