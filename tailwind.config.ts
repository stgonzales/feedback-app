import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  theme: {
    colors: {
      'AD1FEA': '#AD1FEA',
      '4661E6': '#4661E6',
      '373F68': '#373F68',
      'FFFFFF': '#FFF',
      'F2F4FF': '#F2F4FF',
      'F7F8FD': '#F7F8FD',
      '3A4374': '#3A4374',
      '647196': '#647196',
      'F49F85': '#F49F85',
      '62BCFA': '#62BCFA',
      'D73737': '#D73737'
    },
    fontSize: {
      'body-1': ['1rem', {
        lineHeight: '1.4375rem',
      }], //16px/23px
      'body-2': ['0.9375rem', {
        lineHeight: '1.375rem',
      }], //15px/22px
      'body-3': ['0.8125rem', {
        lineHeight: '1.1875rem',
        fontWeight: '600',
      }], //13px/19px
      'heading-1': ['1.5rem', {
        lineHeight: '35px',
        letterSpacing: '-0.33px',
        fontWeight: '700',
      }], //24px/35px
      'heading-2': ['1.25rem', {
        lineHeight: '29px',
        letterSpacing: '-0.25px',
        fontWeight: '700',
      }], //20px/29px
      'heading-3': ['1.125rem', {
        lineHeight: '26px',
        letterSpacing: '-0.25px',
        fontWeight: '700',
      }], //18px/26px
      'heading-4': ['0.875rem', {
        lineHeight: '20px',
        letterSpacing: '-0.2px',
        fontWeight: '700',
      }], //14px/20px
    },
    gradientColorStops: {
      
    }
  },
  plugins: [],
};
export default config;
