document.getElementById('agreeButton').addEventListener('click', function() {
    // Ask the user for additional information
    var additionalInfo = prompt("Thank you for agreeing to our Privacy Policy! Please provide some additional information:");

    // Display an alert with the entered information
    alert("Thank you for agreeing to our Privacy Policy!\nAdditional Information: " + additionalInfo);

    // Replace with the actual URL of the index page
    window.location.href = "index.html";
});

document.getElementById('disagreeButton').addEventListener('click', function() {
    alert("We're sorry to hear that you disagree. Please contact us for further assistance.");
});



