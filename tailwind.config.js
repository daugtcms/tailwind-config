import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

function color(variable) {
	return ({ opacityValue }) => {
		if (opacityValue === undefined) {
			return `rgb(var(${variable}))`;
		}
		return `rgb(var(${variable}) / ${opacityValue})`;
	};
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    './vendor/wire-elements/modal/resources/views/*.blade.php', // used for wire-modal
    './storage/framework/views/*.php',
  ],
  safelist: [
    {
      pattern: /max-w-(sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl)/, // needed for wire-modal
      variants: ['sm', 'md', 'lg', 'xl', '2xl']
    }
  ],
  theme: {
    extend: {
      colors: {
        primary: {
            50: color('--color-primary-50'),
            100: color('--color-primary-100'),
            200: color('--color-primary-200'),
            300: color('--color-primary-300'),
            400: color('--color-primary-400'),
            500: color('--color-primary-500'),
            600: color('--color-primary-600'),
            700: color('--color-primary-700'),
            800: color('--color-primary-800'),
            900: color('--color-primary-900'),
            950: color('--color-primary-950')
        },
        neutral: {
            50: color('--color-neutral-50'),
            100: color('--color-neutral-100'),
            200: color('--color-neutral-200'),
            300: color('--color-neutral-300'),
            400: color('--color-neutral-400'),
            500: color('--color-neutral-500'),
            600: color('--color-neutral-600'),
            700: color('--color-neutral-700'),
            800: color('--color-neutral-800'),
            900: color('--color-neutral-900'),
            950: color('--color-neutral-950')
        },
        success: {
            50: color('--color-success-50'),
            100: color('--color-success-100'),
            200: color('--color-success-200'),
            300: color('--color-success-300'),
            400: color('--color-success-400'),
            500: color('--color-success-500'),
            600: color('--color-success-600'),
            700: color('--color-success-700'),
            800: color('--color-success-800'),
            900: color('--color-success-900'),
            950: color('--color-success-950')
        },
        warning: {
            50: color('--color-warning-50'),
            100: color('--color-warning-100'),
            200: color('--color-warning-200'),
            300: color('--color-warning-300'),
            400: color('--color-warning-400'),
            500: color('--color-warning-500'),
            600: color('--color-warning-600'),
            700: color('--color-warning-700'),
            800: color('--color-warning-800'),
            900: color('--color-warning-900'),
            950: color('--color-warning-950')
        },
        danger: {
            50: color('--color-danger-50'),
            100: color('--color-danger-100'),
            200: color('--color-danger-200'),
            300: color('--color-danger-300'),
            400: color('--color-danger-400'),
            500: color('--color-danger-500'),
            600: color('--color-danger-600'),
            700: color('--color-danger-700'),
            800: color('--color-danger-800'),
            900: color('--color-danger-900'),
            950: color('--color-danger-950')
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '100%',
            p: {
              maxWidth: theme('maxWidth.3xl'),
              marginLeft: 'auto',
              marginRight: 'auto'
            },
            h1: {
              maxWidth: theme('maxWidth.3xl'),
              margin: 'auto',
            },
            h2: {
              maxWidth: theme('maxWidth.3xl'),
              margin: 'auto',
            },
            h3: {
              maxWidth: theme('maxWidth.3xl'),
              margin: 'auto',
            },
            h4: {
              maxWidth: theme('maxWidth.3xl'),
              margin: 'auto',
            },
            blockquote: {
              maxWidth: theme('maxWidth.3xl'),
              margin: 'auto',
            },
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: theme('colors.primary.600'),
              },
            },
          }
        }
      }),
    },
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: '1rem',

      // default breakpoints but with 40px removed
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
      },
    },
  },
  plugins: [forms, typography],
}
