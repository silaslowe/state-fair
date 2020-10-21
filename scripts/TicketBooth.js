const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "rideTicket") {
        const customEvent = new CustomEvent("rideTicketPurchased", 
        {
            detail: {
                rideTicketPurchased: null
            }
        }
        )
eventHub.dispatchEvent(customEvent)
    }
})

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "foodTicket") {
        const customEvent = new CustomEvent("foodTicketPurchased", 
        {
            detail: {
                foodTicketPurchased: null
            }
        }
        )
eventHub.dispatchEvent(customEvent)
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket">Ride Ticket</button>
        <button id="foodTicket">Ride Ticket</button>
        </div>

    `
}

