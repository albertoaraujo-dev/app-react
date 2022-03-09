// color palette
const PRIMARY_NORMAL = '#363b4e'; //'#c4bbf0';
const PRIMARY_LIGHT = '#363b4e';
const SECONDARY_NORMAL = '#c4bbf0'; //'#4f3b78';
const INK_LIGHT = '#505568';
const INK_NORMAL = '#363b4e';
const CLOUD_NORMAL = '#eff2f5'; //'#c4bbf0';
const CLOUD_DARK = '#363b4e'; //'#e2e6ea';
const SHADOW_COLOR_DARK = 'rgba(0, 0, 0, 0.3)';
const SHADOW_COLOR_DARKER = 'rgba(0, 0, 0, 0.6)';

const COMMON_COLORS = {
  backgroundPrimary: PRIMARY_NORMAL,
  backgroundPrimaryHover: SECONDARY_NORMAL,
  backgroundSidebar: PRIMARY_LIGHT,
  buttonBackground: CLOUD_NORMAL,
  buttonToggleBackground: PRIMARY_LIGHT,
  buttonBackgroundHover: SECONDARY_NORMAL,
  buttonText: PRIMARY_NORMAL,
  buttonTextHover: CLOUD_NORMAL,
  textSecondary: SECONDARY_NORMAL,
  textWhite: CLOUD_NORMAL,
  navbarBoxShadow: SHADOW_COLOR_DARK,
  buttonBoxShadow: SHADOW_COLOR_DARKER,
  projectBoxShadow: SHADOW_COLOR_DARK,
};

export const THEME_LIGHT_MODE = {
  backgroundNormal: CLOUD_NORMAL,
  backgroundNormalHover: CLOUD_DARK,
  textNormal: INK_NORMAL,
  textPrimary: PRIMARY_NORMAL,
  ...COMMON_COLORS,
};
export const THEME_DARK_MODE = {
  backgroundNormal: INK_NORMAL,
  backgroundNormalHover: INK_LIGHT,
  textNormal: CLOUD_DARK,
  textPrimary: PRIMARY_NORMAL,
  ...COMMON_COLORS,
};

export const MEDIA_QUERY_BREAKPOINT = {
  TABLET: 769, // px
  MOBILE_L: 496, // px
  MOBILE_M: 360, // px
};

export const CSS_MEDIA_QUERY = {
  MIN_TABLET: `(min-width: ${MEDIA_QUERY_BREAKPOINT.TABLET}px)`,
  MIN_MOBILE_L: `(min-width: ${MEDIA_QUERY_BREAKPOINT.MOBILE_L}px)`,
  MIN_MOBILE_M: `(min-width: ${MEDIA_QUERY_BREAKPOINT.MOBILE_L}px)`,
};
