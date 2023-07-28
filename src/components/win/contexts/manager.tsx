import { createContext } from "react";

export type WindowManagerContextType = {
  openNewWindow: (data: ShortcutData) => void;
};

export const WinManagerContext = createContext<WindowManagerContextType>({
  openNewWindow: (data: ShortcutData) => {},
});

export const WinManagerProvider = WinManagerContext.Provider;
