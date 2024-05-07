function bmi_calc(weight,height) {
    let bmi = weight/height**2;
    return Math.round(bmi,2);
}

console.log(bmi_calc(75,1.8));