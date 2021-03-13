let homePrice = parseFloat(document.getElementById('homePrice').value);
let downPayment = parseFloat(document.getElementById('downPayment').value);

let monthlyPayment;
let principal = homePrice - downPayment;


let propertyTaxes = parseFloat(document.getElementById('propertyTaxes').value) / 12;
let propertyInsurance = parseFloat(document.getElementById('propertyInsurance').value) / 12;
let hoaFees = parseFloat(document.getElementById('HOAFees').value) / 12; 

// function calculateInsurance() {
//     let propertyInsurance = parseFloat(document.getElementById('propertyInsurance').value) / 12;

//     return propertyInsurance;
// }

function calculateMonthlyMortgage() {
 
    let interestRate = (parseFloat(document.getElementById('interestRate').value) / 12) / 100;
    let numberOfPayments = parseFloat(document.getElementById('loanLength').value) * 12; 
    let percentageRate = interestRate.toFixed(4);


    monthlyPayment = principal * interestRate * (Math.pow(1 + interestRate, numberOfPayments)) / (Math.pow(1 + interestRate, numberOfPayments) - 1);


    document.getElementById('monthlyMortgagePayment').innerHTML = "$" + monthlyPayment.toFixed(0);
    return monthlyPayment
}

function calculateAdvancedOptions() {
   
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


var donutMortgageChart = document.getElementById('mortgageChart').getContext('2d');
var mortgageChart = new Chart(donutMortgageChart, {
    type: 'doughnut',
    options: {
        cutoutPercentage: 25,
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
            text: 'Payment Breakdown',
            fontSize: 30,
            padding: 10,
            fontColor: 'rgba(95, 91, 255, 1)',
        },
    },
    data: {
        labels: ['Principal and Interest', 'Insurance', 'Property Tax', 'HOA Fees'],

        datasets: [{
            label: '% of Sales Price',
            data: [1,1,1,1],
            backgroundColor: [
                'rgba(97,245,245)',                        // 'rgba(62, 162, 168)',
                'rgba(98,195,245)',                        // 'rgba(240, 90, 31)',
                'rgba(97,147,245)',                        // 'rgba(255, 198, 46)',
                'rgba(98,96,244)',                        // 'rgba(92, 92, 91)',
                // 'rgba(99,49,245)',                        // 'rgba(163, 207, 209)',
                                        // 'rgba(248, 160, 112)',
                                        // 'rgba(255, 228, 166)',
                                        // 'rgba(155, 158, 160)'
            ],
            borderWidth: 0,
        }]
    },
});

// need to calculate these numbers after button is pushed. currently calculating on pageload. 
function updateAll(chart) {
    chart.data.datasets[0].data[0] = calculateMonthlyMortgage().toFixed(0);
    chart.data.datasets[0].data[1] = propertyInsurance;
    chart.data.datasets[0].data[2] = propertyTaxes;
    chart.data.datasets[0].data[3] = hoaFees;
    chart.update();
}
