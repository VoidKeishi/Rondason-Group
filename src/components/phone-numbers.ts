/**
 * Contact numbers by location. Singapore is the main line (client, 2026-08-13);
 * Australia and Japan added the same day. `tel` is the dial string, `display`
 * the grouped form used everywhere on the page, `country` the ISO code the
 * JSON-LD contact points are keyed by.
 */
export const PHONE_NUMBERS = [
  {
    label: 'Singapore',
    tel: '+6590404928',
    display: '+65 9040 4928',
    country: 'SG',
  },
  {
    label: 'Australia',
    tel: '+61430353343',
    display: '+61 430 353 343',
    country: 'AU',
  },
  {
    label: 'Japan',
    tel: '+817012533343',
    display: '+81 70 1253 3343',
    country: 'JP',
  },
] as const;
