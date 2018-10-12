import { Age, } from './../src/age.js';


describe('AgeConverting', function() {
    let inputAge = new Age(29);

    it('should return the age of a person in Mercurian years', function() {
        let convertedAge = inputAge.convertToMercury();
        expect(convertedAge).toEqual(6.96);
    });

    it('should return the age of a person in Venetian years', function() {
        let convertedAge = inputAge.convertToVenus();
        expect(convertedAge).toEqual(17.98);
    });    
});
