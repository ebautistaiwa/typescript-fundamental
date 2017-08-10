import { generateRandomId } from './utils'

class App {
    id: string
    constructor() {
        this.id = 'app'
    }
}

function main(ComponentClass) {
    const cmp = new ComponentClass();
    var app = document.getElementById(cmp.id)
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