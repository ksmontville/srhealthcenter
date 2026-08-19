<template>
  <!--
    A responsive grid rather than a fixed stack. This was sized for a ~300px
    right rail; the same component now serves both the home page strip and the
    full testimonials page, so the cards flow to fill whatever width they get.

    <figure>/<blockquote>/<figcaption> rather than v-card's nested divs: a
    quotation with an attribution is exactly what these elements are for, and it
    gives crawlers the quote-to-author relationship for free.
  -->
  <ul class="testimonial-grid" :style="{ '--min': `${minWidth}px` }">
    <li v-for="testimonial in items" :key="testimonial.id">
      <figure class="testimonial-card bg-panel rounded-lg elevation-8">
        <blockquote class="testimonial-card__text body-text text-body-medium">
          {{ testimonial.text }}
        </blockquote>
        <figcaption class="testimonial-card__by">
          <span class="testimonial-card__name text-title-medium">{{
            testimonial.name
          }}</span>
          <span class="testimonial-card__role text-body-small">{{
            testimonial.role
          }}</span>
        </figcaption>
      </figure>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  /** Testimonials to render — see src/assets/testimonials.js. */
  items: { type: Array, required: true },
  /** Narrowest a card may get before the grid drops a column. */
  minWidth: { type: Number, default: 280 },
});
</script>

<style scoped>
.testimonial-grid {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  /* auto-fit + minmax so the column count follows the space available rather
     than a breakpoint guess — one grid works in a strip and on a full page.
     The inner min() stops the track exceeding the container on narrow phones. */
  grid-template-columns: repeat(auto-fit, minmax(min(var(--min), 100%), 1fr));
  gap: 1.5rem;
}

.testimonial-card {
  height: 100%;
  margin: 0;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-family: "Kalam", Roboto, Arial, sans-serif;
}

.testimonial-card__text {
  margin: 0;
  /* Grows so the attributions line up along the bottom of a row of cards. */
  flex: 1 1 auto;
  line-height: 1.5;
}

.testimonial-card__by {
  display: flex;
  flex-direction: column;
}

.testimonial-card__name {
  font-weight: 700;
}

.testimonial-card__role {
  opacity: 0.75;
}
</style>
