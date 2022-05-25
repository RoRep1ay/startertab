import { Option, ThemeSettings, TileId, UserSettings } from "@/types";

export const applyTheme = (theme: ThemeSettings) => {
  document.body.style.background = theme.globalSettings.backgroundColor;
  document.documentElement.style.setProperty(
    "--bg-color-tile1",
    theme.tile1.backgroundColor
  );
  document.documentElement.style.setProperty(
    "--bg-color-tile2",
    theme.tile2.backgroundColor
  );
  document.documentElement.style.setProperty(
    "--bg-color-tile3",
    theme.tile3.backgroundColor
  );
  document.documentElement.style.setProperty(
    "--bg-color-tile4",
    theme.tile4.backgroundColor
  );
  document.documentElement.style.setProperty(
    "--bg-color-tile5",
    theme.tile5.backgroundColor
  );
  document.documentElement.style.setProperty(
    "--bg-color-tile6",
    theme.tile6.backgroundColor
  );
  document.documentElement.style.setProperty(
    "--bg-color-tile7",
    theme.tile7.backgroundColor
  );
  document.documentElement.style.setProperty(
    "--bg-color-tile8",
    theme.tile8.backgroundColor
  );
  document.documentElement.style.setProperty(
    "--bg-color-tile9",
    theme.tile9.backgroundColor
  );
  document.documentElement.style.setProperty(
    "--bg-color-tile10",
    theme.tile10.backgroundColor
  );
  document.documentElement.style.setProperty(
    "--bg-color-tile11",
    theme.tile11.backgroundColor
  );
  document.documentElement.style.setProperty(
    "--text-color-tile1",
    theme.tile1.textColor
  );
  document.documentElement.style.setProperty(
    "--text-color-tile2",
    theme.tile2.textColor
  );
  document.documentElement.style.setProperty(
    "--text-color-tile3",
    theme.tile3.textColor
  );
  document.documentElement.style.setProperty(
    "--text-color-tile4",
    theme.tile4.textColor
  );
  document.documentElement.style.setProperty(
    "--text-color-tile5",
    theme.tile5.textColor
  );
  document.documentElement.style.setProperty(
    "--text-color-tile6",
    theme.tile6.textColor
  );
  document.documentElement.style.setProperty(
    "--text-color-tile7",
    theme.tile7.textColor
  );
  document.documentElement.style.setProperty(
    "--text-color-tile8",
    theme.tile8.textColor
  );
  document.documentElement.style.setProperty(
    "--text-color-tile9",
    theme.tile9.textColor
  );
  document.documentElement.style.setProperty(
    "--text-color-tile10",
    theme.tile10.textColor
  );
  document.documentElement.style.setProperty(
    "--text-color-tile11",
    theme.tile11.textColor
  );
};

export const sortOptionsIntoTileGroups = (
  options: Option[]
): Map<TileId, Option[]> => {
  const optionsInTileGroups: any = {};

  options.forEach((option) => {
    if (!option.tileId) {
      return;
    }
    if (!(option.tileId in optionsInTileGroups)) {
      optionsInTileGroups[option.tileId] = [option];
    } else {
      optionsInTileGroups[option.tileId] = [
        ...optionsInTileGroups[option.tileId],
        option,
      ];
    }
  });

  return optionsInTileGroups;
};

export const getThemeNames = (settings: UserSettings): string[] => {
  const themeNames: string[] = [];
  settings.themes.forEach((theme) => themeNames.push(theme.themeName));
  return themeNames;
};

export const getDefaultSettingForOption = (
  option: Option,
  currentThemeName: string
): string => {
  let defaultSetting =
    currentThemeName === "dark" ? option.darkDefault : option.lightDefault;

  // if there's no light/dark default there should be a regular default settings
  if (!defaultSetting) {
    defaultSetting = option.defaultSetting;
  }

  return defaultSetting ? defaultSetting : "";
};

export const getCurrentTheme = (
  settings: UserSettings,
  colorMode: string
): ThemeSettings => {
  const theme = settings.themes.find((theme) => theme.themeName === colorMode);
  if (!theme) {
    throw new Error("No change named " + colorMode);
  }

  return theme;
};
