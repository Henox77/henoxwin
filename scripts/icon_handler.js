document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(item => {
        const img = item.querySelector(".menu-icon");
        const originalSrc = img.src;
        const extension = originalSrc.split('.').pop();
        const hoverSrc = originalSrc.replace(`.${extension}`, `_hover.${extension}`);

        item.addEventListener("mouseenter", function() {
            img.src = hoverSrc;
        });

        item.addEventListener("mouseleave", function() {
            img.src = originalSrc;
        });
    });
});
