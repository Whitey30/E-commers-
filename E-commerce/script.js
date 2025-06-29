const products = [
    { id: 1, name: "Product 1", price: 249, image: "assets/DT830DMultimter.webp" },
    { id: 2, name: "Product 2", price: 160, image: "assets/screw driver.jpg" },
    { id: 3, name: "Product 3", price: 460, image: "assets/gun.avif"},
    { id: 4, name: "Product 3", price: 19.99, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Product 3", price: 19.99, image: "https://via.placeholder.com/150" },
    { id: 6, name: "Product 3", price: 19.99, image: "https://via.placeholder.com/150" },
    { id: 7, name: "Product 3", price: 19.99, image: "https://via.placeholder.com/150" },
  ];
  
  const cart = [];
  
  function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
  
    products.forEach(product => {
      const productEl = document.createElement('div');
      productEl.classList.add('product');
      productEl.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(productEl);
    });
  }
  
  function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
  }
  
  function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
  
    cartItems.innerHTML = '';
    let total = 0;
  
    cart.forEach((item, index) => {
      total += item.price;
      const itemEl = document.createElement('div');
      itemEl.classList.add('cart-item');
      itemEl.innerHTML = `
        ${item.name} - $${item.price.toFixed(2)}
        <button onclick="removeFromCart(${index})">Remove</button>
      `;
      cartItems.appendChild(itemEl);
    });
  
    cartCount.textContent = cart.length;
    cartTotal.textContent = total.toFixed(2);
  }
  
  function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
  }
  
  document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length > 0) {
      alert('send your product details!');
      cart.length = 0;
      updateCart();
    } else {
      alert('Your cart is empty!');
    }
  });
  
  // Initialize
  displayProducts();
  