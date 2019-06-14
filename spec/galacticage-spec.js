import { getEarthAge } from './../src/galactic-age';

describe('getEarthAge', function() {

  it('should take a person’s birthday and return their age in Earth years', function() {
    let dob = new Date('1985-05-05')
    let age = getEarthAge(dob)
    expect(age).toEqual(34);
  });

});
