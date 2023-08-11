import { useContext } from "react";
import { WinManagerContext } from "../contexts/manager";
import { ShortcutData } from "@/models/shortcut";

export const useOpenApp = (data: ShortcutData) => {
  const { openNewWindow } = useContext(WinManagerContext);
  return {
    open: () => openNewWindow(data)
  };
};
