import { ShortcutData } from "@/models/shortcut";
import { ReactNode } from "react";

export interface App {
  id: string;
  render: () => ReactNode;
  options?: {
    multiInstance: boolean;
  };
}


export interface AppAndData {
  app: App;
  data: ShortcutData;
}