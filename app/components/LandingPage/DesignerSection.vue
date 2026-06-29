<template>
  <section class="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
    <div class="mx-auto max-w-[1380px]">

      <header class="text-center">
        <h2 class="font-rufina text-4xl font-bold text-[#224F34] sm:text-5xl">
          Designer Clothes For You
        </h2>
        <p class="mx-auto mt-5 max-w-2xl font-poppins text-base leading-7 text-[#267D49] sm:text-lg">
          Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes.
        </p>
      </header>

      <div class="mt-12 grid gap-8 sm:grid-cols-3 lg:mt-16 lg:gap-10">
        <article v-for="category in categories" :key="category.name" class="group">
          <NuxtLink
            :to="category.to"
            class="block overflow-hidden rounded-sm bg-[#C2EFD4] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#224F34]"
            :aria-label="`Explore ${category.name}`"
          >
            <NuxtImg
              v-if="!category.imageError"
              :src="category.image"
              :alt="category.imageAlt"
              width="430"
              height="520"
              sizes="100vw sm:33vw xl:430px"
              class="aspect-[430/520] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              @error="category.imageError = true"
            />
            <div
              v-else
              class="aspect-[430/520] grid place-items-center text-sm text-[#224F34]/60"
              role="img"
              :aria-label="category.imageAlt"
            >
              {{ category.name }}
            </div>
          </NuxtLink>

          <h3 class="mt-5 font-poppins text-lg font-bold">
            <NuxtLink
              :to="category.to"
              class="text-[#224F34] transition-colors hover:text-[#267D49] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#224F34]"
            >
              {{ category.name }}
            </NuxtLink>
          </h3>
          <p class="mt-2 font-poppins text-sm leading-6 text-[#373737]">
            {{ category.description }}
          </p>
        </article>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
interface Category {
  name: string
  image: string
  imageAlt: string
  description: string
  to: string
  imageError: boolean
}

const categories = reactive<Category[]>([
  {
    name: 'Accessories',
    image: '/categories/accessories.png',
    imageAlt: 'Model wearing designer accessories including handbag and hat',
    description: 'Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats.',
    to: '#products',
    imageError: false,
  },
  {
    name: 'Dresses',
    image: '/categories/dresses.png',
    imageAlt: 'Model wearing a stunning designer dress',
    description: 'Explore a stunning range of designer dresses, including evening gowns and chic day dresses.',
    to: '#products',
    imageError: false,
  },
  {
    name: 'Outerwear',
    image: '/categories/outerwear.png',
    imageAlt: 'Model wearing a luxurious designer coat',
    description: 'Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons.',
    to: '#products',
    imageError: false,
  },
])
</script>
