<template>
  <div class="h-full">
    <!-- Pathways Button -->
    <button
      @click="toggleMenu"
      class="hover:bg-background-light flex h-full cursor-pointer items-center rounded px-2 py-2 text-sm"
    >
      <Icon name="feather:book" size="20" class="mr-1" /> Pathways
    </button>

    <!-- Overlay + Menu -->
    <div v-if="isMenuOpen">
      <!-- Overlay -->
      <div @click="closeMenu" class="fixed inset-0 z-40 bg-transparent"></div>

      <!-- Left Panel -->
      <div
        class="text-primary bg-background fixed top-0 left-0 z-50 h-full w-[300px] overflow-y-auto p-6 text-sm"
      >
        <h2
          class="border-b border-gray-500/50 pb-4 text-lg font-semibold text-gray-400"
        >
          Course Categories
        </h2>

        <!-- Menu Items -->
        <ul class="space-y-1">
          <li
            v-for="cat in categories"
            :key="cat.key"
            @mouseenter="openCategory(cat.key)"
            class="hover:bg-background-light cursor-pointer"
          >
            <NuxtLink
              :to="
                cat.name === 'Project Management' ? '/projectmanagement' : '#'
              "
            >
              <span
                @click="closeMenu"
                class="hover:bg-background-light block cursor-pointer px-2 py-2"
              >
                {{ cat.name }}
              </span>
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Right Panel -->
      <transition name="slide-fade">
        <div
          v-if="activeCategoryData && activeCategoryData.subItems.length"
          @mouseleave="activeCategory = null"
          class="text-primary bg-background-light fixed top-0 left-30 z-50 h-full w-[300px] p-6 text-sm shadow-lg md:left-[300px]"
        >
          <h3
            class="mt-2 mb-4 border-b border-gray-500/50 pb-4 font-semibold text-gray-400 transition-all"
          >
            {{ activeCategoryData.name }}
          </h3>
          <ul class="space-y-6">
            <li v-for="item in activeCategoryData.subItems" :key="item">
              {{ item }}
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
// Pathways menu
const categories = [
  {
    name: "Agile and Scrum",
    key: "agile",
    subItems: [
      "CSM Certification",
      "CSPO Certification",
      "PMI‑ACP Certification",
    ],
  },
  {
    name: "Big Data",
    key: "big-data",
    subItems: ["Big Data Administrator Certification"],
  },
  {
    name: "Cloud Computing",
    key: "cloud-computing",
    subItems: [
      "AWS Solution Architect Certification",
      "AWS Developer Associate Certification",
    ],
  },
  {
    name: "Cyber Security",
    key: "cyber-security",
    subItems: ["CEH Certification", "CISSP Certification"],
  },
  {
    name: "Data Science",
    key: "data-science",
    subItems: ["Data Science with Python Certification"],
  },
  {
    name: "DevOps",
    key: "devops",
    subItems: ["DevOps Certification"],
  },
  {
    name: "Digital Marketing",
    key: "digital-marketing",
    subItems: ["Digital Marketing Expert Certification"],
  },
  {
    name: "Health and Safety",
    key: "health-and-safety",
    subItems: [], // no sub-items listed
  },
  {
    name: "ISO Certifications",
    key: "iso-certifications",
    subItems: ["ISO 27001 Lead Auditor Certification"],
  },
  {
    name: "IT Service Management",
    key: "itsm",
    subItems: ["ITIL‑4 Foundation Certification"],
  },
  {
    name: "Project Management",
    key: "project-management",
    subItems: ["PMP Certification", "PfMP Certification", "PgMP Certification"],
  },
  {
    name: "Quality Management",
    key: "quality-management",
    subItems: [
      "Lean Six Sigma Yellow Belt Certification",
      "Lean Six Sigma Black Belt Certification",
      "Lean Six Sigma Green Belt Certification",
    ],
  },
  {
    name: "UX and Design Thinking",
    key: "ux-design-thinking",
    subItems: ["Design Thinking Certification"],
  },
];

const isMenuOpen = ref(false);
const activeCategory = ref(null);

const activeCategoryData = computed(() =>
  categories.find((c) => c.key == activeCategory.value),
);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
  activeCategory.value = null;
}

function closeMenu() {
  isMenuOpen.value = false;
  //   activeCategory.value = null;
}

function openCategory(key) {
  activeCategory.value = key;
}

onMounted(() => {
  const handleEscape = (event) => {
    if (event.key === "Escape" && isMenuOpen) {
      closeMenu();
    }
  };

  document.addEventListener("keydown", handleEscape);

  onUnmounted(() => {
    document.removeEventListener("keydown", handleEscape);
  });
});
</script>

<style scoped>
/* Pathways right menu  */

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
.slide-fade-enter-to,
.slide-fade-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
