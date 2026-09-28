function celsiusParaFahrenheit(C){
    return (9/5) * C + 32;
}

function horasParaMinutos(horas){
    return horas * 60;
}

function idadeEmDias(idade){
    return idade*365;
}

function kmParaMetros(km){
    return km*1000;
}

function consumoMedio(distancia, litros){
    return distancia/litros;
}

module.exports = {celsiusParaFahrenheit, horasParaMinutos, idadeEmDias, kmParaMetros, consumoMedio};