import Animal from './animal.js'

class Dog extends Animal {
    constructor(name, age, legs, fur, tail, breed){
        super(name, age);
        this.legs = legs;
        this.fur = fur;
        this.tail = tail;
        this.breed = breed
    }
}

export default Dog