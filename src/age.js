export class Age {
    constructor(age) {
        this.age = age;
    }
    
    convertToMercury() {
        return +(this.age * .24).toFixed(2);
    }
    
    convertToVenus() {
        return +(this.age * .62).toFixed(2);
    }
    
    convertToMars() {
        return +(this.age * 1.88).toFixed(2);
    }      

    convertToJupiter() {
        return +(this.age * 11.86).toFixed(2);
    }
}

//let birthday = new Date(2018 - this.age, 9, 10);    
//console.log(`${today.getFullYear()} ${today.getMonth()} ${today.getDate()} ${dateToDay(today)}`);