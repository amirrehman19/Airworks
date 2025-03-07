document.addEventListener("DOMContentLoaded", function () {
    // Image Gallery Functionality
    const thumbnails = document.querySelectorAll(".thumbnail");
    const overlay = document.getElementById("overlay");
    const enlargedImg = document.getElementById("enlarged-img");
    const imageDetails = document.getElementById("image-details");
    const closeBtn = document.getElementById("close-btn");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function () {
            enlargedImg.src = this.src;
            imageDetails.textContent = this.getAttribute("data-details");
            overlay.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", function () {
        overlay.style.display = "none";
    });

    overlay.addEventListener("click", function (event) {
        if (event.target === overlay) {
            overlay.style.display = "none";
        }
    });

    // Countdown Timer
    var deadline = new Date("2025-03-15T23:59:59").getTime();

    function updateTimer() {
        var now = new Date().getTime();
        var timeLeft = deadline - now;

        if (timeLeft > 0) {
            var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            document.getElementById("timer").innerHTML =
                days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        } else {
            document.getElementById("timer").innerHTML = "TIME UP!";
        }
    }

    // Update timer every second
    updateTimer(); // Call once immediately
    setInterval(updateTimer, 1000);
});
