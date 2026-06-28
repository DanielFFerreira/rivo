<template>
  <section id="shop" class="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
    <div class="mx-auto max-w-[1380px]">
      <header class="text-center text-[#224F34]">
        <h2 class="font-rufina text-4xl font-bold sm:text-5xl">Best selling</h2>
        <p class="mt-5 font-poppins text-sm sm:text-base">
          Get in on the trend with our curated selection of best-selling styles.
        </p>
      </header>

      <div class="mt-12 grid gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
        <LandingPageProductCard
          v-for="product in products"
          :key="product.name"
          v-bind="product"
        />
      </div>

      <div class="mt-12 text-center lg:mt-16">
        <NuxtLink
          to="#products"
          class="inline-flex min-h-12 min-w-40 items-center justify-center gap-3 border border-[#224F34] px-6 font-poppins text-sm font-medium text-[#224F34] transition-colors hover:bg-[#224F34] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#224F34] sm:text-base"
        >
          See all
          <span aria-hidden="true">&rarr;</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Product {
  name: string
  image: string
  imageAlt: string
  price: number
  rating: number
  to: string
}

const products: Product[] = [
  {
    name: 'Regular Fit Long Sleeve Top',
    image: '/products/best-selling-1.png',
    imageAlt: 'Model wearing a beige long-sleeve top',
    price: 38.99,
    rating: 5,
    to: '/products/',
  },
  {
    name: 'Black Crop Tailored Jacket',
    image: '/products/best-selling-2.png',
    imageAlt: 'Model wearing a black cropped tailored jacket',
    price: 62.99,
    rating: 4.9,
    to: '/products/black-crop-tailored-jacket',
  },
  {
    name: 'Textured Sunset Shirt',
    image: '/products/best-selling-3.png',
    imageAlt: 'Model wearing a white textured shirt',
    price: 49.99,
    rating: 5,
    to: '/products/textured-sunset-shirt',
  },
]
</script>
