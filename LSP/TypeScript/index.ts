import { Bitcoin } from "./bitcoin"
import { CreditCard } from "./credit-card"
import { DebitCard } from "./debit-card"
import { PaymentProcessor } from "./payment-processor"
import { PayPalCard } from "./payPal"

function executePayment(amount: number, paymentProcessor: PaymentProcessor) {
    return paymentProcessor.processorPayment(amount)
}

let creditCardProcessor = new CreditCard()
let debitCardProcessor  = new DebitCard()
let bayPalCardProcessor = new PayPalCard()
let bitcoinProcessor = new Bitcoin()

executePayment(50,  creditCardProcessor)
executePayment(800, debitCardProcessor)
executePayment(300, bayPalCardProcessor)
executePayment(1300, bitcoinProcessor)

