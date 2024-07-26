class Country {
  constructor(name, population, area) {
    this.name = name;
    this.population = population;
    this.area = area;
  }
  introduce() {
    console.log(
      `Hi my name is ${this.name}, my population is ${this.population} and my area is ${this.area} km2`,
    );
  }
}

module.exports = Country;
