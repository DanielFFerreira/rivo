<template>
  <section class="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
    <div class="mx-auto max-w-[1380px]">

      <h2 class="text-center font-rufina text-4xl font-bold text-[#224F34] sm:text-5xl">
        Feedback Corner
      </h2>

      <div class="relative mt-12 lg:mt-16">
        <!-- Grid — desktop mostra 3, mobile mostra 1 via overflow -->
        <div
          class="grid gap-6 sm:grid-cols-3"
          role="list"
          aria-label="Customer testimonials"
        >
          <article
            v-for="(review, index) in visibleReviews"
            :key="review.name"
            class="rounded-sm border border-[#224F34]/15 p-7 transition-shadow hover:shadow-md"
            role="listitem"
          >
            <span
              class="inline-flex size-9 items-center justify-center rounded-full bg-[#C2EFD4] font-rufina text-xl font-bold text-[#224F34]"
              aria-hidden="true"
            >
              ❝
            </span>

            <h3 class="mt-4 font-poppins text-base font-bold text-[#224F34]">
              {{ review.name }}
            </h3>

            <div class="mt-1 flex gap-0.5" :aria-label="`${review.rating} out of 5 stars`">
              <span
                v-for="i in 5"
                :key="i"
                :class="i <= review.rating ? 'text-[#F5D426]' : 'text-[#373737]/20'"
                aria-hidden="true"
                class="text-base leading-none"
              >★</span>
            </div>

            <p class="mt-3 font-poppins text-sm leading-6 text-[#373737]">
              {{ review.text }}
            </p>
          </article>
        </div>

        <!-- Navegação -->
        <div class="mt-10 flex items-center justify-end gap-3">
          <span class="font-poppins text-xs text-[#373737]/50">
            {{ currentPage + 1 }} / {{ totalPages }}
          </span>
          <button
            type="button"
            class="grid size-9 place-items-center rounded border border-[#224F34]/25 text-[#224F34] transition-colors hover:bg-[#224F34] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#224F34]"
            :disabled="currentPage === 0"
            aria-label="Previous testimonials"
            @click="prev"
          >
            ‹
          </button>
          <button
            type="button"
            class="grid size-9 place-items-center rounded border border-[#224F34]/25 text-[#224F34] transition-colors hover:bg-[#224F34] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#224F34]"
            :disabled="currentPage === totalPages - 1"
            aria-label="Next testimonials"
            @click="next"
          >
            ›
          </button>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
interface Review {
  name: string
  text: string
  rating: number
}

const reviews: Review[] = [
  {
    name: 'Emily Wilson',
    rating: 5,
    text: 'The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I\'m beyond satisfied.',
  },
  {
    name: 'Sarah Thompson',
    rating: 5,
    text: 'I absolutely love the quality and style of the clothing I purchased from this website. Customer service was outstanding, and I received my order quickly. Highly recommended!',
  },
  {
    name: 'Olivia Martinez',
    rating: 4,
    text: 'I had a great experience shopping on this website. The clothes I bought were fashionable and comfortable. Highly satisfied!',
  },
  {
    name: 'James Carter',
    rating: 5,
    text: 'Amazing selection of designer clothes. Found exactly what I was looking for and the quality exceeded my expectations. Will definitely shop here again.',
  },
  {
    name: 'Priya Sharma',
    rating: 5,
    text: 'Fast shipping, beautiful packaging and stunning clothes. The size guide was spot on. This is now my go-to store for fashion.',
  },
  {
    name: 'Lucas Oliveira',
    rating: 4,
    text: 'Great range of outerwear options. The jacket I bought is exactly as described and looks even better in person. Very happy with my purchase.',
  },
]

const PER_PAGE = 3
const currentPage = ref(0)
const totalPages = computed(() => Math.ceil(reviews.length / PER_PAGE))

const visibleReviews = computed(() => {
  const start = currentPage.value * PER_PAGE
  return reviews.slice(start, start + PER_PAGE)
})

const prev = () => { if (currentPage.value > 0) currentPage.value-- }
const next = () => { if (currentPage.value < totalPages.value - 1) currentPage.value++ }
</script>
