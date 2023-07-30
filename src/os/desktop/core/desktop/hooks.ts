import { useContext } from "react";
import { DesktopContext } from "./context";

export const useTaskbar = () => {
  const context = useContext(DesktopContext);

  return context.taskbar;
};
