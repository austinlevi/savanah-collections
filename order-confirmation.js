// Example dynamic data (normally this would come from sessionStorage or backend)
const orderData = {
  orderNumber: Math.floor(Math.random() * 900000) + 100000,
  email: "customer@example.com",
  items: [
    { name: "Floral Midi Dress", qty: 1, price: 45 },
    { name: "Casual Denim Jacket", qty: 1, price: 65 }
  ]
};

// Populate Order Number and Email
document.getElementById("order-number").textContent = `#${orderData.orderNumber}`;
document.getElementById("user-email").textContent = orderData.email;

// Populate Order Items
const orderList = document.getElementById("order-items");
let total = 0;

orderData.items.forEach(item => {
  const li = document.createElement("li");
  li.innerHTML = `
    <span>${item.name}</span>
    <span>Qty: ${item.qty}</span>
    <span>KSh ${item.price.toFixed(2)}</span>
  `;
  orderList.appendChild(li);
  total += item.price * item.qty;
});

// Show total
document.getElementById("order-total").textContent = total.toFixed(2);
