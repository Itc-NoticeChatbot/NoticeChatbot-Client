/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: 'var(--ds-color-accent)',
        'accent-soft': 'var(--ds-color-accent-soft)',
        'accent-border': 'var(--ds-color-accent-border)',
        danger: 'var(--ds-color-danger)',
        white: 'var(--ds-color-white)',
        surface: 'var(--ds-color-surface)',
        'surface-2': 'var(--ds-color-surface-2)',
        'surface-3': 'var(--ds-color-surface-3)',
        bubble: 'var(--ds-color-bubble)',
        ink: 'var(--ds-color-ink)',
        muted: 'var(--ds-color-muted)',
        faint: 'var(--ds-color-faint)',
        border: 'var(--ds-color-border)',
        'border-2': 'var(--ds-color-border-2)',
      },
      fontFamily: {
        pretendard: ['Pretendard', 'Noto Sans KR', 'sans-serif'],
      },
      fontSize: {
        display: ['27px', { lineHeight: '1.4', fontWeight: '700' }],
        title: ['15px', { lineHeight: '1.4', fontWeight: '700' }],
        body: ['14.5px', { lineHeight: '1.4', fontWeight: '400' }],
        label: ['13.5px', { lineHeight: '1.4', fontWeight: '600' }],
        item: ['13px', { lineHeight: '1.4', fontWeight: '500' }],
        meta: ['12px', { lineHeight: '1.4', fontWeight: '600' }],
        cap: ['11.5px', { lineHeight: '1.4', fontWeight: '700' }],
        micro: ['11px', { lineHeight: '1.4', fontWeight: '500' }],
      },
      spacing: {
        s1: '4px',
        s2: '8px',
        s3: '12px',
        s4: '14px',
        s5: '18px',
        s6: '22px',
        s7: '28px',
        s8: '40px',
      },
      borderRadius: {
        sm: '6px',
        md: '9px',
        lg: '11px',
        xl: '14px',
        '2xl': '16px',
        pill: '999px',
      },
      boxShadow: {
        card: '0 8px 24px rgba(27, 27, 25, 0.08)',
      },
    },
  },
  plugins: [],
}
