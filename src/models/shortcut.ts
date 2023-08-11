export type  ShortcutData = {
  name: string;
  icon: string;
  type: "app" | "action" | "short";
  action?: "EXTERNAL" | "APP" | "STARTMENU" | "SEARCHMENU" | "WIDGETS";
  payload?: string;
}
