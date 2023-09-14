"use client";

import { WinApp, allApps } from "../config/apps";

const getStorage = (key: string) => {
  // TODO: Fix this right now this will get ignored by next.js 13
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
  return null;
};

export const getTaskbarApps = (): WinApp[] => {
  const ids = (getStorage("taskbar") as string[]) ?? [
    "apps/system/settings",
    "apps/system/taskmanager",
    "apps/system/explorer",
    "apps/user/chrome",
  ];
  return allApps.filter((app) => ids.includes(app.payload ?? ""));
};

export const getDesktopApps = (): WinApp[] => {
  const ids = (getStorage("desktop") as string[]) ?? [
    "apps/system/settings",
    "apps/system/taskmanager",
    "apps/system/explorer",
    "apps/user/chrome",
  ];
  return allApps.filter((app) => ids.includes(app.payload ?? ""));
};

export const getStartApps = () => {
  const pinned = (getStorage("pinned") as string[]) ?? [
    "apps/system/settings",
    "apps/system/taskmanager",
    "apps/system/explorer",
    "apps/user/chrome",
  ];
  const recent = (getStorage("recent") as string[]) ?? [
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
