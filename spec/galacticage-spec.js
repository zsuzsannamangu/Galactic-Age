import { getEarthAge } from './../src/galactic-age';
import { earthToPlanet } from './../src/galactic-age';
import { getAge } from './../src/galactic-age';
import { getEarthLife } from './../src/galactic-age';
import { getLife } from './../src/galactic-age';

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

describe('earthToPlanet', function() {
  it('should correctly return age in given planet years', function() {
    let age = 34;
    let planet = 'mercury';
    let ratio = earthToPlanet(age, planet);
    expect(ratio).toEqual(142);
  });
});

describe('getAge', function() {
  it('should take a person’s birthday and return their age in given planet years', function() {
    let dob = new Date('1985-05-05');
    let planet = 'mercury';
    let age = getAge(dob, planet);
    expect(age).toEqual(142);
  });
});

describe('getEarthLife', function() {
  it('should take life expectancy and return years left to live on Earth', function() {
    let years = 90;
    let dob = new Date('1985-05-05');
    let life = getEarthLife(years, dob);
    expect(life).toEqual(56);
  });
});

describe('getLife', function() {
  it('should take life expectancy and return years left to live on any planet in given planet years', function () {
    let years = 90;
    let dob = new Date('1985-05-05');
    let planet = 'venus';
    let life = getLife(years, dob, planet);
    expect(life).toEqual(90);
  });
});
