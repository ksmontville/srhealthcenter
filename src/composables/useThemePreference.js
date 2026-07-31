import { computed, onMounted, ref } from "vue";
import { useTheme } from "vuetify";

const STORAGE_KEY = "srhc-theme";

/** system → light → dark → system */
const ORDER = ["system", "light", "dark"];

// Module-level so every component that calls the composable shares one value
// rather than each keeping its own copy.
const preference = ref("system");
let initialised = false;

const readStored = () => {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return ORDER.includes(v) ? v : "system";
  } catch {
    // Private browsing / blocked storage — fall back to following the OS.
    return "system";
  }
};

const persist = (value) => {
  try {
    if (value === "system") window.localStorage.removeItem(STORAGE_KEY);
    else window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Non-fatal: the choice just won't survive a reload.
  }
};

/**
 * Theme preference with persistence.
 *
 * Three states rather than a simple light/dark flip, so a visitor who changes
 * their mind can hand control back to the operating system instead of being
 * stuck with an explicit choice forever.
 */
export function useThemePreference() {
  const theme = useTheme();

  const apply = (value) => {
    preference.value = value;
    theme.change(value);
    persist(value);
  };

  onMounted(() => {
    if (initialised) return;
    initialised = true;
    const stored = readStored();
    if (stored !== "system") theme.change(stored);
    preference.value = stored;
  });

  const cycle = () => {
    apply(ORDER[(ORDER.indexOf(preference.value) + 1) % ORDER.length]);
  };

  /** The theme actually in effect — "light" or "dark". */
  const resolved = computed(() => theme.name.value);

  // Describes the current state and what activating will do. Says "set" rather
  // than "switch to" for the pinned states, since from system-following light
  // the next step is still light — just no longer following the system.
  const label = computed(() => {
    if (preference.value === "system")
      return `Theme: following your system setting (currently ${resolved.value}). Activate to set the light theme.`;
    if (preference.value === "light")
      return "Theme: light. Activate to set the dark theme.";
    return "Theme: dark. Activate to follow your system setting.";
  });

  return { preference, resolved, cycle, apply, label };
}
