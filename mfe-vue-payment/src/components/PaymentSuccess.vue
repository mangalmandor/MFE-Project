<template>
  <div class="text-center animate-[fadeIn_0.5s_ease-in-out]">
    <div class="text-6xl mb-4">✅</div>
    <h2 class="text-2xl font-bold text-white mb-2">Payment Successful!</h2>
    <p class="text-gray-400 mb-8">Your WebGen Studio resources are ready.</p>

    <button
      @click="$emit('goHome')"
      class="bg-transparent border border-gray-600 text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors"
    >
      ⬅ Return to Dashboard
    </button>
  </div>
</template>

<script setup>
defineEmits(["goHome"]);
</script>
