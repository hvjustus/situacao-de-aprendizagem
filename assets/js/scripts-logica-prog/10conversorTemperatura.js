function fahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
  
function celsiusParaFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fazerConversaoTemperatura(temp, direcao){
    switch (direcao) {
        case "fahrenheitParaCelsius":
            fahrenheitParaCelsius(temp)
            break;
        case "celsiusParaFahrenheit":
            celsiusParaFahrenheit(temp)
            break;
        default:
            break;
    }
}

function principal(){
    fazerConversaoTemperatura(100, "celsiusParaFahrenheit")
}

principal()