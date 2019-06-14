const planetRatio = {
  'earth': 1.0,
  'mercury': 0.24,
  'venus': 0.62,
  'mars': 1.88,
  'jupiter': 11.86
}

export function getEarthAge(dob) {
  let currentDate = new Date();
  let birthDate = new Date(dob);
  let earthAge = currentDate.getFullYear() - birthDate.getFullYear();
  let m = currentDate.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && currentDate.getDate() < birthDate.getDate())) {
    earthAge = earthAge - 1;
  }
  return earthAge;
}

export function earthToPlanet(number, planet) {
  return parseInt((number / planetRatio[planet]).toFixed(0));
}

export function getAge(dob, planet) {
  return earthToPlanet(getEarthAge(dob), planet);
}

export function getEarthLife(years, dob) {
  return years - getEarthAge(dob);
}

export function getLife(number, dob, planet) {
  return earthToPlanet(number, planet) - earthToPlanet(getEarthAge(dob), planet);
}
