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