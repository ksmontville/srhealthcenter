<template>
  <disclosure-group>
    <disclosure-panel
      v-for="item in items"
      :key="item.id"
      :title="item.question"
      :name="single ? group : undefined"
    >
      <div class="faq-answer">
        <p v-for="(para, i) in paragraphs(item.answer)" :key="i" class="body-text">
          {{ para }}
        </p>

        <ul v-if="item.bullets" class="faq-bullets">
          <li v-for="bullet in item.bullets" :key="bullet">{{ bullet }}</li>
        </ul>

        <p v-if="item.closing" class="body-text faq-closing">{{ item.closing }}</p>

        <p v-if="item.links?.length" class="faq-links">
          <template v-for="(link, i) in item.links" :key="link.label">
            <router-link v-if="link.to" :to="link.to">{{ link.label }}</router-link>
            <a v-else :href="link.href" v-bind="externalAttrs(link)">{{ link.label }}</a>
            <span v-if="i < item.links.length - 1" class="faq-link-sep"> · </span>
          </template>
        </p>
      </div>
    </disclosure-panel>
  </disclosure-group>
</template>

<script setup>
import DisclosureGroup from "@/components/DisclosureGroup.vue";
import DisclosurePanel from "@/components/DisclosurePanel.vue";

defineProps({
  items: { type: Array, required: true },
  // Exclusive accordion (only one open at a time) via the native `name` attribute.
  single: { type: Boolean, default: false },
  group: { type: String, default: "faq" },
});

// Answers are authored as plain text so the exact string can be reused verbatim in
// FAQPage JSON-LD. Blank lines separate paragraphs.
const paragraphs = (answer) =>
  answer.split("\n\n").map((p) => p.trim()).filter(Boolean);

const externalAttrs = (link) =>
  link.href?.startsWith("http")
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
</script>

<style scoped>
.faq-answer p + p {
  margin-top: 0.75rem;
}

.faq-bullets {
  margin: 0.75rem 0 0 1.5rem;
}

.faq-closing {
  margin-top: 0.75rem;
}

.faq-links {
  margin-top: 1rem;
}

.faq-answer a {
  color: #f0ebce;
}

.faq-answer a:hover {
  color: #aa8b56;
}

.faq-answer a:focus {
  color: sandybrown;
}

.faq-link-sep {
  color: rgba(255, 255, 255, 0.5);
}
</style>
