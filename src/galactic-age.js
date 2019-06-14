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
