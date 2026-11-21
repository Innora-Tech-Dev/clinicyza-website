/**
 * Global Ant Design theme — mirrors the CSS variables in src/app/globals.css.
 * Source: clinicyza-ui-design.pdf (Design System v1.0). Keep both files in sync.
 * Docs: https://ant.design/docs/react/customize-theme
 */

export const colors = {
  lavender: "#F3E8FF",
  lavender200: "#E6D4FE",
  lavender300: "#D4B8FC",
  white: "#FFFFFF",
  navy: "#0F1E4A",
  navy800: "#1B2C66",
  navy600: "#3A4A85",
  navy400: "#7A86B0",
  violet: "#6D4AE0",
  violetHalo: "rgba(109, 74, 224, 0.18)",
  hairline: "#E9E4F5",
  success: "#1F9D6B",
  warning: "#E8A33D",
  emergency: "#D63B4B",
  disabledBg: "#ECEBF2",
  disabledText: "#A4A9C2",
};

const focusHalo = `0 0 0 3px ${colors.violetHalo}`;

// Shared tokens for every text-like input (Input, Select, DatePicker, InputNumber…)
const inputTokens = {
  borderRadius: 14,
  borderRadiusLG: 14,
  borderRadiusSM: 10,
  activeBorderColor: colors.violet,
  hoverBorderColor: colors.lavender300,
  activeShadow: focusHalo,
  errorActiveShadow: "0 0 0 3px rgba(214, 59, 75, 0.15)",
  warningActiveShadow: "0 0 0 3px rgba(232, 163, 61, 0.15)",
  paddingInline: 16,
};

const themeConfig = {
  cssVar: { prefix: "ant" },
  hashed: false,
  token: {
    // Colour
    colorPrimary: colors.navy,
    colorInfo: colors.violet,
    colorSuccess: colors.success,
    colorWarning: colors.warning,
    colorError: colors.emergency,
    colorLink: colors.violet,
    colorLinkHover: "#5A38CC",

    colorText: colors.navy,
    colorTextSecondary: colors.navy600,
    colorTextTertiary: colors.navy400,
    colorTextQuaternary: colors.disabledText,
    colorTextPlaceholder: colors.navy400,
    colorTextHeading: colors.navy,

    colorBgLayout: colors.white,
    colorBgContainer: colors.white,
    colorBgContainerDisabled: colors.disabledBg,
    colorBgSpotlight: colors.navy, // tooltip background
    colorBorder: colors.hairline,
    colorBorderSecondary: colors.hairline,
    colorFillSecondary: colors.lavender,
    controlItemBgActive: colors.lavender,
    controlItemBgHover: colors.lavender,
    controlOutline: colors.violetHalo,
    controlOutlineWidth: 3,

    // Typography
    fontFamily: "var(--font-family-body)",
    fontSize: 16,
    fontSizeSM: 14,
    fontSizeLG: 18,
    fontSizeHeading1: 64,
    fontSizeHeading2: 44,
    fontSizeHeading3: 24,
    fontWeightStrong: 600,
    lineHeight: 1.6,

    // Shape
    borderRadius: 14,
    borderRadiusSM: 10,
    borderRadiusLG: 20,
    borderRadiusXS: 6,

    // Size
    controlHeight: 48,
    controlHeightSM: 40,
    controlHeightLG: 56,

    // Depth
    boxShadow: "0 12px 40px rgba(15, 30, 74, 0.08)",
    boxShadowSecondary: "0 24px 64px rgba(15, 30, 74, 0.18)",

    // Motion
    motionDurationMid: "0.22s",
  },
  components: {
    Button: {
      borderRadius: 9999,
      borderRadiusLG: 9999,
      borderRadiusSM: 9999,
      fontWeight: 600,
      primaryShadow: "none",
      defaultShadow: "none",
    },
    Input: inputTokens,
    InputNumber: inputTokens,
    Select: {
      ...inputTokens,
      activeOutlineColor: colors.violetHalo,
      optionSelectedBg: colors.lavender,
      optionActiveBg: colors.lavender,
    },
    DatePicker: {
      ...inputTokens,
      cellActiveWithRangeBg: colors.lavender,
    },
    Checkbox: {
      borderRadiusSM: 6,
      colorPrimary: colors.navy,
    },
    Radio: {
      colorPrimary: colors.navy,
    },
    Switch: {
      colorPrimary: colors.navy,
      colorPrimaryHover: colors.navy800,
      handleSize: 20,
      trackHeight: 26,
      trackMinWidth: 48,
    },
    Collapse: {
      headerBg: colors.white,
      contentBg: colors.white,
      borderRadiusLG: 20,
    },
    Tooltip: {
      colorBgSpotlight: colors.navy,
      borderRadius: 10,
    },
    Modal: {
      borderRadiusLG: 20,
      titleFontSize: 20,
    },
    Breadcrumb: {
      itemColor: colors.navy600,
      lastItemColor: colors.navy,
      linkColor: colors.navy600,
      linkHoverColor: colors.violet,
      separatorColor: colors.navy400,
    },
    Segmented: {
      trackBg: colors.lavender,
      itemSelectedBg: colors.navy,
      itemSelectedColor: colors.white,
      itemColor: colors.navy600,
      itemHoverColor: colors.navy,
      itemHoverBg: colors.lavender200,
      borderRadius: 9999,
      borderRadiusSM: 9999,
      trackPadding: 4,
    },
    Pagination: {
      itemActiveBg: colors.navy,
      itemActiveColor: colors.white,
      itemActiveColorHover: colors.white,
      itemBg: colors.white,
      borderRadius: 9999,
      itemSize: 40,
    },
    Form: {
      labelColor: colors.navy,
      labelFontSize: 14,
      labelRequiredMarkColor: colors.emergency,
      verticalLabelPadding: "0 0 8px",
      itemMarginBottom: 20,
    },
    Notification: {
      borderRadiusLG: 16,
    },
    Message: {
      borderRadiusLG: 14,
    },
  },
};

export default themeConfig;
