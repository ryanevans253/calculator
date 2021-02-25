

// let homePrice = parseFloat(document.getElementById('homePrice').value);
// let downPayment = parseFloat(document.getElementById('downPayment').value);

// let monthlyPayment;
// let principal = homePrice - downPayment;
// let interestRate = (parseFloat(document.getElementById('interestRate').value) / 12) / 100;
// let numberOfPayments = parseFloat(document.getElementById('loanLength').value) * 12; 
// let percentageRate = interestRate.toFixed(4);



// monthlyPayment =  calculateMonthlyMortgage(principal, numberOfPayments, interestRate);
// console.log(monthlyPayment.toFixed(2));

function calculateMonthlyMortgage(principal, numberOfPayments, interestRate) {
    let homePrice = parseFloat(document.getElementById('homePrice').value);
    let downPayment = parseFloat(document.getElementById('downPayment').value);

    let monthlyPayment;
    let principal = homePrice - downPayment;
    let interestRate = (parseFloat(document.getElementById('interestRate').value) / 12) / 100;
    let numberOfPayments = parseFloat(document.getElementById('loanLength').value) * 12; 
    let percentageRate = interestRate.toFixed(4);


    return principal * interestRate * (Math.pow(1 + interestRate, numberOfPayments)) / (Math.pow(1 + interestRate, numberOfPayments) - 1);

    // (loanAmount * percentageRate) / (1 - (Math.pow((1 + percentageRate) , loanLength * -1)));
    // monthlyPayment = monthlyPayment.toFixed(2);

    // monthlyPayment = calculateMonthly
}


function tester() {
    monthlyPayment =  calculateMonthlyMortgage(principal, numberOfPayments, interestRate);

    document.getElementById('monthlyMortgagePayment').innerHTML = "$" + monthlyPayment.toFixed(0);
// document.getElementById('totalInterest').innerHTML = "$ total interest here";
}



// testers 
// console.log("monthly payment = " + monthlyPayment);
console.log("homePrice = " + homePrice);
console.log("principal = " + principal);
console.log("percentageRate = " + percentageRate);
console.log("number of patments = " + numberOfPayments);

