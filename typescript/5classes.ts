class Typescript{
    version: string

    constructor(version: string){
        this.version = version
    }

    info(name: string){
        return `[${name}] Typescript version is ${this.version}`
    }
}

class Car{
    readonly model: string
    readonly numberOfWheels: number = 4

    constructor(theModel: string){
        this.model = theModel // we can do this only inside constructor body
    }
}
//======================================
//Modificators
class Animal{
    protected voice: string = ''
    public color: string = 'black'

    constructor(){
        this.go()
    }

    private go(){
        console.log('go'); 
    }
}

class Cat extends Animal{
    public setVoice(voice: string): void{
        this.voice = voice
    }
}

const  cat = new Cat()
cat.setVoice('test')
console.log(cat.color);
//=================================
//Abstract classes
abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(){
        console.log('Component on render');
    }
    info(){
        return 'This is info';
    }
}