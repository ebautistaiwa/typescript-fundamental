import { generateRandomId, Component } from './utils'

function enumerable(isEnumerable){
    return (target, propertyKey, propertyDescriptor: PropertyDescriptor) =>
        {
            propertyDescriptor.enumerable = isEnumerable
        }
}

@Component({id: 'app'})
class App {
    @enumerable(false)
    onInit(el: HTMLElement | null): void {
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