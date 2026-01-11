export const ICON_PATHS = {
  'home': {
    d: 'M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z',
    viewBox: '0 0 16 16',
    isSolid: true
  },
  'chevron-right': {
    d: 'M9 18L15 12L9 6',
    viewBox: '0 0 24 24',
    isSolid: false
  }
} as const;

export type IconName = keyof typeof ICON_PATHS;