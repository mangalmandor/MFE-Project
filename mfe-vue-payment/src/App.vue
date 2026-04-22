<template>
  <div
    class="min-h-screen flex justify-center items-center p-8 text-white font-sans bg-transparent"
  >
    <div
      class="bg-gray-900 border border-gray-800 rounded-xl p-8 w-full max-w-md shadow-2xl"
    >
      <h2 class="text-center text-blue-400 text-2xl font-semibold mb-8">
        Secure Checkout 🔒
      </h2>

      <OrderSummary :cartItems="cartItems" :totalAmount="totalAmount" />

      <PaymentSuccess v-if="isPaid" @goHome="goHome" />
      <PaymentForm
        v-else
        :totalAmount="totalAmount"
        :isProcessing="isProcessing"
        @submitPayment="processPayment"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import OrderSummary from "./components/OrderSummary.vue";
import PaymentForm from "./components/PaymentForm.vue";
import PaymentSuccess from "./components/PaymentSuccess.vue";

const cartItems = ref([]);
const isProcessing = ref(false);
const isPaid = ref(false);

onMounted(() => {
  const savedCart = localStorage.getItem("mfe_cart_data");
  if (savedCart) {
    cartItems.value = JSON.parse(savedCart);
  }
});

const totalAmount = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.price, 0);
});

const processPayment = () => {
  isProcessing.value = true;
  setTimeout(() => {
    isProcessing.value = false;
    isPaid.value = true;
    localStorage.removeItem("mfe_cart_data");
  }, 2000);
};

const goHome = () => {
  window.history.pushState(null, null, "/dashboard");
};
</script>
