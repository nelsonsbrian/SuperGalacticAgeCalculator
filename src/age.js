export class Age {
    constructor(age, lifeExpectancy) {
        this.age = age;
        this.lifeExpectancy = lifeExpectancy;
    }
    
    convertToMercury(inputYear) {
        return +(inputYear * .24).toFixed(2);
    }
    
    convertToVenus(inputYear) {
        return +(inputYear * .62).toFixed(2);
    }
    
    convertToMars(inputYear) {
        return +(inputYear * 1.88).toFixed(2);
    }      

    convertToJupiter(inputYear) {
        return +(inputYear * 11.86).toFixed(2);
    }

    remainingYearsMercury() {
        return  +(this.convertToMercury(this.lifeExpectancy) - this.convertToMercury(this.age)).toFixed(2);
    }
}

//let birthday = new Date(2018 - this.age, 9, 10);    
//console.log(`${today.getFullYear()} ${today.getMonth()} ${today.getDate()} ${dateToDay(today)}`);