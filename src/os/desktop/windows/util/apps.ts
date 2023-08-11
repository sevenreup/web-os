import { WinApp, allApps } from "../config/apps";

export const getTaskbarApps = (): WinApp[] => {
  const ids = localStorage.getItem("taskbar")
    ? (JSON.parse(localStorage.getItem("taskbar") as "") as string[])
    : [
        "apps/system/settings",
        "apps/system/taskmanager",
        "apps/system/explorer",
        "apps/user/chrome",
      ];
  return allApps.filter((app) => ids.includes(app.payload ?? ""));
};
