// Utility to get style classes based on theme
export const getThemeClasses = (
  isDarkMode: boolean,
  themeStyles: { [key: string]: string }
) => {
  return isDarkMode ? themeStyles.dark : themeStyles.light;
};
