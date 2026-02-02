// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {

    $("form").on("submit", function (e) {
        e.preventDefault(); // stop page refresh

        // get values
        let hours = parseFloat($("#hours").val());
        let rate = parseFloat($("#rate").val());

        // validation
        if (isNaN(hours) || hours <= 0) {
            $("#result").text("Please enter a positive number of hours.");
            return;
        }

        // calculation
        let total = hours * rate;

        // output result
        $("#result").text("Total cost: $" + total.toFixed(2));
    });

});