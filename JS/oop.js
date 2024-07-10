// Object Oriented Programming --> OOP

// Object --> Instance --> Class

// constructor --> function

// Inheritance -->

// Abstraction -->

// Polymorphism -->

// static keyword

// paren class / super class
class Animal {
    name;
    age;

    static count = 0;

    constructor(n, a) {
        this.name = n;
        this.age = a;
        Animal.count++;
    }

    static displayCount() {
        console.log(Animal.count);
    }

    displayInfo() {
        // complex stuff
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    }

    // abstract method
    getSound() {}
}

// // subclass / child class
// class Cat extends Animal {
//     getSound() {
//         console.log("Meowww");
//     }
// }

function Cat(name, age) {
    this.name = name;
    this.age = age;
    this.count = 0;
}

// prototypal inheritance
Cat.prototype.displayInfo = function () {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
};

Cat.prototype.displayCount = function () {
    return this.count;
};

const newCat = new Cat("Bert", 2);

newCat.displayInfo();
console.log(newCat.displayCount());

// const a = new Cat("Bert", 2);
// const a2 = new Cat("Tommy", 2);
// a.displayInfo();
// a.print();

// subclass / child class
// class Dog extends Animal {
//     getSound() {
//         console.log("Woof Woof");
//     }
// }

// const b = new Dog();

// const makeAnimalSound = (animal) => {
//     animal.getSound();
// };

// makeAnimalSound(a);
// makeAnimalSound(b);

// Animal.displayCount();
