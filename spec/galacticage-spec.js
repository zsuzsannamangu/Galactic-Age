import { getEarthAge } from './../src/galactic-age';
import { getMercAge } from './../src/galactic-age';
import { earthToPlanet } from './../src/galactic-age';

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

describe('getMercAge', function() {
  it('should take a person’s birthday and correctly return age in Mercury years', function() {
    let dob = new Date('1985-05-05')
    let age = getMercAge(dob)
    expect(age).toEqual(142);
  });
});

describe('earthToPlanet', function() {
  it('should correctly return age in given planet years', function() {
    let age = 34;
    let planet = 'mercury';
    let ratio = earthToPlanet(age, planet)
    expect(ratio).toEqual(142);
  });
});

describe('getAge', function() {
  it('should take a person’s birthday and return their age in given planet years', function() {
    let dob = new Date('1985-05-05')
    let planet = 'mercury';
    let age = getAge(dob)
    expect(age).toEqual(142);
  });
});
