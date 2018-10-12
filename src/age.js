export class Age {
    constructor(age) {
        this.age = age;
    }
    
    convertToMercury() {
        return this.age * .24;
    }
    
    convertToVenus() {
        return this.age * .62;
    }  
}

//let birthday = new Date(2018 - this.age, 9, 10);    
//console.log(`${today.getFullYear()} ${today.getMonth()} ${today.getDate()} ${dateToDay(today)}`);