import { generateRandomId } from './utils'

class App {
    private static id = 'app'

    public onInit(el: HTMLElement | null): void {
        setInterval(function() {
            if(el) {
                el.innerHTML = generateRandomId({
                    symbol: '#',
                    length: 7
                })
            }
        }, 1000)
    }
}

function main(ComponentClass) {
    const el = document.getElementById(ComponentClass.id)
    const cmp = new ComponentClass()
    cmp.onInit(el)
}

main(App)