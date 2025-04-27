$(document).ready(function() {
    // Hide loader after page load
    $("#loader").fadeOut(1000);

    const rates = {
        usd: 0.012, // Example: 1 INR = 0.012 USD
        eur: 0.011,
        gbp: 0.0095,
        jpy: 1.68,
        aed: 0.044
    };

    $("#currencyForm").submit(function(e) {
        e.preventDefault();

        let inr = parseFloat($("#inrAmount").val());
        let currency = $("#currencyType").val();

        if (isNaN(inr) || inr <= 0) {
            alert("Please enter a valid amount in INR.");
            return;
        }

        let converted = inr * rates[currency];

        $("#inrValue").text(inr.toFixed(2));
        $("#convertedValue").text(converted.toFixed(2) + " " + currency.toUpperCase());

        $("#currencyResult").removeClass('d-none').hide().fadeIn(500);
    });
});
