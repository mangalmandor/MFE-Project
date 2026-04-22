<template>
  <div class="bg-gray-800 p-6 rounded-lg mb-8">
    <h3 class="text-lg font-medium text-white mb-4">Order Summary</h3>

    <div class="flex justify-between mt-2 text-gray-400">
      <span>Total Items:</span>
      <span>{{ cartItems.length }}</span>
    </div>

    <div
      class="flex justify-between mt-4 pt-4 border-t border-gray-600 text-white font-bold text-xl"
    >
      <span>Amount to Pay:</span>
      <span class="text-green-400">₹{{ totalAmount }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  cartItems: {
    type: Array,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
});
</script>
