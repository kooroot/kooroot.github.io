/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#0a0a0a',
        secondary: '#111111',
        card: '#161616',
        accent: '#3b82f6',
        // White on #3b82f6 is only 3.68:1 — under AA for the 14px/500 button
        // labels it was carrying. Solid accent-filled buttons use this darker
        // step instead (white on it: 5.17:1). `accent` stays the token for
        // accent-colored *text* and borders on dark surfaces.
        'accent-strong': '#2563eb',
        'text-primary': '#f5f5f5',
        'text-secondary': '#a3a3a3',
        // Was #737373, which measured 4.18:1 on `primary` — under WCAG AA for the
        // small metadata labels it is used for. #808080 clears 4.5:1 on all three
        // surfaces (primary 5.01, secondary 4.78, card 4.58) without flattening
        // the ramp against text-secondary.
        'text-muted': '#808080',
        border: '#262626',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
