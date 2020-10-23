const ridesTarget = document.querySelector(".rides")
const foodTarget = document.querySelector(".food")
const gamesTarget = document.querySelector(".games")
const sideshowTarget = document.querySelector(".sideshow")

const eventHub = document.querySelector("#state-fair")

export const PackageTicketHolder = () => {
  eventHub.addEventListener("fullPackageTicketPurchased", (event) => {
    ;(ridesTarget.innerHTML += `
        <div class="bigSpender person"></div>
    `),
      (foodTarget.innerHTML += `
        <div class="bigSpender person"></div>
    `),
      (gamesTarget.innerHTML += `
    <div class="bigSpender person"></div>
    `),
      (sideshowTarget.innerHTML += `
    <div class="bigSpender person"></div>
    `)
  })
}
