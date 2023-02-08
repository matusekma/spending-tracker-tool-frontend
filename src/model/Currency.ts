export const CURRENCIES = ['HUF', 'USD', 'EUR'] as const
export type Currency = typeof CURRENCIES[number]

