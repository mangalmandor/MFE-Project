<script>
  import { onMount } from 'svelte';
  import { navigateToUrl } from 'single-spa'; // 👈 Yeh line add kijiye

  // 1. Shuruat mein khali array rakhein
  let cartItems = [];

  // 2. 🌟 CONNECTION LOGIC: Jab component load ho, tab data uthao
  onMount(() => {
    const savedCart = localStorage.getItem('mfe_cart_data');
    if (savedCart) {
      cartItems = JSON.parse(savedCart);
    }
  });

  // Reactive total (yeh apne aap update hota rahega)
  $: cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  function removeItem(index) {
    cartItems.splice(index, 1);
    cartItems = cartItems; // Svelte ko batane ke liye ki change hua hai
    
    // 3. Update LocalStorage (taaki sync bana rahe)
    localStorage.setItem('mfe_cart_data', JSON.stringify(cartItems));
  }

  function goBack() {
    navigateToUrl('/dashboard'); // 👈 Isse use karein
  }

 function goToPayment() {
    console.log("Navigating to Payment..."); 
    navigateToUrl('/payment'); // 👈 Isse use karein
  }
</script>

<main class="cart-container">
  <nav class="navbar">
    <h2>🛍️ Your Cart</h2>
    <button on:click={goBack} class="back-btn">⬅ Back to Dashboard</button>
  </nav>

  <div class="cart-content">
    {#if cartItems.length === 0}
      <p class="empty-msg">Your cart is completely empty!</p>
    {:else}
      <div class="item-list">
        {#each cartItems as item, index}
          <div class="cart-item">
            <div class="item-info">
              <span class="icon">{item.icon}</span>
              <h3>{item.name}</h3>
            </div>
            <div class="item-actions">
              <span class="price">₹{item.price}</span>
              <button on:click={() => removeItem(index)} class="remove-btn">Remove</button>
            </div>
          </div>
        {/each}
      </div>

      <div class="summary">
        <h3>Total Amount: <span class="total-price">₹{cartTotal}</span></h3>
        <button on:click={goToPayment} class="checkout-btn">
    Proceed to Checkout
  </button>
      </div>
    {/if}
  </div>
</main>

<style>
  .cart-container { min-height: 100vh; background-color: #000; color: #fff; padding: 2rem; font-family: sans-serif; }
  .navbar { display: flex; justify-content: space-between; border-bottom: 1px solid #333; padding-bottom: 1rem; margin-bottom: 2rem; }
  .navbar h2 { margin: 0; color: #60a5fa; }
  .back-btn { background: transparent; color: #9ca3af; border: 1px solid #4b5563; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; }
  .back-btn:hover { color: white; background: #374151; }
  .cart-item { background: #111827; padding: 1rem; border-radius: 8px; margin-bottom: 1rem; display: flex; justify-content: space-between; align-items: center; border: 1px solid #1f2937; }
  .item-info { display: flex; gap: 1rem; align-items: center; }
  .item-actions { display: flex; gap: 1rem; align-items: center; }
  .price { color: #4ade80; font-weight: bold; font-size: 1.2rem; }
  .remove-btn { background: #7f1d1d; color: #fca5a5; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; }
  .remove-btn:hover { background: #991b1b; color: white; }
  .summary { background: #1f2937; padding: 1.5rem; border-radius: 8px; margin-top: 2rem; text-align: right; }
  .checkout-btn { background: #2563eb; color: white; border: none; padding: 0.75rem 2rem; border-radius: 6px; font-weight: bold; font-size: 1.1rem; margin-top: 1rem; cursor: pointer; }
  .checkout-btn:hover { background: #1d4ed8; }
</style>