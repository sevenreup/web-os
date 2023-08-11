import { StartMenuGroups } from "@/models/shortcut";
import { createContext } from "react";

export type DesktopContextType = {
  taskbar: {
    startMenuOpen: boolean;
    openStartMenu: () => void;
    closeStartMenu: () => void;
    toggleStartMenu: () => void;
    toggleNotificationCenter: () => void;
    getStartMenuGroups: () => StartMenuGroups;
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
  },
});

export const DesktopProvider = DesktopContext.Provider;
