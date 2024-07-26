const Country = require("./Country");
const Person = require("./Person");

let student = new Person("Janis", "Berzins", 20, "waiter", false);
let anotherStudent = new Person("Andris", "Berzins", 25, "waiter", true);

let latvia = new Country("Latvia", "1800000", 64000);
/* new Person('Davis','Laksbergs', 21, 'Superdzeks', false).calcAge();
const China= new Country('China', 13247937, 2034).introduce();
const Italy= new Country('Italy', 455777, 123).introduce(); */
student.introduce();
anotherStudent.introduce();
latvia.introduce();
