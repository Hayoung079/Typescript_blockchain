class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const so = new Human("So", 20, "female");

const sayHi = (person: Human): string => {
    return `Hello ${person.name} you are ${person.age}, you are ${person.gender}!`;
}

console.log(sayHi(so));