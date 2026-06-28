<template>
  <section class="min-h-screen bg-[#C2EFD4] px-6 py-20 text-[#224F34]">
    <div class="mx-auto flex max-w-4xl flex-col items-center justify-center text-center">
      <p class="text-[70px] font-bold">
        Error {{ error.status }}
      </p>

      <h1 class="mt-4 text-5xl font-bold">
        Oops, something went wrong
      </h1>

      <p class="mt-6 max-w-xl text-lg text-[#267D49]">
        The page you tried to access was not found.
      </p>

      <button
        class="btn mt-10 rounded-[8px] bg-[#224F34] p-[20px] text-white hover:bg-[#267D49]"
        @click="handleError"
      >
        Back to home
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>