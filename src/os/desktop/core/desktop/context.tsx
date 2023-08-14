import { ShortcutData, StartMenuGroups } from "@/models/shortcut";
import { createContext } from "react";

export type DesktopContextType = {
  taskbar: {
    startMenuOpen: boolean;
    openStartMenu: () => void;
    closeStartMenu: () => void;
    toggleStartMenu: () => void;
    toggleNotificationCenter: () => void;
    getStartMenuGroups: () => StartMenuGroups;
    getDesktopApps: () => ShortcutData[];
  };
};

export const DesktopContext = createContext<DesktopContextType>({
  taskbar: {
    startMenuOpen: false,
    openStartMenu: () => {},
    closeStartMenu: () => {},
    toggleStartMenu: () => {},
    toggleNotificationCenter: () => {},
    getStartMenuGroups: () => [],
    getDesktopApps: () => [],
  },
});

export const DesktopProvider = DesktopContext.Provider;
