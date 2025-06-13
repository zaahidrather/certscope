<template>
  <div
    class="inline-block text-3xl font-medium text-red-400"
    ref="typedElement"
  ></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Typed from "typed.js";

const typedElement = ref(null);

onMounted(() => {
  const options = {
    strings: [
      '<p class="text-primary text-xl"><span class="text-accent">Nurture</span> the fire of your passion.</p>',
      '<p class="text-primary text-xl"><span class="text-accent">Choose</span> the right praxis.</p>',
      '<p class="text-primary text-xl"><span class="text-accent">Walk</span> the learning pathway.</p>',
      '<p class="text-primary text-xl"><span class="text-accent ">Achieve</span> your objective.</p>',
    ],
    typeSpeed: 60,
    backSpeed: 25,
    loop: true,
    html: true,
    cursorChar:
      '<span class="whitespace-nowrap text-extrabold text-red-700 text-2xl">_</span>',
    showCursor: true,
  };

  const typed = new Typed(typedElement.value, options);

  onUnmounted(() => {
    typed.destroy();
  });
});
</script>
