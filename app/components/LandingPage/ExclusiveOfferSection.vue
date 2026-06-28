<template>
  <section class="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
    <div class="mx-auto max-w-[1377px]">
      <div class="overflow-hidden rounded-2xl bg-[#C2EFD4] lg:h-149">
        <div class="flex flex-col lg:flex-row lg:h-full">

          <div class="relative w-full lg:w-[45%] xl:w-[42%] lg:h-full">
            <NuxtImg
              src="/offer/model.png"
              alt="Model wearing a green fashion outfit"
              width="560"
              height="596"
              sizes="100vw lg:45vw xl:560px"
              class="h-full w-full object-cover object-top"
            />
            <div class="absolute bottom-6 left-6 grid grid-cols-5 gap-2" aria-hidden="true">
              <span v-for="i in 25" :key="i" class="block size-2 rounded-full bg-[#224F34]/25" />
            </div>
          </div>

          <div class="flex flex-1 flex-col justify-center px-8 py-12 lg:px-12 lg:py-16 xl:px-16">
            <h2 class="font-rufina text-4xl font-bold text-[#224F34] sm:text-5xl">
              Exclusive offer
            </h2>
            <p class="mt-5 max-w-md font-poppins text-base leading-7 text-[#267D49] sm:text-lg sm:leading-8">
              Unlock the ultimate style upgrade with our exclusive offer. Enjoy savings of up to 40% off on our latest New Arrivals.
            </p>

            <div class="mt-8 flex gap-3 sm:gap-4">
              <div
                v-for="unit in countdown"
                :key="unit.label"
                class="flex min-w-[68px] flex-col items-center rounded border border-[#224F34]/25 bg-white/70 px-4 py-3 sm:min-w-[80px]"
              >
                <span class="font-poppins text-2xl font-bold leading-none text-[#224F34] tabular-nums sm:text-3xl">
                  {{ unit.value }}
                </span>
                <span class="mt-1.5 font-poppins text-xs text-[#267D49] sm:text-sm">
                  {{ unit.label }}
                </span>
              </div>
            </div>

            <NuxtLink
              to="#shop"
              class="mt-10 flex h-14 w-full items-center justify-center bg-[#224F34] font-poppins text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-[#1a3d29] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#224F34]"
            >
              Buy Now
            </NuxtLink>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const OFFER_DEADLINE = new Date('2026-07-05T23:59:59')

const getTimeLeft = () => {
  const diff = OFFER_DEADLINE.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
  }
}

const timeLeft = ref({ days: 0, hours: 0, minutes: 0 })

const countdown = computed(() => [
  { value: String(timeLeft.value.days).padStart(2, '0'), label: 'Days' },
  { value: String(timeLeft.value.hours).padStart(2, '0'), label: 'Hours' },
  { value: String(timeLeft.value.minutes).padStart(2, '0'), label: 'Min' },
])

let timer: ReturnType<typeof setInterval>

onMounted(() => {
  timeLeft.value = getTimeLeft()
  timer = setInterval(() => {
    timeLeft.value = getTimeLeft()
  }, 60_000)
})

onUnmounted(() => clearInterval(timer))
</script>
