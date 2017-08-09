type ValidSymbol = '#' | '$'
const symbol: ValidSymbol = '$'
var length: number = 7

function generateRandomId() {
    return symbol + Math.random().toString(36).substr(2, length)
}

function main() {
    var app = document.getElementById('app')
    setInterval(function() {
        app.innerHTML = generateRandomId()
    }, 1000)
}