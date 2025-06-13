<template>
  <Menu :menuOpen="menuOpen" :closeMenu="closeMenu" />

  <div
    class="bg-background-light"
    :class="{ 'blur-[1px]': menuOpen, sepia: menuOpen }"
  >
    <!-- Nav Bar -->
    <nav
      id="navbar"
      class="bg-background fixed top-0 right-0 left-0 z-1 flex h-14 items-center justify-between pr-6 text-white"
    >
      <!-- Nav Left -->
      <div class="flex h-full w-1/2 items-center justify-start">
        <!-- <IconsBars @click="toggleMenu" class="h-8 w-8 cursor-pointer" /> -->
        <Icon
          @click="toggleMenu"
          name="fe:bar"
          class="flex h-full cursor-pointer items-center justify-center px-8 text-3xl"
        />

        <IconsLogo class="mr-4 flex h-10 w-30" />

        <Pathways />
      </div>

      <!-- Nav Right -->
      <div>
        <IconsProfile class="h-6 w-6" />
      </div>
    </nav>

    <!-- Main -->
    <main class="pt-10">
      <!-- Page content -->
      <slot />

      <!-- Contact us section -->
      <section class="py-25">
        <div
          class="flex flex-col-reverse items-center px-5 text-center md:flex-row md:justify-end md:px-[15%]"
        >
          <!-- Left -->
          <div class="md:w-1/2 md:text-start">
            <p class="text-primary font-bold">Contact us</p>
            <h2 class="text-secondary mb-6 text-3xl font-bold">
              Looking for something else?
            </h2>
            <p class="text-neutral mb-6">
              We are here with you along the journey you may take on any pathway
              you choose on CertScope. We are passionate about supporting our
              members, whom we regard as part of our family. If you have a
              question or questions, need assistance, or just want to say hi,
              feel free to connect with us.
              <br />
              <br />
              We will, for sure, get back to you.
            </p>
            <button
              class="text-background bg-primary focus:outline-primary cursor-pointer rounded-full px-4 py-2 text-xs font-semibold transition-transform duration-300 ease-in-out hover:-translate-y-[3px] focus:outline-2 focus:outline-offset-2"
            >
              GET IN TOUCH
            </button>
          </div>
          <div class="right mb-15 flex w-1/2 justify-center md:m-0">
            <img
              class="h-60 object-contain md:object-cover"
              src="@images/contact.svg"
              alt="inspire-svg"
            />
          </div>
        </div>
      </section>

      <Divider />
    </main>

    <!-- Footer -->
    <footer>
      <!-- Info -->
      <section class="px-5 py-25">
        <div class="flex flex-col gap-5 sm:flex-row md:px-[10%]">
          <!-- Card 1 -->
          <div class="flex flex-col items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="240"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-secondary lucide lucide-award-icon lucide-award h-10 w-10"
            >
              <path
                d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
              />
              <circle cx="12" cy="8" r="6" />
            </svg>
            <h4 class="text-navy mt-3 mb-1 font-semibold">
              Pursue your passion
            </h4>
            <p class="text-neutral text-xs">
              Learn what you want, when you want from experts in their
              respective fields.
            </p>
          </div>

          <!-- Card 2 -->
          <div class="flex flex-col items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-secondary lucide lucide-refresh-ccw-icon lucide-refresh-ccw h-10 w-10"
            >
              <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
              <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
              <path d="M16 16h5v5" />
            </svg>
            <h4 class="text-navy mt-3 mb-1 font-semibold">
              Money back guarantee
            </h4>
            <p class="text-neutral text-xs">
              We have a robust money back guarantee on purchases for your peace
              of mind.
            </p>
          </div>

          <!-- Card 3 -->
          <div class="flex flex-col items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-secondary lucide lucide-circle-help-icon lucide-circle-help h-10 w-10"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <path d="M12 17h.01" />
            </svg>
            <h4 class="text-navy mt-3 mb-1 font-semibold">
              Prompt customer support
            </h4>
            <p class="text-neutral text-xs">
              Friendly and timely support. Available via phone, email and social
              media.
            </p>
          </div>

          <!-- Card 4 -->
          <div class="flex flex-col items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-secondary lucide lucide-shield-icon lucide-shield h-10 w-10"
            >
              <path
                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
              />
            </svg>
            <h4 class="text-navy mt-3 mb-1 font-semibold">
              Secure online payments
            </h4>
            <p class="text-neutral text-xs">
              We only use modern encryption and security, for added peace of
              mind.
            </p>
          </div>
        </div>
      </section>

      <div class="bg-background footer-container">
        <!-- Footer Menu -->
        <nav
          class="flex justify-center border-t-1 border-t-gray-100/10 pt-12 pb-6"
        >
          <ul
            class="text-neutral flex flex-wrap gap-8 px-5 text-xs md:max-w-8/10"
          >
            <li><a href="#">Enterprise</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Mentorship</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Refunds</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Policies</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Data</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </nav>
        <!-- Brand info -->
        <div
          class="flex flex-col gap-6 border-t border-t-gray-100/10 px-5 py-6 md:mx-auto md:max-w-8/10 md:flex-row md:justify-between"
        >
          <div>
            <p class="text-neutral text-xs">
              CERTSCOPE IN © 2025 <br /><span>Powered by Tawseef.Dev</span>
            </p>
          </div>
          <ul class="text-neutral flex items-center gap-2">
            <li>
              <Icon name="uil:linkedin-alt" size="20" />
            </li>
            <li>
              <Icon name="uil:facebook-f" size="20" />
            </li>
            <li>
              <Icon name="uil:twitter-alt" size="20" />
            </li>
            <li>
              <Icon name="uil:instagram" size="20" />
            </li>
            <li>
              <Icon name="uil:youtube-alt" size="20" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Menu
const menuOpen = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

function closeMenu() {
  menuOpen.value = false;
}

// Pathways

const pathwaysOpen = ref(false);

function togglePathways() {
  console.log("working");
  pathwaysOpen.value = !pathwaysOpen.value;
}

function closePathways() {
  pathwaysOpen.value = false;
}

// Navbar

onMounted(() => {
  const navbar = document.getElementById("navbar");

  let prevScrollPos = window.pageYOffset;
  window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;
    // console.log("prev", prevScrollPos);
    if (currentScrollPos > prevScrollPos) {
      navbar.style.top = "-50px"; // Hide
    } else {
      navbar.style.top = 0; // show
    }
    prevScrollPos = currentScrollPos;
    // console.log("current", currentScrollPos);
  };
});
</script>
