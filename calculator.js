var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    title: 'myfjdksafdsa',
    options: {
        cutoutPercentage: 30,
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
            text: 'Expense Breakdown',
            fontSize: 30,
            padding: 10,
            fontColor: 'rgba(95, 91, 255, 1)',
        },   
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

// second chart for flips
var flipper = document.getElementById('flipChart').getContext('2d');
var flipChart = new Chart(flipper, {
    type: 'doughnut',
    options: {
        cutoutPercentage: 25,
        title: {
            display: true,
            text: 'Fix and Flip Expenses',
            fontSize: 30,
            padding: 10,
            fontColor: 'rgba(95, 91, 255, 1)',
        },
    },
    data: {
        labels: ['Purchase Price', 'Purchase Closing Costs', 'Sale Closing Costs', 'Agent Commission', 'Repair Costs', 'Holding Cost'],

        datasets: [{
            label: '% of Sales Price',
            data: [30,10,4,18,7,13],
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
            borderWidth: 0,
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


// quick test
    document.getElementById("inputmortgage").value = monthlyPayment;
    document.getElementById("mortgageResult").innerHTML = monthlyPayment;

}

//test for updating mortgage 

function updateMortgage() {
    var testnumber = document.getElementById('monthlyPayment');
    return monthlyPayment;
}
// shouldn't be necessary code. i think this was a test
function changeSize(chart) {
    chart.options.cutoutPercentage = 70;
    chart.update();
}

function updateAll(chart) {
    chart.data.datasets[0].data[0] = document.getElementById('inputmortgage').value;
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