
// interface Machine {
//     print(document: string): void;
//     scan(document: string): void;
//     fax(document: string): void;
// }



// class MultiFunctionPrinter implements Machine {
//     print(document: string): void {
//         console.log("print.");
//     }
//     scan(document: string): void {
//         console.log("scan.");
//     }
//     fax(document: string): void {
//         console.log("fax.");
//     }

// }

import { MultiFunctionPrinter } from "./multi-function-printer";
import { SimplePrinter } from "./simple-printer";

let multiFunctionPrinter = new MultiFunctionPrinter()
let simplePrinter = new SimplePrinter()

multiFunctionPrinter.print('document')
multiFunctionPrinter.scan('document')
multiFunctionPrinter.fax('document')
simplePrinter.print('document')