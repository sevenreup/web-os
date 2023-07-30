import { WinOptions } from "@/models/window";
import { createContext } from "react";

export type WindowManagerContextType = {
  openNewWindow: (data: ShortcutData, options?: WinOptions) => void;
};

export const WinManagerContext = createContext<WindowManagerContextType>({
  openNewWindow: (data: ShortcutData, options?: WinOptions) => {},
});

export const WinManagerProvider = WinManagerContext.Provider;
