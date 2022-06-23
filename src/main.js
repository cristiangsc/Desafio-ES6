import Impuestos from "./Impuestos.js";
import Cliente from "./Cliente.js";


const cliente1 = new Cliente("Juan")
const cliente2 = new Cliente("Pedro")
const cliente3 = new Cliente("Manuel")

console.log(cliente1.nombre, cliente2.nombre, cliente3.nombre)

const impuesto1 = new Impuestos(2000, 1000)
const impuesto2 = new Impuestos(3000, 2500)
const impuesto3 = new Impuestos(5000, 3500)
const impuesto4 = new Impuestos(6000, 3500);

console.log("Monto Bruto anual: " + impuesto1.montoBrutoAnual, impuesto2.montoBrutoAnual, impuesto3.montoBrutoAnual)
console.log("Deducciones: " + impuesto1.deducciones, impuesto2.deducciones, impuesto3.deducciones);

cliente1.addImpuesto(impuesto1)
console.log(cliente1.impuestos);
console.log("Impuesto a pagar cliente1: " + cliente1.calculo_impuestos());

cliente2.addImpuesto(impuesto2);
console.log(cliente2.impuestos);
console.log("Impuesto a pagar cliente2: " + cliente2.calculo_impuestos());

cliente3.addImpuesto(impuesto3);
console.log(cliente3.impuestos);

console.log("Impuesto a pagar cliente3: " + cliente3.calculo_impuestos());

cliente3.addImpuesto(impuesto4);
console.log("Impuesto a pagar cliente3 cuando se le agregan mas impuestos: " + cliente3.calculo_impuestos());