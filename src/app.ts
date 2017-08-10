import { generateRandomId } from './utils'

class App {
    static id = 'app'
}

function main(ComponentClass) {
    var app = document.getElementById(ComponentClass.id)
    setInterval(function() {
        if(app) {
            app.innerHTML = generateRandomId({
                symbol: '#',
                length: 7
            })
        }
    }, 1000)
}

main(App)