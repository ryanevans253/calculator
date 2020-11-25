var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    options: {
        cutoutPercentage: 40,
    },
    data: {
        labels: ['Mortgage', 'Property Tax', 'Insurance', 'Maintenance', 'CapEx', 'Vacancy', 'Property Management', 'Utilities'],
        
        datasets: [{
            label: '% of expenses',
            data: [25, 12, 4, 6, 7, 7, 5, 6],
            backgroundColor: [
                'rgba(62, 162, 168)',
                'rgba(240, 90, 31)',
                'rgba(255, 198, 46)',
                'rgba(92, 92, 91)',
                'rgba(163, 207, 209)',
                'rgba(248, 160, 112)',
                'rgba(255, 228, 166)',
                'rgba(155, 158, 160)'
            ],
            borderWidth: 0
        }]
    },    
});


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


    // document.getElementById("payment").value = monthlyPayment;

        //document.getElementById('monthlyPayment').innerHTML = "Monthly Payment" + monthlyPayment;
}




function changeSize(chart) {
    chart.options.cutoutPercentage = 70;
    chart.update();
}


function updateAll(chart) {
    // chart.data.datasets[0].data[0] = monthlyPayment.value;
    chart.data.datasets[0].data[1] = document.getElementById('inputtaxes').value;
    chart.data.datasets[0].data[2] = document.getElementById('inputinsurance').value;
    chart.data.datasets[0].data[3] = document.getElementById('inputmaintenance').value;
    chart.data.datasets[0].data[4] = document.getElementById('inputcapex').value;
    chart.data.datasets[0].data[5] = document.getElementById('inputvacancy').value;
    chart.data.datasets[0].data[6] = document.getElementById('inputpropertymanagement').value;
    chart.data.datasets[0].data[7] = document.getElementById('inpututilities').value;
    chart.update();
}


// Unnecessary code below

// function updateData(chart) {
//     chart.data.labels[0] = 'new title';
//     chart.data.datasets[0].data[0] = 25;
//     chart.update();
// }