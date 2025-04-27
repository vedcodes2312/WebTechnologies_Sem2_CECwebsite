$(document).ready(function() {
    $("#loader").fadeOut(1000);

    $("#taxForm").submit(function(e) {
        e.preventDefault();

        let income = parseFloat($("#income").val());

        if (isNaN(income) || income <= 0) {
            alert("Enter valid income amount.");
            return;
        }

        let tax = 0;
        if (income <= 250000) {
            tax = 0;
        } else if (income <= 500000) {
            tax = (income - 250000) * 0.05;
        } else if (income <= 1000000) {
            tax = (250000 * 0.05) + (income - 500000) * 0.2;
        } else {
            tax = (250000 * 0.05) + (500000 * 0.2) + (income - 1000000) * 0.3;
        }

        $("#annualIncome").text(income.toFixed(2));
        $("#taxAmount").text(tax.toFixed(2));

        $("#taxResult").removeClass('d-none').hide().fadeIn(500);
    });
});
