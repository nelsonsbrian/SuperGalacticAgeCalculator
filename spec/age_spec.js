import { Age, } from './../src/age.js';

describe('convertToMercury', function() {
    it('should return the age of a person in Mercurian years', function() {
        let inputAge = new Age(29);
        let convertedAge = inputAge.convertToMercury();
        expect(convertedAge).toEqual(6.96);
    });
});
