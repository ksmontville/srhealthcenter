<template>
  <v-container class="pa-8">
    <h1 class="text-display-large text-white text-center my-16">
      Our Mission &amp; Pediatric Services
    </h1>

    <v-row justify="center">
      <v-col cols="12" md="10" lg="9">
        <section-nav :items="sections" label="Jump to a service" class="mb-10" />

        <!-- Our Mission -->
        <h2
          class="text-headline-small text-heading font-weight-bold mb-4"
          id="our-mission"
        >
          Our Mission
        </h2>
        <p class="body-text text-body-large text-white">
          Our practice works together to build life-long relationships between our staff
          and our families by consistently providing our patients with compassion,
          excellence and value. To fulfill this mission, we are committed to:
        </p>
        <icon-list :items="missionBullets" />
        <p class="body-text text-body-large text-white mt-4">
          One of the reasons we are trusted advisers for parents is because we are a
          safe harbor where they can ask questions, tell us their fears, be taken
          seriously and receive evidence-based information, reassurance and guidance.
        </p>

        <!-- Preventive Pediatric Care -->
        <h2
          class="text-headline-small text-heading font-weight-bold mt-12 mb-4"
          id="preventive-care"
        >
          Preventive Pediatric Care
        </h2>
        <p class="body-text text-body-large text-white">
          Helping children stay healthy is one of the most important things we do.
          Services include:
        </p>
        <icon-list dense :items="preventiveCare" />

        <!-- Same-Day Sick Visits -->
        <h2
          class="text-headline-small text-heading font-weight-bold mt-12 mb-4"
          id="same-day-sick-visits"
        >
          Same-Day Sick Visits
        </h2>
        <p class="body-text text-body-large text-white mb-2">
          Illnesses and injuries can happen at any time, and we're here to help when
          your child needs care. Whenever possible, we offer
          <strong>same-day appointments</strong> for illnesses and injuries, including:
        </p>
        <icon-list dense :items="sickVisits" />
        <p class="body-text text-body-large text-white mt-4">
          We also offer <strong>after-hours phone and telehealth consultations</strong>
          with your pediatric team, so families receive timely medical advice without
          always needing to visit an urgent care center or emergency department.
        </p>
        <p class="body-text text-body-large text-white mt-2">
          Our goal is to provide the right care, at the right time, from the
          pediatricians who know your child best.
        </p>

        <!-- Nutrition -->
        <h2
          class="text-headline-small text-heading font-weight-bold mt-12 mb-4"
          id="nutrition"
        >
          Nutrition
        </h2>
        <p class="body-text text-body-large text-white">
          Healthy nutrition and daily habits are the foundation of lifelong health. We
          partner with children, adolescents, and families to develop personalized,
          evidence-based nutrition and
          <router-link to="/integrative-pediatric-care">Lifestyle Medicine</router-link>
          plans that support healthy growth, development, mental health, athletic
          performance, and overall well-being. Services include:
        </p>
        <icon-list :items="nutrition" />
        <p class="body-text text-body-large text-white mt-4">
          Our goal is to help children and families build healthy habits that support
          lifelong health and well-being.
        </p>

        <!-- Infant Feeding & Family Support -->
        <h2
          class="text-headline-small text-heading font-weight-bold mt-12 mb-4"
          id="infant-feeding"
        >
          Infant Feeding &amp; Family Support
        </h2>
        <p class="body-text text-body-large text-white">
          Welcoming a new baby is exciting, rewarding, and sometimes overwhelming. We're
          here to support families from pregnancy through infancy with compassionate,
          evidence-based care and practical guidance. Services include:
        </p>
        <icon-list :items="infantFeeding" />
        <p class="body-text text-body-large text-white mt-4">
          We partner with families to help children get the healthiest possible start in
          life.
          <router-link to="/expecting">Learn more if you're expecting</router-link>.
        </p>

        <!-- Integrative Pediatric Care -->
        <h2
          class="text-headline-small text-heading font-weight-bold mt-12 mb-4"
          id="integrative-care"
        >
          Integrative Pediatric Care
        </h2>
        <p class="body-text text-body-large text-white mb-2">
          At South Royalton Health Center, we believe the best pediatric care combines
          the strengths of modern medicine with evidence-based complementary approaches
          that support the whole child.
        </p>
        <p class="body-text text-body-large text-white">
          Our pediatricians consider nutrition, sleep, physical activity, stress, family
          relationships, and emotional well-being as important parts of every child's
          health. When appropriate, we may incorporate additional therapies into your
          child's care plan to address these, including:
        </p>
        <icon-list dense :items="integrativeTherapies" />
        <p class="body-text text-body-large text-white mt-4">
          These therapies are always used to complement — not replace — traditional
          medical care. Learn more about
          <router-link to="/integrative-pediatric-care">
            integrative pediatric care
          </router-link>
          and
          <router-link to="/auricular-acupuncture">auricular acupuncture</router-link>.
        </p>

        <h3 class="text-title-large text-heading font-weight-bold mt-8 mb-2">
          Lifestyle Medicine
        </h3>
        <p class="body-text text-body-large text-white">
          Lifestyle Medicine is an evidence-based approach to preventing and treating
          disease by focusing on the daily habits that have the greatest impact on
          health. Our recommendations are personalized for each child and family and are
          guided by the six pillars of Lifestyle Medicine:
        </p>
        <icon-list dense :items="lifestylePillars" />
        <p class="body-text text-body-large text-white mt-4">
          These principles are woven into everyday pediatric care — from well-child
          visits to chronic disease management — to help children build lifelong healthy
          habits.
        </p>

        <h3 class="text-title-large text-heading font-weight-bold mt-8 mb-2">
          Auricular Acupuncture
        </h3>
        <p class="body-text text-body-large text-white">
          Dr. Ashley offers physician-provided auricular acupuncture as an
          evidence-based option to support children and teens with anxiety, ADHD
          symptoms, headaches, pain, sleep concerns, emotional regulation, injury
          recovery, and overall wellness. Because she is also your child's pediatrician,
          every treatment is integrated into their overall care plan.
          <router-link to="/auricular-acupuncture">
            Learn more about auricular acupuncture </router-link
          >.
        </p>

        <!-- ADHD & Behavioral Health -->
        <h2
          class="text-headline-small text-heading font-weight-bold mt-12 mb-4"
          id="behavioral-health"
        >
          ADHD &amp; Behavioral Health Care
        </h2>
        <p class="body-text text-body-large text-white mb-2">
          Behavioral health is an essential part of pediatric care. We believe
          emotional, behavioral, physical, and social health are deeply connected, and
          we partner with children, adolescents, and families to develop individualized
          treatment plans that support the whole child.
        </p>
        <p class="body-text text-body-large text-white">
          We provide comprehensive evaluation and ongoing care for children and
          adolescents with:
        </p>
        <icon-list dense :items="behavioralConditions" />
        <p class="body-text text-body-large text-white mt-4">
          Treatment plans are tailored to each child's needs and may include:
        </p>
        <icon-list :items="behavioralTreatments" />
        <p class="body-text text-body-large text-white mt-4">
          We also work closely with families, schools, therapists, and specialists to
          coordinate care and support long-term success.
        </p>

        <!-- Developmental & School Support -->
        <h2
          class="text-headline-small text-heading font-weight-bold mt-12 mb-4"
          id="school-support"
        >
          Developmental &amp; School Support
        </h2>
        <p class="body-text text-body-large text-white">
          Children thrive when healthcare and schools work together. We provide:
        </p>
        <icon-list dense :items="schoolSupport" />

        <!-- Adolescent Medicine -->
        <h2
          class="text-headline-small text-heading font-weight-bold mt-12 mb-4"
          id="adolescent-medicine"
        >
          Adolescent Medicine
        </h2>
        <p class="body-text text-body-large text-white">
          As children become teenagers, their healthcare needs change. We provide
          confidential, developmentally appropriate healthcare that supports adolescents
          as they grow into healthy, confident adults. Services include:
        </p>
        <icon-list :items="adolescentMedicine" />
        <p class="body-text text-body-large text-white mt-4">
          We partner with teens and their families to promote lifelong health while
          respecting each adolescent's growing independence and individual healthcare
          needs.
        </p>

        <!-- Additional Medical Services -->
        <h2
          class="text-headline-small text-heading font-weight-bold mt-12 mb-4"
          id="additional-services"
        >
          Additional Medical Services
        </h2>
        <p class="body-text text-body-large text-white">We also provide:</p>
        <icon-list dense :items="additionalServices" />

        <!-- Why Families Choose Us -->
        <h2
          class="text-headline-small text-heading font-weight-bold mt-12 mb-4"
          id="why-families-choose-us"
        >
          Why Families Choose Us
        </h2>
        <p class="body-text text-body-large text-white">
          Families choose our practice because we offer:
        </p>
        <icon-list :items="whyChooseUs" />
        <p class="body-text text-body-large text-white mt-4">
          Our goal is to build lasting relationships with families while helping every
          child thrive.
        </p>

        <!-- Local Playgroups: nested inside the same content column so it lines
             up with the service sections above rather than sitting full-width. -->
        <h2
          class="text-headline-small text-heading font-weight-bold mt-12 mb-4"
          id="playgroups"
        >
          Local Weekly Free Play Groups
        </h2>
        <v-row align="center">
          <v-col cols="12" md="8" class="pl-0">
            <p class="body-text text-body-large text-white my-4">
              Playgroups are a great way for families to connect, find out about other
              resources in the area and provide conversations and written information
              about child development and parenting.
            </p>
            <p class="body-text text-body-large text-white my-4">
              Local playgroups are funded by the Agency of Human Services, Department
              for Children and Families, Child Development Division through a Vermont
              Parent Child Center Network master grant.
            </p>
            <p class="body-text text-body-large text-white my-4">
              The list of playgroups available in the area provided by Orange County and
              the Family Place can be found at the websites below.
            </p>
            <icon-list color="rgb(var(--v-theme-highlight))" :items="playgroupLinks" />
          </v-col>

          <v-col cols="12" md="4">
            <figure class="ma-0">
              <v-img
                class="rounded-lg"
                :src="playgroupPhoto"
                alt="A child plays with a book in the South Royalton Health Center patient waiting room."
              />
              <figcaption class="text-white text-center mt-2">
                <small>
                  A child plays with a book in the South Royalton Health Center patient
                  waiting room.
                </small>
              </figcaption>
            </figure>
          </v-col>
        </v-row>

        <v-sheet color="primary" class="rounded-lg mt-12 pa-8" elevation="8">
          <h2 class="text-headline-small text-white text-center mb-4">
            Ready to get started?
          </h2>
          <p class="body-text text-body-large text-white text-center mb-6">
            We welcome new patients from birth through young adulthood. If you're
            preparing for a first visit, our new patient page walks you through
            everything you'll need.
          </p>
          <div class="d-flex flex-column flex-sm-row justify-center ga-4">
            <v-btn :href="appStore.officePhone" color="highlight" size="large">
              Call {{ appStore.officePhoneStr }}
            </v-btn>
            <v-btn to="/new-patients" color="highlight" size="large">
              New Patients
            </v-btn>
            <v-btn to="/faq" color="highlight" size="large">FAQ</v-btn>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useAppStore } from "@/store/app";
import IconList from "@/components/IconList.vue";
import SectionNav from "@/components/SectionNav.vue";
import playgroupPhoto from "@/assets/img/services/playgroup.jpg";
import { useSeo } from "@/composables/useSeo";
import { medicalWebPageSchema, physicianSchema } from "@/config/schema";

const appStore = useAppStore();

// Must stay in sync with the id attributes on the <h2> section headings below.
const sections = [
  { id: "our-mission", label: "Our Mission" },
  { id: "preventive-care", label: "Preventive Pediatric Care" },
  { id: "same-day-sick-visits", label: "Same-Day Sick Visits" },
  { id: "nutrition", label: "Nutrition" },
  { id: "infant-feeding", label: "Infant Feeding & Family Support" },
  { id: "integrative-care", label: "Integrative Pediatric Care" },
  { id: "behavioral-health", label: "ADHD & Behavioral Health Care" },
  { id: "school-support", label: "Developmental & School Support" },
  { id: "adolescent-medicine", label: "Adolescent Medicine" },
  { id: "additional-services", label: "Additional Medical Services" },
  { id: "why-families-choose-us", label: "Why Families Choose Us" },
  { id: "playgroups", label: "Local Weekly Free Play Groups" },
];

const missionBullets = [
  "Improving the lives of the youth we serve by providing quality care in a youth-centered environment.",
  "Listening to our patients and their families who we are privileged to serve.",
  "Guiding our patients along a path of optimal health and wellness.",
  "Continually pursuing excellence at all levels through continuing education.",
];

const preventiveCare = [
  'Prenatal "Meet Your Pediatrician" visits',
  "Newborn care",
  "Well-child visits",
  "Annual physical exams",
  "School physicals",
  "Sports physicals",
  "Camp physicals",
  "Childhood immunizations",
  "Growth and developmental screenings",
  "Vision and hearing screening",
  "Preventive health counseling",
];

const sickVisits = [
  "Ear infections",
  "Sore throats",
  "Fever",
  "RSV",
  "Influenza",
  "COVID-19",
  "Cough",
  "Asthma flare-ups",
  "Allergies",
  "Rashes",
  "Vomiting and diarrhea",
  "Minor injuries",
  "Concussions",
];

const nutrition = [
  "Growth and nutrition assessments",
  "Pediatric nutritional counseling",
  "Nutrition support for picky or selective eating",
  "Healthy weight management, including prescription medications when appropriate",
  "Sports nutrition and optimization for athletic performance",
  "Nutrition support for ADHD and other chronic health conditions",
  "Eating disorder care as part of a multidisciplinary treatment team",
];

const infantFeeding = [
  'Prenatal "Meet Your Pediatrician" visits',
  "Newborn care",
  "Lactation consultation and breastfeeding support",
  "Infant feeding guidance, including breastfeeding, bottle feeding, combination feeding, and introducing solid foods",
  "Infant sleep guidance and healthy sleep habits",
  "Growth and nutrition support during infancy",
  "Developmental monitoring",
  "Diaper Bank assistance",
  "Community resource referrals",
];

const integrativeTherapies = [
  "Nutrition counseling",
  "Movement",
  "Mind-body strategies for stress and anxiety",
  "Auricular acupuncture",
];

const lifestylePillars = [
  "Healthy nutrition",
  "Regular physical activity",
  "Restorative sleep",
  "Healthy stress management",
  "Avoiding tobacco, vaping, alcohol, and other harmful substances",
  "Strong family, community, and social connections",
];

const behavioralConditions = [
  "ADHD",
  "Anxiety",
  "Depression",
  "Obsessive-Compulsive Disorder (OCD)",
  "Post-Traumatic Stress Disorder (PTSD)",
  "Oppositional Defiant Disorder (ODD)",
  "Disruptive Mood Dysregulation Disorder (DMDD)",
  "Eating disorders",
];

const behavioralTreatments = [
  "Parent and patient education",
  {
    text: "Lifestyle Medicine counseling, including nutrition, physical activity, sleep, and stress management —",
    to: "/integrative-pediatric-care",
    linkLabel: "more on Lifestyle Medicine",
  },
  "Behavioral and emotional support",
  "Medication management",
  {
    text: "Auricular acupuncture as an adjunctive treatment —",
    to: "/auricular-acupuncture",
    linkLabel: "more on auricular acupuncture",
  },
  "Ongoing follow-up to support long-term success and well-being",
];

const schoolSupport = [
  "Developmental screening",
  "Developmental evaluations",
  "Care coordination",
  "School consultations",
  "504 Plan support",
  "Individualized Education Program (IEP) meeting attendance",
  "Collaboration with teachers and school staff",
  {
    text: "In-school appointments through",
    to: "/school-visits",
    linkLabel: "HealthHubVT",
  },
];

const adolescentMedicine = [
  {
    text: "Lifestyle Medicine counseling —",
    to: "/integrative-pediatric-care",
    linkLabel: "more on Lifestyle Medicine",
  },
  "Healthy weight management",
  "Sports nutrition and optimization of athletic performance",
  "Injury prevention and recovery",
  "Menstrual care",
  "Contraceptive counseling",
  "Reproductive and sexual health",
  "Support for transgender and gender-diverse youth",
  "Mental and behavioral health support",
];

const additionalServices = [
  "On-site laboratory testing",
  "Phlebotomy",
  "Concussion management",
  "Medication management",
  "Chronic disease management",
  "Care coordination with specialists",
  "After-hours pediatric team availability by phone or telehealth for established patients",
];

const whyChooseUs = [
  "Independent, relationship-based pediatric care",
  "Longer appointment times with your pediatric team — they really know you!",
  "Same-day sick visits",
  "Direct communication with your pediatric care team, even after hours",
  {
    text: "School-based healthcare services and collaboration with local schools —",
    to: "/school-visits",
    linkLabel: "more on school visits",
  },
  "Comprehensive behavioral health care, including ADHD, anxiety, depression, and eating disorders",
  {
    text: "Nutrition counseling and comprehensive pediatric obesity care, combining Lifestyle Medicine, behavioral support, and evidence-based medications when appropriate —",
    to: "/integrative-pediatric-care",
    linkLabel: "more on nutrition and Lifestyle Medicine",
  },
  {
    text: "Integrative pediatric care, including",
    to: "/auricular-acupuncture",
    linkLabel: "auricular acupuncture",
  },
  "Care coordination for children with complex medical and developmental needs",
  "Convenient access close to home in the Upper Valley",
];

const playgroupLinks = [
  {
    text: "",
    href: "https://www.orangecountypcc.org/",
    linkLabel: "Orange County Parent Child Center",
  },
  {
    text: "",
    href: "https://www.familyplacevt.org/playgroups/",
    linkLabel: "The Family Place",
  },
];

// Section headings double as the service list for MedicalProcedure markup, so
// the schema stays in step with the page as sections are added or renamed.
const servicesSchema = medicalWebPageSchema({
  path: "/our-mission-and-services",
  name: "Our Mission & Pediatric Services",
  description:
    "Comprehensive pediatric primary care for newborns through young adults in the Upper Valley of Vermont and New Hampshire.",
  services: sections
    .filter((section) => section.id !== "our-mission" && section.id !== "playgroups")
    .map((section) => section.label),
});

useSeo({
  title: "Our Mission & Pediatric Services",
  description:
    "Comprehensive pediatric care in South Royalton, VT: preventive well-child visits, same-day sick visits, nutrition, ADHD and behavioral health, adolescent medicine and integrative pediatric care.",
  schema: [servicesSchema, physicianSchema()],
});
</script>

<style scoped>
a:not(.v-btn) {
  color: rgb(var(--v-theme-highlight));
}

a:not(.v-btn):hover {
  color: rgb(var(--v-theme-heading));
}

a:not(.v-btn):focus {
  color: sandybrown;
}
</style>
