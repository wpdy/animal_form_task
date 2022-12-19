import Animal from './animal.js'

class Bird extends Animal {
    constructor(name, age, wings, feathers, tail, beak){
        super(name, age);
        this.wings = wings;
        this.feathers = feathers;
        this.tail = tail;
        this.beak = beak
    }    
}

export default Bird