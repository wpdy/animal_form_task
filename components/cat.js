import Animal from './animal.js'

class Cat extends Animal {
    constructor(name, age, legs, fur, tail){
        super(name, age);
        this.legs = legs;
        this.fur = fur;
        this.tail = tail;
    }
}

export default Cat