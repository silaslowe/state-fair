const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "rideTicket") {
    const customEvent = new CustomEvent("rideTicketPurchased", {
      detail: {
        rideTicketPurchased: null,
      },
    })
    eventHub.dispatchEvent(customEvent)
  }
})

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "foodTicket") {
    const customEvent = new CustomEvent("foodTicketPurchased", {
      detail: {
        foodTicketPurchased: null,
      },
    })
    eventHub.dispatchEvent(customEvent)
  }
})

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "gamesTicket") {
    const customEvent = new CustomEvent("gamesTicketPurchased", {
      detail: {
        gamesTicketPurchased: null,
      },
    })
    eventHub.dispatchEvent(customEvent)
  }
})

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "sideshowTicket") {
    const customEvent = new CustomEvent("sideshowTicketPurchased", {
      detail: {
        sideshowTicketPurchased: null,
      },
    })
    eventHub.dispatchEvent(customEvent)
  }
})

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "packageTicket") {
    const customEvent = new CustomEvent("fullPackageTicketPurchased", {
      detail: {
        fullPackageTicketPurchased: null,
      },
    })
    eventHub.dispatchEvent(customEvent)
  }
})

export const TicketBooth = () => {
  contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket">Ride Ticket</button>
        <button id="foodTicket">Food Ticket</button>
        <button id="gamesTicket">Game Ticket</button>
        <button id="sideshowTicket">Sideshow Ticket</button>
        <button id="packageTicket">Package Ticket</button>
        </div>
    `
}
