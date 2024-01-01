module.exports = {
    calculateBMI: function (weight, height, unit) {
        if (unit === 'imperial') {
            weight *= 0.453592; // pounds to kilograms
            height *= 0.0254;   // inches to meters
        } else{
            height /= 100;
        }
        return weight / (height ** 2);
    },

    interpretBMI: function (bmi, age, gender) {
        if (age >= 18) {
            return this.interpretBMIForAdult(bmi, gender);
        } else {
            return 'BMI interpretation for children is not provided.';
        }
    },

    interpretBMIForAdult: function (bmi, gender) {
        if (gender === 'male') {
            return this.interpretBMIForAdultMale(bmi);
        } else if (gender === 'female') {
            return this.interpretBMIForAdultFemale(bmi);
        }
    },

    interpretBMIForAdultMale: function (bmi) {
        if (bmi < 18.5) {
            return 'Underweight';
        } else if (bmi >= 18.5 && bmi < 25) {
            return 'Normal weight';
        } else if (bmi >= 25 && bmi < 30) {
            return 'Overweight';
        } else {
            return 'Obese';
        }
    },

    interpretBMIForAdultFemale: function (bmi) {
        if (bmi < 17.5) {
            return 'Underweight';
        } else if (bmi >= 17.5 && bmi < 24) {
            return 'Normal weight';
        } else if (bmi >= 24 && bmi < 29) {
            return 'Overweight';
        } else {
            return 'Obese';
        }
    }
};
