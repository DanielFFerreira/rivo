<template>
  <section class="bg-[#C2EFD4] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24 xl:pb-36">
    <div
      class="mx-auto flex max-w-[1380px] flex-col items-center justify-between gap-14 lg:flex-row lg:gap-10 xl:gap-20"
    >
      <div class="flex max-w-[650px] flex-col items-center text-center lg:w-[52%] lg:items-start lg:text-left">
        <h1
          class="font-rufina text-4xl leading-[1.2] font-bold text-[#224F34] sm:text-5xl lg:text-6xl xl:text-[86px]"
        >
          {{ content.title }}
        </h1>

        <p
          class="mt-6 max-w-[565px] font-slab text-lg leading-8 text-[#267D49] sm:mt-8 sm:text-xl sm:leading-9 xl:text-2xl xl:leading-10"
        >
          {{ content.description }}
        </p>

        <NuxtLink
          :to="content.ctaTo"
          class="mt-8 inline-flex h-14 min-w-52 items-center justify-center rounded-[3px] bg-[#224F34] px-8 font-poppins text-lg font-medium text-white shadow-lg shadow-[#224F34]/20 transition-transform hover:-translate-y-0.5 hover:bg-[#1a3d29] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#224F34] sm:mt-10 lg:h-[74px] lg:min-w-[258px] lg:text-xl"
        >
          {{ content.ctaLabel }}
        </NuxtLink>
      </div>

      <div class="relative w-full max-w-[570px] lg:w-[43%] xl:w-[570px] xl:shrink-0">
        <NuxtImg
          src="/hero/card-direito.png"
          alt="Modelo vestindo uma composição de moda verde"
          width="570"
          height="717"
          sizes="100vw sm:570px"
          class="relative z-10 block h-auto w-full"
        />

        <NuxtImg
          src="/hero/grid-ball1.png"
          alt=""
          width="119"
          height="110"
          aria-hidden="true"
          class="absolute bottom-[12%] left-[5%] z-20 w-[21%]"
        />

        <NuxtImg
          src="/hero/grid-ball12.png"
          alt=""
          width="119"
          height="110"
          aria-hidden="true"
          class="absolute top-[22%] right-0 z-20 w-[21%]"
        />
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
interface HeroContent {
  title: string
  description: string
  ctaLabel: string
  ctaTo: string
}

const content: HeroContent = {
  title: 'Discover and Find Your Own Fashion!',
  description: 'Explore our curated collection of stylish clothing and accessories tailored to your unique taste.',
  ctaLabel: 'Explore Now',
  ctaTo: '#shop',
}
</script>
