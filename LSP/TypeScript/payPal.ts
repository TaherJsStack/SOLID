import { PaymentProcessor } from "./payment-processor";

export class PayPalCard extends PaymentProcessor {
    processorPayment(amount: number): void {
        console.log(`Processoring PayPal Card Amount $${amount}`)
    }
}
