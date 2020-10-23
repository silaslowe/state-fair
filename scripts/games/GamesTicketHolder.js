const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

export const GamesTicketHolder = () => {
  eventHub.addEventListener("gamesTicketPurchased", (event) => {
    contentTarget.innerHTML += `
      <div class="player person"></div>

      `
  })
}
