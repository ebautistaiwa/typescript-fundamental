type ValidSymbol = '#' | '$';

function generateRandomId(symbol: ValidSymbol, length: number): string {
    return symbol + Math.random().toString(36).substr(2, length)
}

function main() {
    var app = document.getElementById('app')
    setInterval(function() {
        app.innerHTML = generateRandomId('#', 7)
    }, 1000)
}