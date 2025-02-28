//function showDetails(image, description) {
//    let modal = document.getElementById("modal");
//    let modalImg = document.getElementById("modal-image");
//    let modalDesc = document.getElementById("modal-description");
//
//    modal.style.display = "flex";
//    modalImg.src = "/static/images/" + image;
//    modalDesc.textContent = description;
//}
//
//function closeModal() {
//    document.getElementById("modal").style.display = "none";
//}
// Array to store image sources and descriptions
const images = [
    { src: "images/image1.jpg", desc: "This was IMechE competition and we got the reward as the Top Competitor all over the country" },
    { src: "images/image2.jpg", desc: "Description for Image 2" },
    { src: "images/image3.jpg", desc: "Description for Image 3" }
];

let currentIndex = 0; // Track the current image index

// Function to show the modal with image details
function showDetails(imageSrc, description) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const modalDescription = document.getElementById("modal-description");

    // Find the index of the selected image
    currentIndex = images.findIndex(img => img.src.includes(imageSrc));

    // Set modal content
    modalImage.src = `static/${imageSrc}`;
    modalDescription.textContent = description;

    // Display the modal
    modal.style.display = "flex";
}
// Function to toggle zoom on image
function toggleZoom() {
    const modalImage = document.getElementById("modal-image");
    modalImage.classList.toggle("zoomed"); // Toggle zoom class
}


// Function to close the modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Function to show the previous image
function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1; // Loop to last image
    }
    updateModalContent();
}

// Function to show the next image
function nextImage() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to first image
    }
    updateModalContent();
}

// Function to update modal content
function updateModalContent() {
    const modalImage = document.getElementById("modal-image");
    const modalDescription = document.getElementById("modal-description");

    modalImage.src = `static/${images[currentIndex].src}`;
    modalDescription.textContent = images[currentIndex].desc;
}

// Close modal when clicking outside the content
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        closeModal();
    }
};
