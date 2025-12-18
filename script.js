// Add to Cart Button Functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function(e) {
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('.product-info h3').textContent;
        const productPrice = productCard.querySelector('.current-price').textContent;
        
        // Visual feedback
        const originalText = this.textContent;
        this.textContent = '✓ Added to Cart';
        this.style.backgroundColor = '#27ae60';
        
        setTimeout(() => {
            this.textContent = originalText;
            this.style.backgroundColor = '';
        }, 2000);
        
        // Console log for demonstration (replace with actual cart logic)
        console.log(`Added to cart: ${productName} - ${productPrice}`);
        
        // You can dispatch a custom event or call an API here
        // to add the product to the actual cart
    });
});

// Optional: Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Optional: Product card quick view (you can expand this)
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('dblclick', function() {
        const productName = this.querySelector('.product-info h3').textContent;
        alert(`Viewing: ${productName}\n\nDouble-click feature for quick view can be expanded.`);
    });
});
