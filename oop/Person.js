class Person{
    constructor(name, surname, age, job, isSleeping){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.job = job;
        this.isSleeping = isSleeping;
    }
    sleeping(){
        return this.isSleeping = true;
    }
    calcAge(){
        console.log( 2024-this.age);
    }
    introduce(){
        console.log(`Hi my name is ${this.name}`)
    }
}

module.exports = Person;

new Person('Davis','Laksbergs', 21, 'Superdzeks', false).calcAge();

