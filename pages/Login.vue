<script setup>
definePageMeta({
  layout: false,
});
</script>
<template>
  <div class="bg-background h-screen md:flex">
    <!-- Main div -->
    <div
      class="bg-background-light hide-scrollbar min-w-md overflow-y-auto shadow-md"
    >
      <!-- Header -->
      <header class="my-6 flex justify-center">
        <IconsLogo class="h-10 w-35" />
      </header>
      <!-- Main -->
      <main class="mx-auto max-w-md px-17">
        <h2 class="mb-6 text-2xl font-bold text-[#bebede]">Welcome back</h2>
        <div class="flex items-center">
          <p class="text-neutral text-xs">
            Don't have an account?
            <a href="#" class="text-primary ml-1 hover:underline"> Register </a>
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            class="text-primary"
          >
            <path
              fill="currentColor"
              d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"
            />
          </svg>
        </div>
        <hr class="mt-5 mb-12 border border-gray-100/10" />
        <form class="space-y-8">
          <!-- Email -->
          <div class="relative w-full">
            <input
              type="email"
              id="email"
              placeholder="you@email.com"
              required
              class="peer hover:border-primary w-full rounded-xs border border-gray-600 px-3 py-4 text-white placeholder:text-xs focus:placeholder-transparent focus:outline-none"
            />
            <label
              for="email"
              class="peer-focus:text-primary peer-focus:bg-background-light absolute left-3 z-10 pr-2 pl-1 text-sm text-gray-400 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-xs peer-placeholder-shown:text-transparent peer-focus:-top-2 peer-focus:text-xs after:text-red-300 peer-focus:after:content-['*']"
            >
              Email or username
            </label>
          </div>
          <!-- Password -->
          <div class="relative w-full">
            <input
              type="password"
              id="password"
              placeholder="Your account password"
              required
              class="peer hover:border-primary w-full rounded-xs border border-gray-600 px-3 py-4 text-white placeholder:text-xs focus:placeholder-transparent focus:outline-none"
            />
            <label
              for="password"
              class="peer-focus:text-primary peer-focus:bg-background-light absolute left-3 z-10 pr-2 pl-1 text-sm text-gray-400 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-xs peer-placeholder-shown:text-transparent peer-focus:-top-2 peer-focus:text-xs after:text-red-300 peer-focus:after:content-['*']"
            >
              Password
            </label>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="label"
                type="checkbox"
                class="bg-background hover:border-primary checked:border-primary h-4 w-4 appearance-none border-2 border-gray-100/10 checked:border-3 focus:outline-none"
              />
              <label for="label" class="text-neutral ml-2 text-xs"
                >Keep me logged in</label
              >
            </div>
            <a href="#" class="text-primary text-xs font-semibold no-underline"
              >Forgot password?</a
            >
          </div>
          <button
            type="submit"
            class="bg-primary text-background hover:outline-primary w-full rounded-full py-4 text-xs font-semibold transition-all hover:outline-2 hover:outline-offset-2"
          >
            Log In
          </button>
        </form>

        <!-- Social Accounts -->
        <p
          class="relative my-15 text-center before:absolute before:top-1/2 before:left-0 before:h-0.5 before:w-full before:bg-gray-100/10 before:content-['']"
        >
          <span
            class="bg-background text-neutral relative z-10 rounded border border-gray-100/10 px-4 py-2 text-xs"
            >Continue with social accounts</span
          >
        </p>
        <div class="mb-5 flex items-center justify-center gap-6">
          <!-- Google Button -->
          <button
            class="hover:bg-background flex items-center gap-2 rounded-full border border-white/10 px-7 py-3.5 text-xs font-semibold text-white transition"
          >
            <svg class="h-4 w-4" viewBox="0 0 533.5 544.3">
              <path
                fill="#4285f4"
                d="M533.5 278.4c0-17.6-1.6-35-4.8-51.9H272v98.3h146.9c-6.3 33.8-25 62.4-53.3 81.5l86.1 66.9c50.3-46.3 81.8-114.6 81.8-194.8z"
              />
              <path
                fill="#34a853"
                d="M272 544.3c72.6 0 133.6-24 178.1-65.2l-86.1-66.9c-23.9 16.2-54.4 25.7-91.9 25.7-70.7 0-130.6-47.8-152-111.9H29.3v70.4c44.7 89.7 137.3 148 242.7 148z"
              />
              <path
                fill="#fbbc04"
                d="M120 325.9c-10.6-31.8-10.6-66.3 0-98.1V157.3H29.3c-39.2 77.7-39.2 168.6 0 246.3L120 325.9z"
              />
              <path
                fill="#ea4335"
                d="M272 107.7c39.5-.6 77.5 13.4 106.7 39.7l79.5-79.5C413.3 25.8 344.4-.3 272 0 166.6 0 74 58.3 29.3 157.3l90.7 70.4c21.4-64.1 81.3-111.9 152-120z"
              />
            </svg>
            GOOGLE
          </button>

          <!-- LinkedIn Button -->
          <button
            class="hover:bg-background flex items-center gap-2 rounded-full border border-white/10 px-7 py-3.5 text-xs font-semibold text-white transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              viewBox="0 0 256 256"
            >
              <path
                fill="#0a66c2"
                d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.91 39.91 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186zM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009s9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97zM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
              />
            </svg>
            <!-- <svg
              class="h-4 w-4"
              viewBox="0 0 34 34"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  fill="#0A66C2"
                  d="M34,17c0,9.4-7.6,17-17,17S0,26.4,0,17S7.6,0,17,0S34,7.6,34,17z"
                />
                <path
                  fill="#FFFFFF"
                  d="M10.1,13.5H6.8v13h3.3V13.5z M8.5,7.5C7.3,7.5,6.4,8.4,6.4,9.5s0.9,2,2.1,2c1.2,0,2.1-0.9,2.1-2S9.7,7.5,8.5,7.5z
         M27.2,19.3c0-4.1-2.2-6-5.1-6c-2.3,0-3.3,1.3-3.9,2.3v-2h-3.3c0,0,0,1.3,0,13h3.3v-7.3c0-0.4,0-0.8,0.2-1.1c0.4-0.8,1.2-1.6,2.5-1.6
        c1.8,0,2.5,1.2,2.5,3v7h3.3L27.2,19.3L27.2,19.3z"
                />
              </g>
            </svg> -->
            LINKEDIN
          </button>

          <!-- Legal Text -->
        </div>

        <!-- Legal Text -->
        <p class="text-neutral legal-text [&>a]:text-primary text-xs/5">
          By clicking "Log in" above, you agree to our
          <a
            href="https://certscope.com/policy/terms"
            title="Terms and Conditions of Use"
            >Terms of use</a
          >,
          <a href="https://certscope.com/policy/privacy" title="Privacy Policy"
            >Privacy</a
          >
          and
          <a href="https://certscope.com/policy/cookie" title="Cookie Policy"
            >Cookie Policy</a
          >. This site is protected by reCAPTCHA and the Google
          <a
            href="https://policies.google.com/privacy"
            title="Google Privacy Policy"
            target="_blank"
            rel="noopener noreferrer"
            >Privacy Policy</a
          >
          and
          <a
            rel="noreferrer noopener"
            href="https://policies.google.com/terms"
            target="_blank"
            title="Google Terms of Service"
            >Terms of Service</a
          >
          apply.
        </p>
      </main>

      <!-- Footer -->
      <div
        class="text-neutral mt-5 flex w-full justify-between border-t border-t-gray-100/10 px-3 py-5 text-sm font-semibold"
      >
        <p>
          <a
            href="https://certscope.com/who-we-are?_gl=1*132xw1u*_ga*MTI0ODIwNTAxMi4xNzQ3NTgxMDA2*_ga_WEEVKFVQMJ*czE3NDk3NTQyMjEkbzczJGcxJHQxNzQ5NzU0MjMzJGo0OCRsMCRoMA.."
            title="CertScope / Who we are"
            >CertScope&nbsp;©&nbsp;2025</a
          >
        </p>
        <p>
          <a
            href="https://certscope.com/support"
            title="Visit our Help and Support Center."
            >HELP</a
          >&nbsp;&nbsp;&nbsp;<a
            href="https://certscope.com/contact"
            title="Know how to contact us."
            >CONTACT</a
          >
        </p>
      </div>
    </div>

    <!-- Aside -->
    <aside
      class="hidden w-full items-center justify-center bg-[linear-gradient(165deg,#171e32_50%,#1a2138_0%)] md:flex"
    >
      <h1 class="text-6xl text-white">
        Pursue your <br />
        <span class="text-[125%] font-bold">PASSION</span>
      </h1>
    </aside>
  </div>
</template>

<style scoped>
.hide-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
</style>
