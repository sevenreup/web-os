import { useContext } from "react";
import { DesktopContext } from "./context";
import { StartMenuGroups } from "@/models/shortcut";

export const useTaskbar = () => {
  const context = useContext(DesktopContext);

  return context.taskbar;
};

export const useTaskbarGroups = (): StartMenuGroups => {
  const context = useContext(DesktopContext);

  return context.taskbar.getStartMenuGroups();
};
