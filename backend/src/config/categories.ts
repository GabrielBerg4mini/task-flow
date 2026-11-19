export const categories = [
  { label: 'UI Design', value: 'ui-design' },
  { label: 'Front End', value: 'front-end' },
  { label: 'Back End', value: 'back-end' },
  { label: 'UX Design', value: 'ux-design' },
] as const
export type CategoryValue = (typeof categories)[number]['value']
