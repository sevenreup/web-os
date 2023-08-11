import { createContext } from "react";
import { App } from "../models/app";

export type SystemManagerContextType = {
  apps: App[];
  findApp: (id: string) => App | undefined;
};

export const SystemManagerContext = createContext<SystemManagerContextType>({
  apps: [],
  findApp: () => undefined,
});

export const SystemManagerProvider = SystemManagerContext.Provider;
