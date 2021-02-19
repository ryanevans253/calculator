//al new



// let homePrice = document.getElementById('homePrice');
// let downPayment = document.getElementById('downPayment');
// let interestRate = document.getElementById('interestRate');
// let loanLength = document.getElementById('loanLength');

function calculateMonthlyMortgage() {

    let homePrice = parseFloat(document.getElementById('homePrice').value);
    let downPayment = parseFloat(document.getElementById('downPayment').value);
    let interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    let loanLength = parseFloat(document.getElementById('loanLength').value) * 12;
    let loanAmount = homePrice - downPayment;
    let percentageRate = interestRate / 1200;

    var monthlyPayment = (loanAmount * percentageRate) / (1 - (Math.pow((1 + percentageRate) , loanLength * -1)));
        monthlyPayment = monthlyPayment.toFixed(2);

    console.log(monthlyPayment, loanAmount, interestRate)

    document.getElementById('monthlyMortgagePayment').innerHTML = "$" + monthlyPayment;
    document.getElementById('totalInterest').innerHTML = "$ total interest here";
    document.getElementById('totalPayments').innerHTML = "$ total payments";
}




///////////////////////

// mortgage calculator
let loanAmount = document.getElementById('inputloanamount'); //might need a .value
let interestRate = document.getElementById('inputinterestrate');
let loanTerm = document.getElementById('inputloanterm');
let mortgageAmount = loanAmount * interestRate; //needs a var on the front

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


// quick test
    document.getElementById("inputmortgage").value = monthlyPayment;
    document.getElementById("mortgageResult").innerHTML = monthlyPayment;

}

function calculateMaxOffer() {
    //flip calculator functions go here
    //acquisition
    let purchasePrice = parseFloat(document.getElementById('inputPurchasePrice').value);
    let purchaseClosingCost = parseFloat(document.getElementById('inputClosingCosts').value);
    // let totalAcquisitionCost = purchasePrice + purchaseClosingCost; - i put this down below

    //disposition
    let saleClosingCost = parseFloat(document.getElementById('inputSaleClosingCosts').value);
    let saleCommission = parseFloat(document.getElementById('inputCommission').value);

    //profitability estimates
    var arv = parseFloat(document.getElementById('inputARV').value);
    let desiredProfit = parseFloat(document.getElementById('inputDesiredProfit').value);

    //rehab estimates
    let totalRepairs = parseFloat(document.getElementById('inputRepair').value);
    let monthlyHoldingCost = parseFloat(document.getElementById('inputHoldingCost').value);
    let holdingTime = parseFloat(document.getElementById('inputHoldingTime').value);

// caluclations

    var totalHoldingCost = monthlyHoldingCost * holdingTime;
    var totalRehabCost = totalHoldingCost + totalRepairs;
    var totalAcquisitionCost = purchasePrice + purchaseClosingCost;
    var totalDispositionCost = (arv * (saleCommission / 100)) + saleClosingCost;

    var totalProfit = arv - totalAcquisitionCost - totalRehabCost - totalDispositionCost;
    var totalExpenses = arv - totalProfit;

    var maxOffer = arv - purchaseClosingCost - totalRehabCost - totalDispositionCost - desiredProfit; 

    var isDealProfitable = false;
    if (totalProfit >= desiredProfit) {
        isDealProfitable = true;
        console.log("this deal is profitable");
    }
    else {
        console.log("This is not a profitable deal.");
    }
    
 

    console.log(purchasePrice);
    console.log("profit is " + totalProfit);
    console.log("total expense " + totalExpenses);
    console.log("max offer is " + maxOffer);

    document.getElementById('maxOfferPrice').innerHTML = maxOffer;
}


//test for updating mortgage 

function updateMortgage() {
    var testnumber = document.getElementById('monthlyPayment');
    return monthlyPayment;
}
