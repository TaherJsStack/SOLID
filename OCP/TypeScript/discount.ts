// class Discount {
//     giveDiscount(customerType: 'premium' | 'regular'): number {
//         if (customerType === 'regular') {
//             return 10
//         } else if (customerType === 'premium') {
//             return 20
//         } else {
//             return 5
//         }
//     }
// }

import { Customer } from "./customer"

export class Discount {
    giveDiscount(customer: Customer): number {
        return customer.giveDiscount()
    }
}

