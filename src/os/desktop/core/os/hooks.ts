import { useContext } from "react";
import { SystemManagerContext } from "./context";
import { App } from "../models/app";

export const useFindApp = (shortcut: ShortcutData): App | undefined => {
  const { systemApps, userApps } = useContext(SystemManagerContext);
  if (shortcut.target.includes("apps/user/")) {
    const app = shortcut.target.split("apps/user/")[1];
    return userApps.get(app);
  } else {
    const app = shortcut.target.split("apps/system/")[1];
    return systemApps.get(app);
  }
};
