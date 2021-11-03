"use strict";

var donutMortgageChart = document
  .getElementById("mortgageChart")
  .getContext("2d");
var mortgageChart = new Chart(donutMortgageChart, {
  type: "doughnut",
  options: {
    cutoutPercentage: 70,
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Payment Breakdown",
      fontSize: 30,
      padding: 10,
      fontColor: "rgba(95, 91, 255, 1)",
    },
  },
  data: {
    labels: ["Principal and Interest", "Insurance", "Property Tax", "HOA Fees"],
    datasets: [
      {
        label: "% of Sales Price",
        data: [1, 1, 1, 1],
        backgroundColor: [
          "rgba(97,245,245)",
          "rgba(98,195,245)",
          "rgba(97,147,245)",
          "rgba(98,96,244)",
        ],
        borderWidth: 0,
      },
    ],
  },
});

function updateAll(chart) {
  chart.data.datasets[0].data[0] = calcAll().toFixed(0);
  chart.data.datasets[0].data[1] = (propertyInsurance.value / 12).toFixed(0);
  chart.data.datasets[0].data[2] = (propertyTaxes.value / 12).toFixed(0);
  chart.data.datasets[0].data[3] = (HOAFees.value / 12).toFixed(0);
  chart.update();
}

function toggleAdvancedOptions() {
  document.getElementById("advancedOptions").classList.toggle("hidden");
}

function calcAll() {
  const principal = homePrice.value - downPayment.value;
  const iRate = interestRate.value / 12 / 100;
  const numberOfPayments = loanLength.value * 12;
  const options =
    (+propertyTaxes.value + +propertyInsurance.value + +HOAFees.value) / 12; //unary operator
  let monthlyPayment =
    (principal * iRate * Math.pow(1 + iRate, numberOfPayments)) /
    (Math.pow(1 + iRate, numberOfPayments) - 1);

  return monthlyPayment; //in case I need to use it later :)
}
