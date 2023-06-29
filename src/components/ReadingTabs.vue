<template>

  <v-card color="highlight" max-width="800" class="ma-auto">
    <v-toolbar color="primary" density="comfortable">
      <v-toolbar-title class="text-center">Reading by Topic</v-toolbar-title>
    </v-toolbar>
    <v-tabs v-model="tab" show-arrows bg-color="secondary">
      <v-tab v-for="tab in tabs" :key="tab.id" :value="tab.tab">{{ tab.tab }}</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab" >
        <v-window-item v-for="tab in tabs" :key="tab.id" :value="tab.tab">
          <v-list bg-color="transparent">
            <v-list-item v-for="content in tab.contents" :key="content">
              <v-icon :icon="mdiBookOpenOutline" class="mx-2"/>
              {{ content }}
            </v-list-item>
          </v-list>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>

</template>

<script setup>
  import {ref} from "vue";
  import { mdiBookOpenOutline } from "@mdi/js";

  const tab = ref(null)
  const tabs = ref([
    {id: 0,
    tab: "Newborns",
    contents: [
      "Heading Home With Your Newborn: From Birth to Reality by Laura A. Jana",
      "Baby 411: Clear Answers and Smart Advice for Your Baby's First Year by Denise Fields",
      "It's Not the Stork!: A Book About Girls, Boys, Babies, Bodies, Families and Friends (The Family Library) by Robie H. Harris"
    ],
    },
    {id: 1,
    tab: "Breastfeeding",
    contents: [
      "Breastfeeding Made Simple: Seven Natural Laws for Nursing Mothers by Nancy Mohrbacher",
      "Breastfeeding Solutions: Quick Tips for the Most Common Nursing Challenges by Nancy Mohrbacher",
      "Work. Pump. Repeat.: The New Mom's Survival Guide to Breastfeeding and Going Back to Work by Jessica Shortall"
    ],
    },
    {id: 2,
    tab: "Sleep",
    contents: [
      "The No-Cry Sleep Solution: Gentle Ways to Help Your Baby Sleep Through the Night by Elizabeth Pantley",
      "Healthy Sleep Habits, Happy Child by Dr Marc Weissbluth",
      "Secrets of the Baby Whisperer: How to Calm, Connect, and Communicate with Your Baby by Melinda Blau",
      "The Happiest Baby on the Block; Fully Revised and Updated Second Edition: The New Way to Calm Crying and Help Your Newborn Baby Slee... by Harvey Karp"
    ],
    },
    {id: 3,
    tab: "Parenting",
    contents: [
      "If Your Kid Eats This Book, Everything Will Still Be Okay: How to Know if Your Child's Injury or Illness Is Really an Emergency by Lara Zibners",
      "What to Do When Bad Habits Take Hold: A Kid's Guide to Overcoming Nail Biting and More (What to Do Guides for Kids) by Dawn Huebner",
      "No More Meltdowns: Positive Strategies for Managing and Preventing Out-Of-Control Behavior, by Jed Baker",
      "Mom's House, Dad's House for Kids: Feeling at Home in One Home or Two, by Isolina Ricci Ph.D.",
      "How to Talk So Kids Will Listen & Listen So Kids Will Talk by Adele Faber, Elaine Mazlish",
      "What to Do When It's Not Fair: A Kid's Guide to Handling Envy and Jealousy (What-to-Do Guides for Kids) by Jacqueline B. Toner",
      "The Boy's Body Guide: A Health and Hygiene Book, by Frank C. Hawkins, M.D. Dr. Greta L. B. Laube, J. C. Hawkins",
      "The Care and Keeping of You: The Body Book for Younger Girls, by Valorie Schaefer",
      "The Care and Keeping of You 2: The Body Book for Older Girls, American Girls, by Cara Natterson",
      "Coping with Cliques: A Workbook to Help Girls Deal with Gossip, Put-Downs, Bullying, and Other Mean Behavior (Instant Help /New Harbinger), by Susan Sprague (Paperback)",
      "The 7 Habits of Highly Effective Teens, by Sean Covey",
      "How to Talk to Anyone: Improve Social Skills, Gain Self-Confidence, and Boost Your Charisma to Instantly Connect With Anyone (90-Minute Success Guide), by Steven Hopkins",
      "Quiet: The Power of Introverts in a World That Can't Stop Talking, by Susan Cain",
    ],
    },
    {id: 4,
    tab: "ADHD",
    contents: [
      "Late, Lost, and Unprepared: A Parents' Guide to Helping Children with Executive Functioning, by Joyce Cooper-Kahn, Laurie Dietzel",
      "The ADHD Workbook for Teens: Activities to Help You Gain Motivation and Confidence, by Lara Honos-Webb",
      "Sitting Still Like a Frog: Mindfulness Exercises for Kids (and Their Parents), by Eline Snel, Myla Kabat-Zinn, Jon Kabat-Zinn",
      "Putting on the Brakes Activity Book for Kids with Add or ADHD, by Patricia O. Quinn, Judith M. Stern, Joe Lee",
      "Taking Charge of ADHD: The Complete, Authoritative Guide for Parents (Revised Edition), by Russell A. Barkley",
      "Stop and Think Workbook, Second Edition, by Philip C. Kendall",
      "Cognitive-Behavioral Therapy for Impulsive Children: Therapist Manual, 3rd Edition, by Philip C. Kendall",
    ],
    },
    {id: 5,
    tab: "Autism",
    contents: [
      "Early Intervention Games: Fun, Joyful Ways to Develop Social and Motor Skills in Children with Autism Spectrum or Sensory Processing Disorders, by Barbara Sher",
      "1001 Great Ideas for Teaching and Raising Children with Autism or Asperger's, Revised and Expanded 2nd Edition, by Veronica Zysk, Ellen Notbohm",
    ],
    },
    {id: 6,
    tab: "Sensory Disorders",
    contents: [
      "The Out-of-Sync Child Has Fun, Revised Edition: Activities for Kids with Sensory Processing Disorder, by Carol Kranowitz",
      "Raising a Sensory Smart Child: The Definitive Handbook for Helping Your Child with SensoryProcess ing Issues, by Lindsey Biel, Nancy Peske",
      "Growing an In-Sync Child: Simple, Fun Activities to Help Every Child Develop, Learn, and Grow, by Carol Kranowitz, Joye Newman",
    ],
    },
    {id: 7,
    tab: "Mood Disorders",
    contents: [
      "What to Do When You Grumble Too Much: A Kid's Guide to Overcoming Negativity (What to Do Guides for Kids) by Dawn Huebner",
      "Don't Let Your Emotions Run Your Life for Teens: Dialectical Behavior Therapy Skills for Helping You Manage Mood Swings, Control Angry Outbursts, and ... with Others (Instant Help Book for Teens), by Sheri Van Dijk MSW",
      "Get Out of Your Mind and Into Your Life for Teens: A Guide to Living an Extraordinary Life (Teen Instant Help), by Joseph Ciarrochi, Louise Hayes, Ann Bailey",
      "The Stress Reduction Workbook for Teens: Mindfulness Skills to Help You Deal with Stress, by Gina Biegel MA LMFT",
      "The Self-Esteem Workbook for Teens: Activities to Help You Build Confidence and Achieve Your Goals, by Lisa M. Schab LCSW",
      "Stopping the Pain: A Workbook for Teens Who Cut and Self Injure, by Lawrence Shapiro PhD (Paperback)",
      "The Worry Workbook for Teens: Effective CBT Strategies to Break the Cycle of Chronic Worry and Anxiety Paperback – by Jamie A. Micco PhD",
    ],
    },
    {id: 8,
    tab: "Anxiety",
    contents: [
      "Hey Warrior Hardcover – by Karen Young",
      "What to Do When You Worry Too Much: A Kid's Guide to Overcoming Anxiety (What to Do Guides for Kids), by Dawn Huebner, Bonnie Matthews",
      "What to Do When You Dread Your Bed: A Kid's Guide to Overcoming Problems With Sleep (What to Do Guides for Kids) by Dawn Huebner",
      "What to Do When Mistakes Make You Quake: A Kid's Guide to Accepting Imperfection (What-to-Do Guides for Kids) by Claire A.B. Freeland",
      "What to Do When Your Brain Gets Stuck: A Kid's Guide to Overcoming OCD (What-to-Do Guides for Kids) by Dawn Huebner",
      "The Opposite of Worry: The Playful Parenting Approach to Childhood Anxieties and Fears by Lawrence J. Cohen",
      "The Anxiety Workbook for Teens: Activities to Help You Deal with Anxiety and Worry, by Lisa M. Schab LCSW",
      "The Shyness and Social Anxiety Workbook for Teens: CBT and ACT Skills to Help You Build Social Confidence, by Jennifer Shannon LMFT, Doug Shannon, Christine Padesk",
      "Mindfulness for Teen Anxiety: A Workbook for Overcoming Anxiety at Home, at School, and Everywhere Else (Teen Instant Help), by Christopher Willard PsyD",
      "Outsmarting Worry (An Older Kid's Guide to Managing Anxiety) Paperback  by Dawn Huebner",
      "Worry Workbook for Teens",
      "Anxious Kids, Anxious Parents"
    ],
    },
    {id: 9,
    tab: "Depression",
    contents: [
      "Beyond the Blues: A Workbook to Help Teens Overcome Depression (Teen Instant Help), by Lisa M. Schab LCSW",
      "Taking Action: A Workbook for Overcoming Depression, by Kevin Stark, Philip C. Kendall, Mary McCarthy",
      "The Bipolar Workbook for Teens: DBT Skills to Help You Control Mood Swings, by Sheri Van Dijk, Karma Guindon"
    ],
    },
    {id: 10,
    tab: "Anger",
    contents: [
      "What to Do When Your Temper Flares: A Kid's Guide to Overcoming Problems With Anger (What to Do Guides for Kids) by Dawn Huebner",
      "Mindfulness for Teen Anger: A Workbook to Overcome Anger and Aggression Using MBSR and DBT Skills, by Mark C. Purcell MEd PsyD, Jason R Murphy MA",
      "The Anger Workbook for Teens: Activities to Help You Deal with Anger and Frustration, by Raychelle Cassada Lohmann MS LPC, Julia V. Taylor MA",
      "I'm Not Bad, I'm Just Mad: A Workbook to Help Kids Control Their Anger, by Anna Greenwald, Zack Pelta-Heller, Lawrence Shapiro PhD",
      "Don't Let Your Emotions Run Your Life for Teens: Dialectical Behavior Therapy Skills for Helping You Manage Mood Swings, Control Angry Outbursts, and ... with Others (Instant Help Book for Teens), by Sheri Van Dijk MSW",
    ],
    },
    {id: 11,
    tab: "Therapy",
    contents: [
      "Cognitive-Behavioral Therapy for Anxious Children: Therapist Manual, Third Edition, by Philip C. Kendall, Kristina A. Hedtke",
      "\"The C.A.T. Project\" Manual For The Cognitive Behavioral Treatment Of Anxious Adolescents, by Philip C. Kendall, Muniya Choudhury, Jennifer Hudson",
      "\"The C.A.T. Project\" Workbook For The Cognitive Behavioral Treatment Of Anxious Adolescents by Philip C. Kendall (Author), Muniya Choudhury (Author), Jennifer Hudson (Author), Alicia Webb (Author), Webb Hudson Jennifer (Author), Alicia (Author)",
      "Coping Cat Workbook, Second Edition ( Child Therapy Workbooks Series) 2nd Edition, by Philip C. Kendall (Author), Kristina A. Hedtke (Author)",
      "The Coping Cat Parent Companion Spiral-bound – April 6, 2010, by Philip C. Kendall (Author), Ph.D. (Author), ABPP (Author), Jennifer L. Podell (Author), M.A. (Author), and Elizabeth A. Gosch (Author)",
      "Treating Depressed Children: Therapist Manual for 'Taking Action', by Kevin Stark, Philip C. Kendall"
    ],
    },
    {id: 12,
    tab: "Eating Disorders",
    contents: [
      "The Body Image Workbook for Teens: Activities to Help Girls Develop a Healthy Body Image in an Image-Obsessed World, by Julia V. Taylor MA, Melissa Atkins Wardy",
      "Help Your Teenager Beat an Eating Disorder, Second Edition by James Lock",
      "Mental Health Initiative) by Carrie Arnold"
    ],
    },
  ])

</script>

<style scoped>

</style>
