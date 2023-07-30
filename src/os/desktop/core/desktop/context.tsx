import { createContext } from "react";

export type DesktopContextType = {
  taskbar: {
    startMenuOpen: boolean;
    openStartMenu: () => void;
    closeStartMenu: () => void;
    toggleStartMenu: () => void;
    toggleNotificationCenter: () => void;
  };
};

export const DesktopContext = createContext<DesktopContextType>({
  taskbar: {
    startMenuOpen: false,
    openStartMenu: () => {},
    closeStartMenu: () => {},
    toggleStartMenu: () => {},
    toggleNotificationCenter: () => {},
  },
});

export const DesktopProvider = DesktopContext.Provider;
