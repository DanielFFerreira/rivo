<template>
  <section id="products" class="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
    <div class="mx-auto max-w-[1380px]">
      <header class="text-center text-[#224F34]">
        <h2 class="font-rufina text-4xl font-bold sm:text-5xl">Our products</h2>

        <div
          class="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 font-poppins sm:mt-10 sm:gap-x-12 lg:gap-x-16"
          role="group"
          aria-label="Filter products by category"
        >
          <button
            v-for="category in categories"
            :key="category.value"
            type="button"
            :aria-pressed="activeCategory === category.value"
            :class="[
              'border-b px-1 py-2 text-xs font-medium uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#224F34] sm:text-sm',
              activeCategory === category.value
                ? 'border-[#224F34] text-[#224F34]'
                : 'border-transparent text-[#373737] hover:text-[#224F34]',
            ]"
            @click="activeCategory = category.value"
          >
            {{ category.label }}
          </button>
        </div>
      </header>

      <div
        v-if="filteredProducts.length"
        class="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:mt-12 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-14"
      >
        <LandingPageProductCard
          v-for="product in filteredProducts"
          :key="product.name"
          :name="product.name"
          :image="product.image"
          :image-alt="product.imageAlt"
          :price="product.price"
          :rating="product.rating"
          :to="product.to"
          compact
        />
      </div>

      <p v-else class="mt-14 text-center font-poppins text-sm text-[#373737]/70">
        No products are available in this category yet.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
type ProductCategory = 'sale' | 'hot' | 'new-arrivals'

interface CategoryOption {
  label: string
  value: ProductCategory
}

interface CatalogProduct {
  name: string
  image: string
  imageAlt: string
  price: number
  rating: number
  to: string
  categories: ProductCategory[]
}

const categories: CategoryOption[] = [
  { label: 'Sale', value: 'sale' },
  { label: 'Hot', value: 'hot' },
  { label: 'New arrivals', value: 'new-arrivals' },
]

const products: CatalogProduct[] = [
  {
    name: 'Spread Collar Shirt',
    image: '/products/catalog/product-1.png',
    imageAlt: 'Model wearing a blue spread collar shirt',
    price: 48.99,
    rating: 5,
    to: '/products/spread-collar-shirt',
    categories: ['hot', 'new-arrivals'],
  },
  {
    name: 'White Solid Formal Shirt',
    image: '/products/catalog/product-2.png',
    imageAlt: 'Model wearing a white solid formal shirt',
    price: 39,
    rating: 4.9,
    to: '/products/white-solid-formal-shirt',
    categories: ['hot', 'sale'],
  },
  {
    name: 'Shine On Me Blouse',
    image: '/products/catalog/product-3.png',
    imageAlt: 'Model wearing a striped blouse',
    price: 42.99,
    rating: 4.8,
    to: '/products/shine-on-me-blouse',
    categories: ['hot', 'new-arrivals'],
  },
  {
    name: 'Gray Solid Padded Jacket',
    image: '/products/catalog/product-4.png',
    imageAlt: 'Model wearing a gray padded jacket',
    price: 32.99,
    rating: 4.7,
    to: '/products/gray-solid-padded-jacket',
    categories: ['hot', 'sale'],
  },
  {
    name: 'Printed Loose T-shirt',
    image: '/products/catalog/product-5.png',
    imageAlt: 'Model wearing a black printed loose T-shirt',
    price: 39.99,
    rating: 5,
    to: '/products/printed-loose-t-shirt',
    categories: ['hot', 'sale'],
  },
  {
    name: 'Summer Wind Crop Shirt',
    image: '/products/catalog/product-6.png',
    imageAlt: 'Model wearing a blue summer crop shirt',
    price: 39.95,
    rating: 4.7,
    to: '/products/summer-wind-crop-shirt',
    categories: ['hot', 'new-arrivals'],
  },
  {
    name: 'Tailored Jacket',
    image: '/products/catalog/product-7.png',
    imageAlt: 'Model wearing a beige tailored jacket',
    price: 46,
    rating: 4.9,
    to: '/products/tailored-jacket',
    categories: ['hot', 'new-arrivals'],
  },
  {
    name: 'Solid Round Neck T-shirt',
    image: '/products/catalog/product-8.png',
    imageAlt: 'Model wearing a brown solid round neck T-shirt',
    price: 36,
    rating: 5,
    to: '/products/solid-round-neck-t-shirt',
    categories: ['hot', 'sale'],
  },
]

const activeCategory = ref<ProductCategory>('hot')

const filteredProducts = computed(() =>
  products.filter(product => product.categories.includes(activeCategory.value)),
)
</script>
