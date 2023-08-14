import { useContext } from "react";
import { DesktopContext } from "./context";
import { ShortcutData, StartMenuGroups } from "@/models/shortcut";

export const useTaskbar = () => {
  const context = useContext(DesktopContext);

  return context.taskbar;
};

export const useTaskbarGroups = (): StartMenuGroups => {
  const context = useContext(DesktopContext);

  return context.taskbar.getStartMenuGroups();
};


export const useDesktopApps = (): ShortcutData[] => {
  const context = useContext(DesktopContext);

  return context.taskbar.getDesktopApps();
};
