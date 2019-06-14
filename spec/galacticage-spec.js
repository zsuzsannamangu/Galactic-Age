import { getEarthAge } from './../src/galactic-age';

describe('getEarthAge', function() {

  it('should take a person’s birthday and return their age in Earth years', function() {
    let dob = new Date('1985-05-05')
    let age = getEarthAge(dob)
    expect(age).toEqual(34);
  });

  it('should correctly count the months and not just the years to return Earth age', function() {
    let dob = new Date('2018-09-01')
    let age = getEarthAge(dob)
    expect(age).toEqual(0);
  });

});
