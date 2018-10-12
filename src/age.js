export class Age {
    constructor(age, lifeExpectancy) {
        this.age = age;
        this.lifeExpectancy = lifeExpectancy;
        this.created = Date.now();
        this.birthYear = +(this.created / 31536000000 + 1970 - age).toFixed(0);
    }
    
    convertToMercury(inputYear) {
        return +(inputYear / .24).toFixed(2);
    }
    
    convertToVenus(inputYear) {
        return +(inputYear / .62).toFixed(2);
    }
    
    convertToMars(inputYear) {
        return +(inputYear / 1.88).toFixed(2);
    }      

    convertToJupiter(inputYear) {
        return +(inputYear / 11.86).toFixed(2);
    }

    remainingYearsMercury() {
        return  +(this.convertToMercury(this.lifeExpectancy) - this.convertToMercury(this.age)).toFixed(2);
    }

    remainingYearsVenus() {
        return  +(this.convertToVenus(this.lifeExpectancy) - this.convertToVenus(this.age)).toFixed(2);
    }

    remainingYearsMars() {
        return  +(this.convertToMars(this.lifeExpectancy) - this.convertToMars(this.age)).toFixed(2);
    } 
    
    remainingYearsJupiter() {
        return  +(this.convertToJupiter(this.lifeExpectancy) - this.convertToJupiter(this.age)).toFixed(2);
    }
    
    magflyYears() {
        return Math.floor(this.created / 300000 + 1970 - this.age);
    }
}
