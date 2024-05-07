document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("copyButton").addEventListener("click", function() {
        var cryptoText = document.getElementById("cryptoText").innerText;
        navigator.clipboard.writeText(cryptoText).then(function() {
            alert("Text copied to clipboard: " + cryptoText);
        }, function(err) {
            console.error('Failed to copy text: ', err);
        });
    });
});
