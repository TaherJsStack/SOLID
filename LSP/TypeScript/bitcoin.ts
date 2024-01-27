import { PaymentProcessor } from "./payment-processor";

export class Bitcoin extends PaymentProcessor{
    processorPayment(amount: number): void {
        console.log(`Processing Bitcoin Amount $${amount}`)
    }

}