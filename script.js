// Ensure script handles DOM verification properly
document.addEventListener("DOMContentLoaded", () => {
    const certItems = document.querySelectorAll(".cert-item");
    const lightbox = document.getElementById("cert-lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".lightbox-close");

    // Loop through every card module
    certItems.forEach(item => {
        // Change the cursor pattern to a magnifying zoom indicator
        const imgContainer = item.querySelector(".cert-image");
        if (imgContainer) imgContainer.style.cursor = "zoom-in";

        item.addEventListener("click", () => {
            const targetImg = item.querySelector("img");
            if (targetImg) {
                lightboxImg.src = targetImg.src;
                lightboxImg.alt = targetImg.alt;
                lightbox.style.display = "flex";
            }
        });
    });

        // Close Actions
    const closeLightbox = () => {
        lightbox.style.display = "none";
        lightboxImg.src = ""; // Clean memory
    };

    closeBtn.addEventListener("click", closeLightbox);

    /* FIX: Removes the restriction so clicking the image or the background triggers the close */
    lightbox.addEventListener("click", () => {
        closeLightbox();
    });
});