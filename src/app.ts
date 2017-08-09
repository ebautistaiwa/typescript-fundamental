type ValidSymbol = '#' | '$'

function generateRandomId(symbol: ValidSymbol, length: number = 7): string {
    return symbol + Math.random().toString(36).substr(2, length)
}

function main() {
    var app = document.getElementById('app')
    setInterval(function() {
        if(app) {
            app.innerHTML = generateRandomId('#', 7)
        }
    }, 1000)
}