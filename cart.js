document.querySelectorAll('.cart-item').forEach(item => {
  const quantityDisplay = item.querySelector('.quantity');
  const increaseBtn = item.querySelector('.increase');
  const decreaseBtn = item.querySelector('.decrease');
  const unitPrice = parseFloat(item.querySelector('.unit-price').dataset.price);
  const totalDisplay = item.querySelector('.item-total');

  function updateItemTotal(qty) {
    const itemTotal = unitPrice * qty;
    totalDisplay.textContent = `KSh ${itemTotal.toFixed(2)}`;
    updateCartSummary(); // Recalculate subtotal and total
  }

  increaseBtn.addEventListener('click', () => {
    let qty = parseInt(quantityDisplay.textContent);
    qty++;
    quantityDisplay.textContent = qty;
    updateItemTotal(qty);
  });

  decreaseBtn.addEventListener('click', () => {
    let qty = parseInt(quantityDisplay.textContent);
    if (qty > 1) {
      qty--;
      quantityDisplay.textContent = qty;
      updateItemTotal(qty);
    }
  });

  // Set initial total
  updateItemTotal(parseInt(quantityDisplay.textContent));
});

function updateCartSummary() {
  let subtotal = 0;
  document.querySelectorAll('.cart-item').forEach(item => {
    const qty = parseInt(item.querySelector('.quantity').textContent);
    const price = parseFloat(item.querySelector('.unit-price').dataset.price);
    subtotal += qty * price;
  });

  const shipping = 5.00; // Fixed shipping fee
  const total = subtotal + shipping;

  document.querySelector('.cart-summary p:nth-child(1) span').textContent = subtotal.toFixed(2);
  document.querySelector('.cart-summary p:nth-child(3) span').textContent = total.toFixed(2);
}
