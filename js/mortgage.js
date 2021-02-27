function calculateMonthlyMortgage() {
    let homePrice = parseFloat(document.getElementById('homePrice').value);
    let downPayment = parseFloat(document.getElementById('downPayment').value);

    let monthlyPayment;
    let principal = homePrice - downPayment;
    let interestRate = (parseFloat(document.getElementById('interestRate').value) / 12) / 100;
    let numberOfPayments = parseFloat(document.getElementById('loanLength').value) * 12; 
    let percentageRate = interestRate.toFixed(4);
    // console.log(principal + " principal")


    monthlyPayment = principal * interestRate * (Math.pow(1 + interestRate, numberOfPayments)) / (Math.pow(1 + interestRate, numberOfPayments) - 1);


    // return principal * interestRate * (Math.pow(1 + interestRate, numberOfPayments)) / (Math.pow(1 + interestRate, numberOfPayments) - 1);

    // (loanAmount * percentageRate) / (1 - (Math.pow((1 + percentageRate) , loanLength * -1)));
    // monthlyPayment = monthlyPayment.toFixed(2);

    // monthlyPayment = calculateMonthly
    document.getElementById('monthlyMortgagePayment').innerHTML = "$" + monthlyPayment.toFixed(0);
}

