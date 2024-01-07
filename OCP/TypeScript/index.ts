
import { Discount } from './discount'
import { GoldCustomer } from './gold-customer'
import { PremiumCustomer } from './premium-customer'
import { RegularCustomer } from './regular-customer'

let discount: Discount        = new Discount()
let gold:     GoldCustomer    = new GoldCustomer()
let premium:  PremiumCustomer = new PremiumCustomer()
let regular:  RegularCustomer = new RegularCustomer()

let goldDiscount    = discount.giveDiscount(gold)
let premiumDiscount = discount.giveDiscount(premium)
let regularDiscount = discount.giveDiscount(regular)

console.log('goldDiscount    --->', goldDiscount)
console.log('premiumDiscount --->', premiumDiscount)
console.log('regularDiscount --->', regularDiscount)

let goldLoyalty       = gold.addLoyaltyPoints(50)
let premiumLoyalty    = premium.addLoyaltyPoints(50)
let regularLoyalty    = regular.addLoyaltyPoints(50)

console.log('goldLoyalty    --->', goldLoyalty)
console.log('premiumLoyalty --->', premiumLoyalty)
console.log('goldLoyalty    --->', regularLoyalty)
