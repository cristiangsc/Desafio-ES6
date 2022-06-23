export default class Impuestos {
    constructor(montoBrutoAnual = 0, deducciones = 0) {
        this._montoBrutoAnual = () => montoBrutoAnual;
        this._deducciones = () => deducciones;
    }

    get montoBrutoAnual() {
        return this._montoBrutoAnual();
    }

    set montoBrutoAnual(new_montoBrutoAnual) {
        return this._montoBrutoAnual = () => new_montoBrutoAnual;
    }

    get deducciones() {
        return this._deducciones();
    }

    set deducciones(new_deducciones) {
        return this._deducciones = () => new_deducciones;
    }


}