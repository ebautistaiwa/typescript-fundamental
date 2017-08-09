type ValidSymbol = '#' | '$'

interface GenerateConfig { 
    symbol: ValidSymbol, 
    length: number, 
}

function generateRandomId(optionsOrSymbol): string {
    if(typeof optionsOrSymbol === 'string'){
        return optionsOrSymbol + Math.random().toString(36).substr(2, length)
    }
    return optionsOrSymbol
.symbol + Math.random().toString(36).substr(2, optionsOrSymbol
    .length)
}

function main() {
    var app = document.getElementById('app')
    setInterval(function() {
        if(app) {
            app.innerHTML = generateRandomId({
                symbol: '#',
                length: 7
            })
        }
    }, 1000)
}