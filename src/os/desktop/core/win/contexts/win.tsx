import { createContext } from "react";

export type WindowContextType = {
  zIndex: number;
  close: () => void;
  focus: () => void;
};

export const WindowContext = createContext<WindowContextType>({
  zIndex: 0,
  close: () => {},
  focus: () => {},
});

export const WindowProvider = WindowContext.Provider;
