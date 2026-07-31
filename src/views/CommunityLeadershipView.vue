<template>
  <v-container class="pa-8">
    <h1 class="text-display-large text-white text-center my-16">
      Community Leadership, Media &amp; Advocacy
    </h1>

    <v-row justify="center">
      <v-col cols="12" md="10" lg="9">
        <h2 class="text-headline-small text-primary font-weight-bold mb-4">
          Caring for Children Beyond the Exam Room
        </h2>
        <p class="body-text text-body-large text-white mb-4">
          At <strong>South Royalton Health Center</strong>, we believe caring for
          children and families extends beyond the walls of our office. Our commitment
          to improving children's health includes caring for individual families,
          supporting <router-link to="/school-visits">schools</router-link>, educating
          future clinicians, advocating for better healthcare policies, and contributing
          to conversations that strengthen pediatric care across Vermont.
        </p>
        <p class="body-text text-body-large text-white">
          <router-link to="/meet-our-providers-staff">Dr. Ashley</router-link> is
          honored to work alongside families, educators, healthcare professionals, and
          community organizations to improve the health and well-being of children
          throughout the Upper Valley and Vermont.
        </p>

        <!-- Media & News -->
        <h2 class="text-headline-small text-primary font-weight-bold mt-12 mb-4">
          Media &amp; News
        </h2>
        <p class="body-text text-body-large text-white mb-6">
          Dr. Ashley has been invited to share her expertise on pediatric health, mental
          health, vaccines, primary care, and healthcare policy through respected
          Vermont news organizations.
        </p>

        <article v-for="story in mediaStories" :key="story.href" class="citation mb-8">
          <h3 class="text-title-large text-primary font-weight-bold mb-2">
            {{ story.topic }}
          </h3>
          <p class="body-text text-body-large text-white mb-3">
            {{ story.summary }}
          </p>
          <external-link
            block
            :href="story.href"
            :label="story.label"
            :publication="story.publication"
            :date="story.date"
          />
        </article>

        <!-- Professional Leadership -->
        <h2 class="text-headline-small text-primary font-weight-bold mt-12 mb-4">
          Professional Leadership
        </h2>
        <p class="body-text text-body-large text-white mb-6">
          Dr. Ashley is committed to strengthening pediatric healthcare throughout
          Vermont through leadership, advocacy, and collaboration with professional
          organizations.
        </p>

        <article
          v-for="group in professionalLeadership"
          :key="group.heading"
          class="citation mb-8"
        >
          <h3 class="text-title-large text-primary font-weight-bold mb-2">
            {{ group.heading }}
          </h3>
          <p class="body-text text-body-large text-white mb-3">{{ group.summary }}</p>
          <external-link
            v-for="link in group.links"
            :key="link.href"
            block
            class="mb-2"
            :href="link.href"
            :label="link.label"
            :publication="link.publication"
          />
        </article>

        <!-- Medical Education -->
        <h2 class="text-headline-small text-primary font-weight-bold mt-12 mb-4">
          Medical Education
        </h2>
        <p class="body-text text-body-large text-white mb-3">
          South Royalton Health Center is committed to training the next generation of
          physicians.
        </p>
        <p class="body-text text-body-large text-white mb-3">
          Dr. Ashley serves as clinical faculty with the Geisel School of Medicine at
          Dartmouth, helping educate future physicians while bringing the latest
          evidence-based medicine back to the children and families cared for at South
          Royalton Health Center.
        </p>
        <external-link
          block
          href="https://geiselmed.dartmouth.edu/students/profile/ashley-miller-md-2/"
          label="Ashley Miller, MD — Geisel School of Medicine Faculty Profile"
          publication="Geisel School of Medicine at Dartmouth"
        />

        <!-- Community Leadership -->
        <h2 class="text-headline-small text-primary font-weight-bold mt-12 mb-4">
          Community Leadership
        </h2>
        <p class="body-text text-body-large text-white mb-3">
          Improving children's health requires strong partnerships throughout the
          community.
        </p>
        <p class="body-text text-body-large text-white mb-6">
          Dr. Ashley has collaborated with organizations dedicated to improving child
          health, school readiness, family well-being, and access to healthcare across
          Vermont.
        </p>

        <article
          v-for="group in communityLeadership"
          :key="group.heading"
          class="citation mb-8"
        >
          <h3 class="text-title-large text-primary font-weight-bold mb-2">
            {{ group.heading }}
          </h3>
          <p class="body-text text-body-large text-white mb-3">{{ group.summary }}</p>
          <external-link
            block
            :href="group.href"
            :label="group.label"
            :publication="group.publication"
          />
        </article>

        <!-- Our Commitment -->
        <h2 class="text-headline-small text-primary font-weight-bold mt-12 mb-4">
          Our Commitment
        </h2>
        <p class="body-text text-body-large text-white">
          Our work in the community reflects the same values we bring into every patient
          visit:
        </p>

        <icon-list :items="commitments" />

        <p class="body-text text-body-large text-white mt-4">
          Whether caring for a newborn, supporting a family through an ADHD diagnosis,
          speaking on behalf of Vermont children, or helping train tomorrow's
          physicians, our goal remains the same:
        </p>
        <p class="body-text text-headline-small text-white text-center my-8">
          <strong>Helping every child thrive.</strong>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import IconList from "@/components/IconList.vue";
import ExternalLink from "@/components/ExternalLink.vue";
import { useSeo } from "@/composables/useSeo";
import { physicianSchema } from "@/config/schema";

const mediaStories = [
  {
    topic: "Mental Health & Primary Care",
    summary:
      "Dr. Ashley discusses the growing pediatric mental health crisis and the important role primary care clinicians play in supporting children and families.",
    label: "Mental Health Crisis Is Overwhelming Our Primary Care System – VTDigger",
    publication: "VTDigger",
    date: "2022-03-21",
    href: "https://vtdigger.org/2022/03/21/dr-ashley-miller-mental-health-crisis-is-overwhelming-our-primary-care-system/",
  },
  {
    topic: "Vaccines & Public Health",
    summary:
      "Dr. Ashley shares the importance of evidence-based vaccine recommendations and the continued impact of vaccine misinformation on children and families.",
    label:
      "Vermont Rejected Federal Vaccine Rollbacks, But Doctors Are Still Seeing Their Impact – VTDigger",
    publication: "VTDigger",
    date: "2026-05-18",
    href: "https://vtdigger.org/2026/05/18/vermont-rejected-the-federal-governments-vaccine-rollbacks-but-doctors-are-still-seeing-their-impact/",
  },
  {
    topic: "Childhood Obesity & Lifestyle Medicine",
    summary:
      "Dr. Ashley discusses improving access to comprehensive treatment for childhood obesity while emphasizing the importance of healthy lifestyle habits and individualized care.",
    label:
      "Some Doctors Want Vermont to Require Insurers to Cover Weight-Loss Drugs Like Ozempic – Vermont Public",
    publication: "Vermont Public",
    date: "2024-01-31",
    href: "https://www.vermontpublic.org/local-news/2024-01-31/some-doctors-want-vermont-to-require-insurers-to-cover-weight-loss-drugs-like-ozempic",
  },
];

const professionalLeadership = [
  {
    heading: "Vermont Medical Society",
    summary:
      "Dr. Ashley has been recognized by the Vermont Medical Society and actively advocates for strengthening primary care and improving healthcare access for Vermont families.",
    links: [
      {
        label: "Ashley Miller – Vermont Medical Society",
        publication: "Vermont Medical Society",
        href: "https://vtmd.org/ashley-miller",
      },
      {
        label: "Let's Make Primary Care a Vermont Priority – Vermont Medical Society",
        publication: "Vermont Medical Society",
        href: "https://vtmd.org/lets-make-primary-care-a-vermont-priority/",
      },
    ],
  },
  {
    heading: "Vermont Chapter, American Academy of Pediatrics",
    summary:
      "Dr. Ashley has participated in statewide educational initiatives supporting children and families, including public forums addressing COVID-19 vaccination and pediatric health.",
    links: [
      {
        label:
          "AAP Vermont Holds Family Forums on the COVID-19 Vaccine for Adolescents",
        publication: "American Academy of Pediatrics, Vermont Chapter",
        href: "https://www.aapvt.org/news/aapvt-holds-family-forums-covid-19-vaccine-adolescents",
      },
    ],
  },
];

const communityLeadership = [
  {
    heading: "Building Bright Futures",
    summary:
      "Dr. Ashley serves alongside statewide leaders working to improve outcomes for Vermont children.",
    label:
      "March State Advisory Council Recap: Welcoming New Members – Building Bright Futures",
    publication: "Building Bright Futures",
    href: "https://www.buildingbrightfutures.org/march-sac-recap-welcoming-new-members/",
  },
  {
    heading: "Community Recognition",
    summary:
      "A feature highlighting Dr. Ashley's commitment to providing personalized pediatric care in the Upper Valley.",
    label: "There Is a Doctor in the House – The Herald of Randolph",
    publication: "The Herald of Randolph",
    href: "https://www.ourherald.com/articles/there-is-a-doctor-in-the-house/",
  },
];

const commitments = [
  "Compassionate, relationship-based care",
  "Evidence-based pediatric medicine",
  "Advocacy for children and families",
  "Support for mental health",
  "Collaboration with schools and community partners",
  "Education and lifelong learning",
  "Improving healthcare for future generations",
];

useSeo({
  title: "Community Leadership & Media | South Royalton Health Center",
  description:
    "Learn about Dr. Ashley Miller's leadership in pediatric medicine, community advocacy, medical education, and media contributions supporting children and families throughout Vermont and the Upper Valley.",
  schema: [physicianSchema()],
});
</script>

<style scoped>
.citation {
  border-left: 3px solid #4e6c50;
  padding-left: 1rem;
}

a:not(.v-btn) {
  color: #f0ebce;
}

a:not(.v-btn):hover {
  color: #4e6c50;
}

a:not(.v-btn):focus {
  color: sandybrown;
}
</style>
