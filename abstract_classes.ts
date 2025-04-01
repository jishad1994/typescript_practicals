abstract class Animal {
    abstract name: string;
    abstract makeSound(): void;

    public sayName(): void {
        console.log(`my name is ${this.name}`);
    }
}

class Cat extends Animal {
    name: string = "cat";
    makeSound(): void {
        console.log(" i make sound meow");
    }
}

const myCat=new Cat();
myCat.makeSound()
console.log(myCat.name);