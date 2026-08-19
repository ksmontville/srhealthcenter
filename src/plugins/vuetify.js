/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

/**
 * Semantic colour tokens.
 *
 * Every key here also becomes a `--v-theme-<name>` CSS variable and
 * `.text-<name>` / `.bg-<name>` utilities, so component styles reference tokens
 * rather than literal hexes and both themes follow automatically.
 *
 * Both palettes are verified against WCAG AA for every pair the site actually
 * renders — including the opacity-blended navbar, footer and staff cards.
 * Changing a value here means re-checking those.
 *
 *   token       role
 *   background  page background
 *   primary     dark green surfaces (panel headers, app bar, buttons)
 *   secondary   mid-green surfaces (panel bodies, footer, cards)
 *   highlight   cream — button fills and inline links
 *   heading     amber — section headings on the page background
 *   accent      warm mid-tone for icon bullets and small accents
 *   panel       large cream panels in light mode; a dark surface in dark mode.
 *               Distinct from `highlight`, which stays cream in both themes
 *               because it is used for button fills where that reads well.
 *   action      button fill for buttons that sit *on* a `panel` surface. It has
 *               to invert with the theme for the same reason `panel` does:
 *               `primary`/`secondary` are mid-to-dark greens, so on the dark
 *               panel they measured 1.24:1 and 1.02:1 against their own
 *               background — the button text stayed legible (which is why
 *               Lighthouse still passed) but the button itself disappeared.
 */
const light = {
  dark: false,
  colors: {
    background: "#7A5F38", // walnut
    surface: "#47624A",
    primary: "#33493D",
    secondary: "#47624A",
    accent: "#C89B5A",
    highlight: "#F0EBCE",
    heading: "#F2C879", // amber
    panel: "#F0EBCE", // cream panels: sidebar, drawers, cards
    action: "#33493D", // dark green on the cream panel — 8.09:1
    "on-action": "#FFFFFF", // 9.72:1 on the fill above
  },
};

const dark = {
  dark: true,
  colors: {
    background: "#241C12", // deep bark
    surface: "#2A3A2E",
    primary: "#1E2B24",
    secondary: "#2A3A2E",
    accent: "#C89B5A",
    highlight: "#F0EBCE",
    heading: "#F2C879",
    panel: "#2F3A31", // panels go dark rather than flashing cream
    action: "#F0EBCE", // cream on the dark panel — 9.87:1
    "on-action": "#1E2B24", // 12.26:1 on the fill above
  },
};

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    // Follows the OS setting and updates live when the visitor changes it.
    defaultTheme: "system",
    themes: { light, dark },
  },
});
