

let homePrice = parseFloat(document.getElementById('homePrice').value);
let downPayment = parseFloat(document.getElementById('downPayment').value);

var monthlyPayment;
let principal = homePrice - downPayment;
let interestRate = (parseFloat(document.getElementById('interestRate').value) / 12) / 100;
let numberOfPayments = parseFloat(document.getElementById('loanLength').value) * 12; 
let percentageRate = interestRate.toFixed(4);



monthlyPayment =  calculateMonthlyMortgage(principal, numberOfPayments, interestRate);
console.log(monthlyPayment.toFixed(2));

function calculateMonthlyMortgage(principal, numberOfPayments, interestRate) {

    return principal * interestRate * (Math.pow(1 + interestRate, numberOfPayments)) / (Math.pow(1 + interestRate, numberOfPayments) - 1);

    // (loanAmount * percentageRate) / (1 - (Math.pow((1 + percentageRate) , loanLength * -1)));
    // monthlyPayment = monthlyPayment.toFixed(2);

    // monthlyPayment = calculateMonthly

}




// testers 
console.log("monthly payment = " + monthlyPayment);
console.log("homePrice = " + homePrice);
console.log("principal = " + principal);
console.log("percentageRate = " + percentageRate);
console.log("number of patments = " + numberOfPayments);


// document.getElementById('monthlyMortgagePayment').innerHTML = "$" + monthlyPayment.toFixed(0);
document.getElementById('totalInterest').innerHTML = "$ total interest here";





///////////////////////

// mortgage calculator
// let loanAmount = document.getElementById('inputloanamount'); //might need a .value
// let interestRate = document.getElementById('inputinterestrate');
// let loanTerm = document.getElementById('inputloanterm');
// let mortgageAmount = loanAmount * interestRate; //needs a var on the front

function calculateMortgage() {

    var loanAmount = parseFloat(document.getElementById("inputloanamount").value);
        //principal = parseInt(principal);

    var loanTerm = parseFloat(document.getElementById("inputloanterm").value);
        //termOfLoan = parseInt(termOfLoan);

    var interestRate = parseFloat(document.getElementById("inputinterestrate").value);
        //annualInterestRate = parseFloat(annualInterestRate);
        //document.getElementById("Calculate").value = principal * annualInterestRate / (1 -(Math.pow(1 / (1 + annualInterestRate) , termOfLoan)));
        //var monthlyPayment = principal * annualInterestRate / (1 -(Math.pow(1 / (1 + annualInterestRate) , termOfLoan))); 

    var percentageRate = interestRate / 1200;
    var lengthOfLoan = 12 * loanTerm;
    var monthlyPayment = (loanAmount * percentageRate) / (1 - (Math.pow((1 + percentageRate) , lengthOfLoan * -1)));
        monthlyPayment = monthlyPayment.toFixed(2);

    console.log(monthlyPayment);
}


