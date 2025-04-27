$(document).ready(function() {
    // Hide loader after page load
    $("#loader").fadeOut(1000);

    // GST Form submit event
    $("#gstForm").submit(function(e) {
        e.preventDefault();

        let amount = parseFloat($("#amount").val());
        let rate = parseFloat($("#gstRate").val());

        if (isNaN(amount) || amount <= 0) {
            alert("Please enter a valid amount.");
            return;
        }

        let gstAmount = (amount * rate) / 100;
        let sgst = gstAmount / 2;
        let cgst = gstAmount / 2;
        let finalAmount = amount + gstAmount;

        $("#baseAmount").text(amount.toFixed(2));
        $("#rate").text(rate);
        $("#sgst").text(sgst.toFixed(2));
        $("#cgst").text(cgst.toFixed(2));
        $("#totalGst").text(gstAmount.toFixed(2));
        $("#totalAmount").text(finalAmount.toFixed(2));

        $("#gstResult").removeClass('d-none').hide().fadeIn(500);
    });
});
