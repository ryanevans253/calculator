
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
    document.getElementById('propertyAddress').innerHTML = document.getElementById('inputAddress');
}








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