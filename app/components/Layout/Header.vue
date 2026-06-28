<template>
  <header class="bg-[#C2EFD4]">
    <div
      class=" px-4 py-4 sm:px-6 sm:py-5 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-8 lg:py-6"
    >
      <NuxtLink to="/" aria-label="Go to homepage" class="justify-self-start">
        <NuxtImg
          src="/logo/rivo.png"
          alt="Rivo"
          class="h-auto w-[68px] object-contain sm:w-[80px]"
        />
      </NuxtLink>

      <nav aria-label="Main navigation" class="hidden lg:block">
        <ul class="flex items-center gap-8 text-sm font-semibold text-[#224F34] xl:gap-12">
          <li v-for="item in links" :key="item.to">
            <NuxtLink
              :to="item.to"
              class="border-b-2 border-transparent py-2 uppercase transition-colors hover:border-[#224F34]"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="flex items-center justify-end gap-2 sm:gap-4 lg:gap-6 xl:gap-10">
        <NuxtImg
          src="/icon/icon-sacola.png"
          alt=""
          class="block size-7 object-contain sm:size-8"
        />

        <button
          type="button"
          class="hidden h-11 min-w-24 rounded border border-[#224F34] bg-transparent px-5 font-semibold text-[#224F34] transition-colors hover:bg-[#224F34] hover:text-white sm:block lg:h-[52px] lg:min-w-[120px] xl:min-w-[142px] cursor-pointer"
        >
          Login
        </button>

        <button
          type="button"
          class="grid size-10 place-items-center rounded-md text-[#224F34] transition-colors hover:bg-[#224F34]/10 lg:hidden"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-menu"
          :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
          @click="isMenuOpen = !isMenuOpen"
        >
          <svg v-if="!isMenuOpen" viewBox="0 0 24 24" fill="none" class="size-7" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
          <svg v-else viewBox="0 0 24 24" fill="none" class="size-7" aria-hidden="true">
            <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>
      </div>
    </div>

    <nav
      v-show="isMenuOpen"
      id="mobile-menu"
      aria-label="Mobile navigation"
      class="border-t border-[#224F34]/15 px-4 pb-5 pt-2 sm:px-6 lg:hidden"
    >
      <ul class="mx-auto flex max-w-7xl flex-col text-sm font-semibold text-[#224F34]">
        <li v-for="item in links" :key="item.to">
          <NuxtLink
            :to="item.to"
            class="block rounded-md px-3 py-3 uppercase transition-colors hover:bg-[#224F34]/10"
            @click="isMenuOpen = false"
          >
            {{ item.label }}
          </NuxtLink>
        </li>
        <li class="mt-2 sm:hidden">
          <button
            type="button"
            class="h-11 w-full rounded border border-[#224F34] font-semibold transition-colors hover:bg-[#224F34] hover:text-white"
          >
            Login
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>


<script setup lang="ts">
interface NavLink {
  label: string
  to: string
}

const isMenuOpen = ref(false)

const links: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '#shop' },
]
</script>
