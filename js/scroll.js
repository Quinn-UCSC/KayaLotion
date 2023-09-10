// Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle the scroll event
function handleScroll() {
    const productDetails = document.querySelector('.product-details-container');
    if (isElementInViewport(productDetails) && !productDetails.classList.contains('show')) {
        productDetails.classList.add('show');
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);
