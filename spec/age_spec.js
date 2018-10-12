import { Age, } from './../src/age.js';


describe('AgeConverting', function() {
    let inputAge = new Age(29);

    it('should return the age of a person in Mercurian years', function() {
        let convertedAge = inputAge.convertToMercury(inputAge.age);
        expect(convertedAge).toEqual(6.96);
    });

    it('should return the age of a person in Venetian years', function() {
        let convertedAge = inputAge.convertToVenus(inputAge.age);
        expect(convertedAge).toEqual(17.98);
    });

    it('should return the age of a person in Marsan years', function() {
        let convertedAge = inputAge.convertToMars(inputAge.age);
        expect(convertedAge).toEqual(54.52);
    });    

    it('should return the age of a person in Jupiter years', function() {
        let convertedAge = inputAge.convertToJupiter(inputAge.age);
        expect(convertedAge).toEqual(343.94);
    });    
});

describe('LifeExpectancy', function() {
    let inputAge = new Age(29, 80);

    it('should return how many year you have to live while living on Mecury', function() {
        let yearsRemaining = inputAge.remainingYearsMercury();
        expect(yearsRemaining).toEqual(12.24);
    });

    it('should return how many year you have to live while living on Venus', function() {
        let yearsRemaining = inputAge.remainingYearsVenus();
        expect(yearsRemaining).toEqual(31.62);
    });

    it('should return how many year you have to live while living on Mars', function() {
        let yearsRemaining = inputAge.remainingYearsMars();
        expect(yearsRemaining).toEqual(95.88);
    });      

    it('should return how many year you have to live while living on Jupiter', function() {
        let yearsRemaining = inputAge.remainingYearsJupiter();
        expect(yearsRemaining).toEqual(604.86);
    });
    
    it('should return how many year you have to live while living on Mecury -- living longer than your inputed life expectancy', function() {
        let oldPerson = new Age(29, 20);        
        let yearsRemaining = oldPerson.remainingYearsMercury();
        expect(yearsRemaining).toEqual(-2.16);
    });
    
});

describe('LifeExpectancy', function() {

    let inputAge = new Age(29);
    let newCreated = new Date(2018, 9, 12, 9, 17);
    inputAge.created = newCreated;


    it('should return how many magfly lifetimes you have lived', function() {
        let magflyYears = inputAge.magflyYears();
         expect(magflyYears).toEqual(5133144);
    });  
});
