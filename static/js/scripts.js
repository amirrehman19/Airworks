document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const overlay = document.getElementById("overlay");
    const enlargedImg = document.getElementById("enlarged-img");
    const imageDetails = document.getElementById("image-details");
    const closeBtn = document.getElementById("close-btn");

    // First script functionality
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
});

// Second script functionality (ensuring it runs separately)
document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const overlay = document.getElementById("overlay");
    const enlargedImg = document.getElementById("enlarged-img");
    const imageDetails = document.getElementById("image-details");
    const closeBtn = document.getElementById("close-btn");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function () {
            const imgSrc = this.src;
            const details = this.dataset.details;
            enlargedImg.src = imgSrc;
            imageDetails.innerText = details;
            overlay.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", function () {
        overlay.style.display = "none";
    });
});
