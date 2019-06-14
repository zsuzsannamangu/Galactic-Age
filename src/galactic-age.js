const planetRatio = {
  'mercury': 0.24,
  'venus': 0.62,
  'earth': 1.0,
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

export function getMercAge(dob) {
  return parseInt((getEarthAge(dob) / 0.24).toFixed(0));
}

export function earthToPlanet(years, planet) {
  return parseInt((years / planetRatio[planet]).toFixed(0));
}
