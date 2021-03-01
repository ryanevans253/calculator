function calculateMonthlyMortgage() {
    let homePrice = parseFloat(document.getElementById('homePrice').value);
    let downPayment = parseFloat(document.getElementById('downPayment').value);

    let monthlyPayment;
    let principal = homePrice - downPayment;
    let interestRate = (parseFloat(document.getElementById('interestRate').value) / 12) / 100;
    let numberOfPayments = parseFloat(document.getElementById('loanLength').value) * 12; 
    let percentageRate = interestRate.toFixed(4);


    monthlyPayment = principal * interestRate * (Math.pow(1 + interestRate, numberOfPayments)) / (Math.pow(1 + interestRate, numberOfPayments) - 1);


    document.getElementById('monthlyMortgagePayment').innerHTML = "$" + monthlyPayment.toFixed(0);
}

function calculateAdvancedOptions() {
    let propertyTaxes = parseFloat(document.getElementById('propertyTaxes').value) / 12;
    let propertyInsurance = parseFloat(document.getElementById('propertyInsurance').value) / 12;
    let hoaFees = parseFloat(document.getElementById('HOAFees').value) / 12; 

    let homePrice = parseFloat(document.getElementById('homePrice').value);
    let downPayment = parseFloat(document.getElementById('downPayment').value);

    let monthlyPayment;
    let principal = homePrice - downPayment;
    let interestRate = (parseFloat(document.getElementById('interestRate').value) / 12) / 100;
    let numberOfPayments = parseFloat(document.getElementById('loanLength').value) * 12; 
    let percentageRate = interestRate.toFixed(4);


    monthlyPayment = principal * interestRate * (Math.pow(1 + interestRate, numberOfPayments)) / (Math.pow(1 + interestRate, numberOfPayments) - 1);

    let totalMonthlyPayment = monthlyPayment + propertyTaxes + propertyInsurance + hoaFees;


    document.getElementById('monthlyMortgagePayment').innerHTML = "$" + totalMonthlyPayment.toFixed(0);


}





function showOptions() {
  var x = document.getElementById("advancedOptions");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


