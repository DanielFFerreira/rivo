<template>
  <section class="bg-[#224F34] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
    <div class="mx-auto max-w-[1380px]">
      <div class="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">

        <div class="max-w-xl">
          <h2 class="font-rufina text-4xl font-bold text-white sm:text-5xl">
            Subscribe to our newsletter
          </h2>
          <p class="mt-5 font-poppins text-base leading-7 text-white/70 sm:text-lg">
            Get the latest updates on new arrivals and exclusive offers delivered straight to your inbox.
          </p>
        </div>

        <form
          class="flex w-full max-w-xl flex-col gap-3 sm:flex-row"
          @submit.prevent="handleSubmit"
        >
          <label for="newsletter-email" class="sr-only">Email address</label>
          <input
            id="newsletter-email"
            v-model="email"
            type="email"
            placeholder="Enter your email address"
            required
            class="h-14 flex-1 rounded bg-white/10 px-5 font-poppins text-sm text-white placeholder:text-white/40 outline-none ring-1 ring-white/20 transition focus:ring-2 focus:ring-white/60"
          />
          <button
            type="submit"
            class="h-14 shrink-0 rounded bg-[#C2EFD4] px-8 font-poppins text-sm font-semibold text-[#224F34] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Subscribe
          </button>
        </form>

      </div>

      <p
        v-if="submitted"
        role="status"
        class="mt-6 font-poppins text-sm text-[#C2EFD4]"
      >
        Thank you! You're now subscribed.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const email = ref('')
const submitted = ref(false)

const handleSubmit = () => {
  submitted.value = true
  email.value = ''
}
</script>
