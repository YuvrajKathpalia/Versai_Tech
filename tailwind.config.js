module.exports = {
    content: [
      './src/**/*.{html,js,jsx,ts,tsx}',
      './public/index.html',
      './index.html'
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9',
            600: '#0284c7',
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e',
          },
          secondary: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
          },
          success: {
            50: '#f0fdf4',
            500: '#22c55e',
            700: '#15803d',
          },
          warning: {
            50: '#fffbeb',
            500: '#f59e0b',
            700: '#b45309',
          },
          error: {
            50: '#fef2f2',
            500: '#ef4444',
            700: '#b91c1c',
          }
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        },
        boxShadow: {
          card: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        },
      },
    },
    plugins: [],
  };