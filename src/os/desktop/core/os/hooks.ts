import { useContext } from "react";
import { SystemManagerContext } from "./context";
import { AppAndData } from "../models/app";
import { ShortcutData } from "@/models/shortcut";

export const useFindApp = (shortcut: ShortcutData): AppAndData | undefined => {
  const { apps } = useContext(SystemManagerContext);
  var app = apps.find((app) => app.id === shortcut.payload);
  if (app) {
    return {
      app,
      data: shortcut,
    };
  }
};

export const useSystemManager = () => {
  const value = useContext(SystemManagerContext);
  return value;
};
