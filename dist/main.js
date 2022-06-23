"use strict";

var _Impuestos = _interopRequireDefault(require("./Impuestos.js"));

var _Cliente = _interopRequireDefault(require("./Cliente.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cliente1 = new _Cliente["default"]("Juan");
var cliente2 = new _Cliente["default"]("Pedro");
var cliente3 = new _Cliente["default"]("Manuel");
console.log(cliente1.nombre, cliente2.nombre, cliente3.nombre);
var impuesto1 = new _Impuestos["default"](2000, 1000);
var impuesto2 = new _Impuestos["default"](3000, 2500);
var impuesto3 = new _Impuestos["default"](5000, 3500);
var impuesto4 = new _Impuestos["default"](6000, 3500);
console.log("Monto Bruto anual: " + impuesto1.montoBrutoAnual, impuesto2.montoBrutoAnual, impuesto3.montoBrutoAnual);
console.log("Deducciones: " + impuesto1.deducciones, impuesto2.deducciones, impuesto3.deducciones);
cliente1.addImpuesto(impuesto1);
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