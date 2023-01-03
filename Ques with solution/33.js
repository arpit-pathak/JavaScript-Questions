/*
33. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
    - The same groups apply to both men and women.
    - Underweight: BMI is less than 18.5
    - Normal weight: BMI is 18.5 to 24.9
    - Overweight: BMI is 25 to 29.9
    - Obese: BMI is 30 or more
*/

// height = feet , weight = kg

function bmi(height, weight) {
  const bmi = Number((weight / (height * height)).toFixed(2));
  if (bmi < 18.5) {
    return `Underweight and bmi is = ${bmi}`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return `Normal and bmi is = ${bmi}`;
  } else if (bmi >= 25 && bmi <= 29.9) {
    return `Overweight and bmi is = ${bmi}`;
  } else if (bmi >= 30) {
    return `Obese and bmi is = ${bmi}`;
  }
}

console.log(bmi(6, 58));
