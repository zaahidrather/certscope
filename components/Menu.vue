<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%); /* Off-screen to the left */
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0); /* On-screen */
}
</style>

<template>
  <!-- Overlay -->
  <Transition name="fade">
    <div
      @click="closeMenu"
      v-if="menuOpen"
      class="fixed inset-0 z-19 bg-black/60"
    ></div>
  </Transition>

  <!-- Menu -->
  <Transition name="slide">
    <aside
      v-show="menuOpen"
      class="bg-background fixed top-0 left-0 z-20 flex h-full w-60 transform flex-col justify-between text-gray-100"
    >
      <!-- Menu header -->
      <div
        class="flex h-15 items-center justify-center border-b border-gray-100/10"
      >
        <IconsLogo @click="closeMenu" class="h-5 w-35" />
        <hr class="border-border-color border" />
      </div>

      <!-- Links -->
      <nav class="px-6">
        <ul class="space-y-2 text-xs tracking-wider">
          <li
            class="text-neutral flex cursor-pointer items-center rounded px-3 py-3 hover:bg-[#2e3855]"
          >
            <NuxtLink to="#" class="flex w-full items-center">
              <Icon name="uil:suitcase" size="18" class="text-primary mr-2" />
              Enterprise
            </NuxtLink>
          </li>
          <li
            class="text-neutral flex cursor-pointer items-center rounded px-3 py-3 hover:bg-[#2e3855]"
          >
            <NuxtLink to="#" class="flex w-full items-center">
              <Icon
                name="feather:package"
                size="18"
                class="text-primary mr-2"
              />
              Services
            </NuxtLink>
          </li>
          <li
            class="text-neutral flex cursor-pointer items-center rounded px-3 py-3 hover:bg-[#2e3855]"
          >
            <NuxtLink to="#" class="flex w-full items-center">
              <Icon name="uil:users-alt" size="18" class="text-primary mr-2" />
              Mentorship Program
            </NuxtLink>
          </li>
          <li
            class="text-neutral flex cursor-pointer items-center rounded px-3 py-3 hover:bg-[#2e3855]"
          >
            <NuxtLink to="#" class="flex w-full items-center">
              <Icon
                name="uil:calendar-alt"
                size="18"
                class="text-primary mr-2"
              />
              Training Calendar
            </NuxtLink>
          </li>
          <li
            class="text-neutral flex cursor-pointer items-center rounded px-3 py-3 hover:bg-[#2e3855]"
          >
            <NuxtLink to="#" class="flex w-full items-center">
              <Icon name="uil:book-open" size="18" class="text-primary mr-2" />
              Resources
            </NuxtLink>
          </li>
          <li
            class="text-neutral flex cursor-pointer items-center rounded px-3 py-3 hover:bg-[#2e3855]"
          >
            <NuxtLink to="#" class="flex w-full items-center">
              <Icon
                name="uil:question-circle"
                size="18"
                class="text-primary mr-2"
              />
              Help and Support
            </NuxtLink>
          </li>
          <li
            class="text-neutral flex cursor-pointer items-center rounded px-3 py-3 hover:bg-[#2e3855]"
          >
            <NuxtLink to="#" class="flex w-full items-center">
              <Icon name="feather:folder" size="18" class="text-primary mr-2" />
              Policies
            </NuxtLink>
          </li>
          <li
            class="text-neutral flex cursor-pointer items-center rounded px-3 py-3 hover:bg-[#2e3855]"
          >
            <NuxtLink to="#" class="flex w-full items-center">
              <Icon name="uil:phone" size="18" class="text-primary mr-2" />
              Contact Us
            </NuxtLink>
          </li>
          <li
            class="text-neutral flex cursor-pointer items-center rounded px-3 py-3 hover:bg-[#2e3855]"
          >
            <NuxtLink to="#" class="flex w-full items-center">
              <Icon
                name="uil:info-circle"
                size="18"
                class="text-primary mr-2"
              />
              About Us
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Footer -->
      <footer class="flex justify-center space-x-4 py-2">
        <button
          class="text-background bg-primary focus:outline-primary hover: cursor-pointer rounded-full px-4 py-2 text-xs font-semibold focus:outline-2 focus:outline-offset-2"
        >
          Login
        </button>
        <button
          class="text-primary focus:outline-primary hover: bg-primary-light cursor-pointer rounded-full px-4 py-2 text-xs font-semibold focus:outline-2 focus:outline-offset-2"
        >
          Register
        </button>
      </footer>
    </aside>
  </Transition>
</template>

<script setup>
const props = defineProps({
  menuOpen: Boolean,
  closeMenu: Function,
});

onMounted(() => {
  const handleEscape = (event) => {
    if (event.key === "Escape" && props.menuOpen) {
      props.closeMenu();
    }
  };

  document.addEventListener("keydown", handleEscape);

  onUnmounted(() => {
    document.removeEventListener("keydown", handleEscape);
  });
});
</script>
