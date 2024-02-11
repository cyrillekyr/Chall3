document.getElementById("surpriseButton").addEventListener("click", function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var messages = JSON.parse(this.responseText);
            var randomIndex = Math.floor(Math.random() * messages.length);
            var reversedMessage = messages[randomIndex].split("").reverse().join("");
            
            var messageContainer = document.getElementById("messageContainer");
            messageContainer.innerHTML = "<p>" + reversedMessage + "</p>";
            messageContainer.classList.remove("hidden");

            // Afficher le bouton "Afficher Renversé" en retirant la classe hidden dans le code source
            document.getElementById("showReversedButton").classList.remove("hidden");
        }
    };
    xhttp.open("GET", "get_messages.php", true);
    xhttp.send();
});

document.getElementById("showAllButton").addEventListener("click", function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var messages = JSON.parse(this.responseText);

            // Renverser tous les messages
            var reversedMessages = messages.map(function(msg) {
                return msg.split("").reverse().join("");
            });

            var messageContainer = document.getElementById("messageContainer");
            messageContainer.innerHTML = "<p>" + reversedMessages.join("</p><p>") + "</p>";
            messageContainer.classList.remove("hidden");
        }
    };
    xhttp.open("GET", "get_messages.php", true);
    xhttp.send();
});
