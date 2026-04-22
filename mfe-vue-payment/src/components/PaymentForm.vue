<template>
  <form @submit.prevent="$emit('submitPayment')" class="flex flex-col gap-5">
    <div class="flex flex-col">
      <label class="text-sm text-gray-300 mb-1">Name on Card</label>
      <input
        type="text"
        placeholder="Mars Mandor"
        required
        class="bg-gray-700 border border-gray-600 text-white p-3 rounded-md focus:outline-none focus:border-blue-400 transition-colors"
      />
    </div>

    <div class="flex flex-col">
      <label class="text-sm text-gray-300 mb-1">Card Number</label>
      <input
        type="text"
        placeholder="XXXX XXXX XXXX XXXX"
        required
        maxlength="16"
        class="bg-gray-700 border border-gray-600 text-white p-3 rounded-md focus:outline-none focus:border-blue-400 transition-colors"
      />
    </div>

    <div class="flex gap-2">
      <div class="flex flex-col flex-1">
        <label class="text-sm text-gray-300 mb-1">Expiry Date</label>
        <input
          type="text"
          placeholder="MM/YY"
          required
          maxlength="5"
          class="bg-gray-700 border border-gray-600 text-white p-3 rounded-md focus:outline-none focus:border-blue-400 transition-colors"
        />
      </div>
      <div class="flex flex-col flex-1">
        <label class="text-sm text-gray-300 mb-1">CVV</label>
        <input
          type="password"
          placeholder="•••"
          required
          maxlength="3"
          class="bg-gray-700 w-full border border-gray-600 text-white p-3 rounded-md focus:outline-none focus:border-blue-400 transition-colors"
        />
      </div>
    </div>

    <button
      type="submit"
      :disabled="isProcessing"
      class="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-bold text-lg mt-4 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"
    >
      <span v-if="isProcessing">Processing Securely... ⏳</span>
      <span v-else>Pay ₹{{ totalAmount }} Now</span>
    </button>
  </form>
</template>

<script setup>
defineProps({
  totalAmount: {
    type: Number,
    required: true,
  },
  isProcessing: {
    type: Boolean,
    required: true,
  },
});

defineEmits(["submitPayment"]);
</script>
