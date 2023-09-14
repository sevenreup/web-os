import { ShortcutData } from "./shortcut";

export interface IDescriptor {
  id: string;
  zIndex: number;
  payload: ShortcutData;
}
