export default class Cliente {
    constructor(nombre, impuestos = []) {
        this._nombre = () => nombre;
        this._impuestos = () => impuestos;
    }

    get nombre() {
        return this._nombre();
    }

    set nombre(new_name) {
        return (this._nombre = () => new_name);
    }

    get impuestos() {
        return this._impuestos();
    }

    set impuestos(impuestos) {
        return (this._impuestos = () => impuestos);
    }

    addImpuesto(impuesto) {
        this.impuestos.push(impuesto);
    }

    calculo_impuestos() {
        const porcentaje = 0.21;
        let formula = 0;
        this.impuestos.forEach((impuesto) => {
            formula += (impuesto.montoBrutoAnual - impuesto.deducciones) * porcentaje;
        })

        return formula
    }
}