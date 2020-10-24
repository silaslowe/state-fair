import { TicketBooth } from "./TicketBooth.js"
import { RideTicketHolders } from "./rides/RideTicketHolders.js"
import { FoodTicketHolders } from "./food/FoodTicketHolder.js"
import { GamesTicketHolder } from "./games/GamesTicketHolder.js"
import { SideshowTicketHolder } from "./sideshows/SideshowTicketHolder.js"
import { PackageTicketHolder } from "./package/PackageTicketHolder.js"
import { Totaler } from "./total.js"

TicketBooth()
FoodTicketHolders()
RideTicketHolders()
GamesTicketHolder()
SideshowTicketHolder()
PackageTicketHolder()
Totaler()
