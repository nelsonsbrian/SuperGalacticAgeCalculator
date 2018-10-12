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
});
