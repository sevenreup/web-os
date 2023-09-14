'use client';

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

export const getDesktopApps = (): WinApp[] => {
  const ids = localStorage.getItem("desktop")
    ? (JSON.parse(localStorage.getItem("desktop") as "") as string[])
    : [
        "apps/system/settings",
        "apps/system/taskmanager",
        "apps/system/explorer",
        "apps/user/chrome",
      ];
  return allApps.filter((app) => ids.includes(app.payload ?? ""));
};

export const getStartApps = () => {
  const pinned = localStorage.getItem("pinned")
    ? (JSON.parse(localStorage.getItem("pinned") as "") as string[])
    : [
        "apps/system/settings",
        "apps/system/taskmanager",
        "apps/system/explorer",
        "apps/user/chrome",
      ];
  const recent = localStorage.getItem("recent")
    ? (JSON.parse(localStorage.getItem("recent") as "") as string[])
    : [
        "apps/system/settings",
        "apps/system/taskmanager",
        "apps/system/explorer",
        "apps/user/chrome",
      ];
  return {
    pinned: allApps.filter((app) => pinned.includes(app.payload ?? "")),
    recent: allApps.filter((app) => recent.includes(app.payload ?? "")),
  };
};
