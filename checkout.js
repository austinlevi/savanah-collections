document.querySelector('.checkout-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const fullName = document.getElementById('fullName').value.trim();
  const address = document.getElementById('address').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const payment = document.getElementById('payment').value;

  if (!fullName || !address || !email || !phone || !payment) {
    alert('Please fill in all required fields.');
    return;
  }

  // Proceed with form submission or further processing
  alert('Order placed successfully!');
});