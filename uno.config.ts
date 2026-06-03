import { defineConfig, presetWind } from 'unocss';

export default defineConfig({
  presets: [presetWind()],
  theme: {
    colors: {
      page: '#e8e4d8',
      surface: '#f5f2ec',
      'surface-strong': '#d8d4c8',
      card: '#ffffff',
      brand: '#6b5842',
      'brand-soft': '#8b7355',
      'brand-strong': '#4a3d2e',
      'brand-muted': '#8b7355',
      'brand-border': '#c4b8a4',
      content: '#3d3d3d',
      'content-muted': '#5a5a5a',
      'content-subtle': '#6b6b6b',
      'content-inverse': '#ffffff'
    },
    fontFamily: {
      display: '"Fredericka the Great", cursive',
      body: '"Courier New", monospace'
    }
  },
  shortcuts: {
    'section-pad': 'px-4 py-12 md:px-8 md:py-16',
    'container-narrow': 'mx-auto max-w-4xl',
    'container-wide': 'mx-auto max-w-7xl',
    'heading-display': 'font-display tracking-wider',
    'btn-primary':
      'inline-flex items-center justify-center bg-brand-soft text-content-inverse px-6 py-3 transition-colors hover:bg-brand-strong',
    'btn-ghost':
      'inline-flex items-center justify-center border-2 border-brand-soft text-brand-soft px-6 py-3 transition-colors hover:bg-surface',
    'card-surface': 'bg-card border border-brand-border p-6 shadow-md'
  },
  safelist: [
    'text-brand',
    'text-brand-soft',
    'text-brand-strong',
    'text-content',
    'text-content-muted',
    'bg-page',
    'bg-surface',
    'font-display',
    'font-body'
  ]
});
