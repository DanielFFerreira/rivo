<template>
  <footer class="bg-[#1a3d29] px-4 pt-16 pb-8 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
    <div class="mx-auto max-w-[1380px]">

      <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">

        <div>
          <NuxtLink to="/" aria-label="Go to homepage">
            <NuxtImg
              src="/logo/rivo.png"
              alt="Rivo"
              class="h-auto w-[68px] brightness-0 invert sm:w-[80px]"
            />
          </NuxtLink>
          <p class="mt-5 max-w-xs font-poppins text-sm leading-6 text-white/60">
            Discover fashion that speaks your style. Quality clothing crafted for those who dare to be different.
          </p>
          <div class="mt-6 flex gap-4">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              :aria-label="social.label"
              class="grid size-9 place-items-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-[#C2EFD4] hover:text-[#224F34] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" class="size-4" aria-hidden="true">
                <path :d="social.icon" />
              </svg>
            </a>
          </div>
        </div>

        <div v-for="col in columns" :key="col.heading">
          <h3 class="font-poppins text-sm font-semibold uppercase tracking-wider text-white">
            {{ col.heading }}
          </h3>
          <ul class="mt-5 space-y-3">
            <li v-for="link in col.links" :key="link.label">
              <NuxtLink
                :to="link.to"
                class="font-poppins text-sm text-white/60 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

      </div>

      <div class="mt-16 border-t border-white/10 pt-8">
        <p class="text-center font-poppins text-xs text-white/40">
          &copy; {{ year }} Rivo. All rights reserved.
        </p>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()

const socials = [
  {
    label: 'Instagram',
    href: '#',
    icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    label: 'Facebook',
    href: '#',
    icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    label: 'Pinterest',
    href: '#',
    icon: 'M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z',
  },
]

const columns = [
  {
    heading: 'Shop',
    links: [
      { label: 'New Arrivals', to: '#products' },
      { label: 'Best Selling', to: '#shop' },
      { label: 'Sale', to: '#products' },
      { label: 'All Products', to: '#products' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', to: '#' },
      { label: 'Our Story', to: '#' },
      { label: 'Careers', to: '#' },
      { label: 'Press', to: '#' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'FAQ', to: '#' },
      { label: 'Returns', to: '#' },
      { label: 'Size Guide', to: '#' },
      { label: 'Contact Us', to: '#contact' },
    ],
  },
]
</script>