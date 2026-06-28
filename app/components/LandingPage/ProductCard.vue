<template>
  <article class="group text-center font-poppins text-[#373737]">
    <NuxtLink
      :to="to"
      class="block overflow-hidden rounded-[2px] bg-[#C2EFD4] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#224F34]"
      :aria-label="`Ver ${name}`"
    >
      <NuxtImg
        v-if="!hasImageError"
        :src="image"
        :alt="imageAlt || name"
        :width="compact ? 318 : 430"
        :height="compact ? 378 : 566"
        :sizes="compact ? '50vw sm:33vw lg:25vw xl:318px' : '100vw sm:50vw lg:33vw xl:430px'"
        :class="[
          compact ? 'aspect-[318/378]' : 'aspect-[430/566]',
          'w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]',
        ]"
        @error="hasImageError = true"
      />
      <div
        v-else
        :class="[
          compact ? 'aspect-[318/378]' : 'aspect-[430/566]',
          'grid place-items-center px-6 text-sm text-[#224F34]/70',
        ]"
        role="img"
        :aria-label="imageAlt || name"
      >
        Image not found: {{ image }}
      </div>
    </NuxtLink>

    <h3 :class="compact ? 'mt-4 text-xs font-semibold sm:text-sm' : 'mt-5 text-sm font-semibold sm:text-base'">
      <NuxtLink :to="to" class="rounded-sm hover:text-[#224F34] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#224F34]">
        {{ name }}
      </NuxtLink>
    </h3>

    <div :class="compact ? 'mt-2 flex items-center justify-center text-xs sm:text-sm' : 'mt-2 flex items-center justify-center text-sm sm:text-base'">
      <span>{{ formattedPrice }}</span>
      <span
        aria-hidden="true"
        :class="compact ? 'mx-3 h-4 w-px bg-[#454545]/55' : 'mx-5 h-5 w-px bg-[#454545]/55'"
      />
      <span class="inline-flex items-center gap-1">
        <span>{{ formattedRating }}</span>
        <span class="text-lg leading-none text-[#F5D426]" aria-hidden="true">&#9733;</span>
        <span class="sr-only">out of 5 stars</span>
      </span>
    </div>
  </article>
</template>

<script setup lang="ts">
interface ProductCardProps {
  name: string
  image: string
  price: number
  rating: number
  to?: string
  imageAlt?: string
  currency?: string
  locale?: string
  compact?: boolean
}

const props = withDefaults(defineProps<ProductCardProps>(), {
  to: '#',
  imageAlt: '',
  currency: 'USD',
  locale: 'en-US',
  compact: false,
})

const hasImageError = ref(false)

const formattedPrice = computed(() =>
  new Intl.NumberFormat(props.locale, {
    style: 'currency',
    currency: props.currency,
  }).format(props.price),
)

const formattedRating = computed(() => props.rating.toFixed(1))
</script>
