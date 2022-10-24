import "./Practice.css";

//classes use this.PROPERTYNAME to assign input values to the objects values
class TestOne {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    birthyear(date) {
        date = 2022 - this.year;
        return date;
    }
}

let programmer = new TestOne("bradd", 29);
console.log(programmer.birthyear(29));

class TestTwo {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }
    bmi(size) {
        size = this.height / this.weight;
        return size;
    }
}

let fatness = new TestTwo(74, 220);
console.log(fatness.bmi(0));

class TestThree {
    constructor(beers, whiskeys) {
        this.beers = beers;
        this.whiskeys = whiskeys;
    }
    preference(a, b) {}
}

let myPreference = new TestThree(24, 26);
console.log(myPreference);

export default TestTwo;
