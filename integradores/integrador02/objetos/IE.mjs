import PJ from "../pessoas/PJ.mjs";

export default class IEclss {
    #numero;
    #estado;
    #dataRegistro;
    #pj;

    setNumero(numero) {
        if (numero) {
            this.#numero = numero;
            return true;
        } else {
            return false;
        }
    }

    getNumero() {
        return this.#numero;
    }

    setEstado(estado) {
        if (estado) {
            this.#estado = estado;
            return true;
        } else {
            return false;
        }
    }

    getEstado() {
        return this.#estado;
    }

    setDataRegistro(dataRegistro) {
        if (dataRegistro instanceof Date) {
            this.#dataRegistro = dataRegistro;
            return true;
        } else {
            return false;
        }
    }

    getDataRegistro() {
        return this.#dataRegistro;
    }

    setPJ(pj) {
        if (pj != null && pj instanceof PJ) {
            this.#pj = pj;
            return true;
        } else {
            return false;
        }
    }

    getPJ() {
        return this.#pj;
    }
}

export function IEfunc() {
    let dados = {
        numero: null,
        estado: null,
        dataRegistro: null,
        pj: null
    };

    function setNumero(numero) {
        if (numero) {
            dados.numero = numero;
            return true;
        } else {
            return false;
        }
    }

    function getNumero() {
        return dados.numero;
    }

    function setEstado(estado) {
        if (estado) {
            dados.estado = estado;
            return true;
        } else {
            return false;
        }
    }

    function getEstado() {
        return dados.estado;
    }

    function setDataRegistro(data) {
        if (data instanceof Date) {
            dados.dataRegistro = data;
            return true;
        } else {
            return false;
        }
    }

    function getDataRegistro() {
        return dados.dataRegistro;
    }

    function setPJ(pj) {
        if (pj != null && pj instanceof PJ) {
            dados.pj = pj;
            return true;
        } else {
            return false;
        }
    }

    function getPJ() {
        return dados.pj;
    }

    return {
        setNumero,
        getNumero,
        setEstado,
        getEstado,
        setDataRegistro,
        getDataRegistro,
        setPJ,
        getPJ
    };
}

export const IEjson = {
    numero: null,
    estado: null,
    dataRegistro: null,
    pj: null,

    setNumero(numero) {
        if (numero) {
            this.numero = numero;
            return true;
        } else {
            return false;
        }
    },

    getNumero() {
        return this.numero;
    },

    setEstado(estado) {
        if (estado) {
            this.estado = estado;
            return true;
        } else {
            return false;
        }
    },

    getEstado() {
        return this.estado;
    },

    setDataRegistro(data) {
        if (data instanceof Date) {
            this.dataRegistro = data;
            return true;
        } else {
            return false;
        }
    },

    getDataRegistro() {
        return this.dataRegistro;
    },

    setPJ(pj) {
        if (pj != null && pj instanceof PJ) {
            this.pj = pj;
            return true;
        } else {
            return false;
        }
    },

    getPJ() {
        return this.pj;
    }
};