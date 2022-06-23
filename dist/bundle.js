(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre) {
    var impuestos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    _classCallCheck(this, Cliente);

    this._nombre = function () {
      return nombre;
    };

    this._impuestos = function () {
      return impuestos;
    };
  }

  _createClass(Cliente, [{
    key: "nombre",
    get: function get() {
      return this._nombre();
    },
    set: function set(new_name) {
      return this._nombre = function () {
        return new_name;
      };
    }
  }, {
    key: "impuestos",
    get: function get() {
      return this._impuestos();
    },
    set: function set(impuestos) {
      return this._impuestos = function () {
        return impuestos;
      };
    }
  }, {
    key: "addImpuesto",
    value: function addImpuesto(impuesto) {
      this.impuestos.push(impuesto);
    }
  }, {
    key: "calculo_impuestos",
    value: function calculo_impuestos() {
      var porcentaje = 0.21;
      var formula = 0;
      this.impuestos.forEach(function (impuesto) {
        formula += (impuesto.montoBrutoAnual - impuesto.deducciones) * porcentaje;
      });
      return formula;
    }
  }]);

  return Cliente;
}();

exports["default"] = Cliente;
},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Impuestos = /*#__PURE__*/function () {
  function Impuestos() {
    var montoBrutoAnual = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var deducciones = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Impuestos);

    this._montoBrutoAnual = function () {
      return montoBrutoAnual;
    };

    this._deducciones = function () {
      return deducciones;
    };
  }

  _createClass(Impuestos, [{
    key: "montoBrutoAnual",
    get: function get() {
      return this._montoBrutoAnual();
    },
    set: function set(new_montoBrutoAnual) {
      return this._montoBrutoAnual = function () {
        return new_montoBrutoAnual;
      };
    }
  }, {
    key: "deducciones",
    get: function get() {
      return this._deducciones();
    },
    set: function set(new_deducciones) {
      return this._deducciones = function () {
        return new_deducciones;
      };
    }
  }]);

  return Impuestos;
}();

exports["default"] = Impuestos;
},{}],3:[function(require,module,exports){
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
},{"./Cliente.js":1,"./Impuestos.js":2}]},{},[3]);
