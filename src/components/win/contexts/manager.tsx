import { createContext } from "react";

export type WindowManagerContextType = {
  openNewWindow: () => void;
};

export const WinManagerContext = createContext<WindowManagerContextType>({
  openNewWindow: () => {},
});

export const WinManagerProvider = WinManagerContext.Provider;
