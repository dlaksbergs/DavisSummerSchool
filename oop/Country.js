class Country{
    constructor(name, population, area){
        this.name = name;
        this.population = population;
        this.area = area;
 
    }
    introduce(){
        console.log(`Hi my name is ${this.name}, my population is ${this.population} and my area is ${this.area} km2`)
    }
}

module.exports = Country;

const China= new Country('China', 13247937, 2034).introduce();
const Italy= new Country('Italy', 455777, 123).introduce();