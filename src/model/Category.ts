export const CATEGORIES = ['housing', 'travel', 'food', 'utilities', 'insurance', 'healthcare', 'financial', 'lifestyle', 'entertainment', 'clothing', 'miscellaneous'] as const;
export type Category = typeof CATEGORIES[number]

