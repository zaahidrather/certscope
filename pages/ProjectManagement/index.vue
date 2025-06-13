<script setup></script>

<template>
  <div class="bg-background-color">
    <section
      class="relative flex flex-col items-center border-b-2 border-gray-400/10 py-8 text-center text-white"
    >
      <div class="flex flex-col items-center px-5">
        <img
          src="https://cdn-icons-png.freepik.com/512/11356/11356052.png"
          class="h-20 object-contain sm:h-20 sm:w-20 md:object-cover"
          alt="Project management img"
        />
        <h1 class="text-primary mt-6 px-4 text-5xl font-bold sm:px-6">
          Project Management
        </h1>
        <p class="text-neutral mt-4 max-w-md sm:mt-6">
          A project manager needs to follow the global standards of the project
          management cycle. We at CertScope offer project management courses
          from Foundation to Expert level from various governing bodies like PMI
          and AXELOS.
        </p>
        <a
          href="#courses-section"
          aria-label="Scroll to courses section"
          class="bg-background-color hover:bg-primary absolute -bottom-6 flex h-12 w-12 items-center justify-center rounded-full transition hover:shadow-lg"
        >
          <!-- Ping circle -->
          <span
            class="bg-primary absolute inline-flex h-12 w-12 animate-ping rounded-full opacity-10"
          ></span>

          <!-- Static arrow icon on top -->
          <svg
            class="relative h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </a>
      </div>
    </section>

    <!-- Courses section -->
    <section
      class="text-secondary relative flex flex-col items-center py-25"
      id="courses-section"
    >
      <h1 class="px-5 py-8 text-5xl font-bold text-white">
        Explore courses from
        <br />
        <span class="text-primary"> Project Management. </span>
      </h1>

      <!-- Cards -->
      <div
        class="cards mt-12 flex flex-col gap-10 px-5 md:mx-[15%] lg:mx-[25%]"
      >
        <!-- Card 1 -->
        <div
          class="rounded-sm border-1 border-gray-100/10 p-8 text-left text-sm transition-transform duration-300 ease-in-out hover:-translate-y-2"
        >
          <h3 class="text-navy mb-6 text-xl font-bold">PfMP Certification</h3>
          <p class="text-neutral mb-6">
            Portfolio management is a highly effective approach for implementing
            strategic initiatives as it helps bridge the gap between strategy
            and execution. The research found that organizations with effective
            portfolio management achieved more than 62% success rate in meeting
            or exceeding expected return on investment for their products.
            Portfolio managers ensure that projects, programs, and operations
            are aligned with strategic objectives, and they invest resources in
            the right areas to deliver expected value.
          </p>
          <button
            class="text-secondary cursor-pointer bg-[#99B8FD30] px-8 py-2 text-sm"
          >
            Explore Options
          </button>
        </div>

        <!-- Card 2 -->
        <div
          class="rounded-sm border-1 border-gray-100/10 p-8 text-left text-sm transition-transform duration-300 ease-in-out hover:-translate-y-2"
        >
          <h3 class="text-navy mb-6 text-xl font-bold">PgMP Certification</h3>
          <p class="text-neutral mb-6">
            The Program Management Professional (PgMP) certification is a
            globally recognized credential that is designed for program managers
            who have a proven track record of leading and delivering complex
            projects and programs. This certification demonstrates an
            individual's mastery of the knowledge, skills, and practices
            required to effectively manage programs and achieve strategic
            objectives.
          </p>
          <button
            class="text-secondary cursor-pointer bg-[#99B8FD30] px-8 py-2 text-sm"
          >
            Explore Options
          </button>
        </div>

        <!-- Card 3 -->
        <div
          class="rounded-sm border-1 border-gray-100/10 p-8 text-left text-sm transition-transform duration-300 ease-in-out hover:-translate-y-2"
        >
          <h3 class="text-navy mb-6 text-xl font-bold">PMP Certification</h3>
          <p class="text-neutral mb-6">
            PMP® Certification pathway from CertScope will help you to
            understand PMP process groups and Knowledge areas as per updated
            PMBOK edition and assist in passing the Project Management
            Professional® exam in the first attempt.
          </p>
          <button
            class="text-secondary cursor-pointer bg-[#99B8FD30] px-8 py-2 text-sm"
          >
            Explore Options
          </button>
        </div>
      </div>
    </section>
    <Divider />

    <!-- Mentorship Section -->
    <section class="py-25">
      <div
        class="flex flex-col-reverse items-center px-5 text-center md:flex-row md:justify-between md:px-[15%] md:text-start"
      >
        <!-- Left -->
        <div class="md:max-w-1/2">
          <p class="text-accent mb-1 font-bold">MENTORSHIP PROGRAM</p>
          <h2 class="text-secondary mb-4 text-3xl font-semibold">
            Unfurl your <span class="text-accent">passion</span>.
          </h2>
          <p class="text-neutral mb-12">
            Take mentees on a customised learning journey. CertScope gives you
            the right tools to start an online learning pathway and provide
            mentorship. Assist mentees to reach their potential and pursue their
            passion. Not only can you earn but also inspire while pursuing your
            passion.
            <br />
            Sharing is caring, after all.
          </p>
          <button
            class="text-background bg-primary focus:outline-primary mr-3 cursor-pointer rounded-full px-4 py-2 text-xs font-semibold transition-transform duration-300 ease-in-out hover:-translate-y-[3px] focus:outline-2 focus:outline-offset-2"
          >
            FIND OUT HOW
          </button>
          <button
            class="text-background bg-primary focus:outline-primary cursor-pointer rounded-full px-4 py-2 text-xs font-semibold transition-transform duration-300 ease-in-out hover:-translate-y-[3px] focus:outline-2 focus:outline-offset-2"
          >
            GET STARTED
          </button>
        </div>

        <!-- Right -->
        <div class="mb-8">
          <img
            class="h-60 object-contain md:h-50 md:object-cover"
            src="@images/inspire.svg"
            alt="inspire-svg"
          />
        </div>
      </div>
    </section>

    <Divider />

    <!-- Enterprise Section -->
    <section class="py-25">
      <div
        class="flex flex-col items-center px-5 text-center md:flex-row md:justify-between md:px-[15%]"
      >
        <!-- Left -->
        <div class="mb-12">
          <img
            class="h-60 object-contain md:object-cover"
            src="@images/certification.svg"
            alt="inspire-svg"
          />
        </div>

        <!-- Right -->
        <div class="md:max-w-1/2 md:text-start">
          <h3 class="text-primary mb-2 text-xl font-bold">Enterprise</h3>
          <h2 class="text-secondary mb-4 text-3xl font-semibold">
            Scale new
            <span class="text-primary">heights.</span>
          </h2>
          <p class="text-neutral mb-2">
            Engage the workplace with Certscope's custom learning solutions.
            Enhance your employees' skills in Data Science, IT, Project
            Management and more with Cerscope's Business Solutions.
          </p>
          <p class="text-neutral mb-12">
            New and upgraded skills translate into better productivity and
            opportunities for growth, for you and your team.
          </p>
          <button
            class="text-background bg-primary focus:outline-primary mr-3 cursor-pointer rounded-full px-4 py-2 text-xs font-semibold transition-transform duration-300 ease-in-out hover:-translate-y-[3px] focus:outline-2 focus:outline-offset-2"
          >
            FIND OUT HOW
          </button>
          <button
            class="text-background bg-primary focus:outline-primary cursor-pointer rounded-full px-4 py-2 text-xs font-semibold transition-transform duration-300 ease-in-out hover:-translate-y-[3px] focus:outline-2 focus:outline-offset-2"
          >
            GET IN TOUCH
          </button>
        </div>
      </div>
    </section>
    <Divider />
  </div>
</template>
