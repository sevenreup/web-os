import { ShortcutData } from "@/models/shortcut";

type systemApps =
  | "STARTMENU"
  | "SEARCHMENU"
  | "TASKMANAGER"
  | "SETTINGS"
  | "EXPLORER"
  | "MSEDGE"
  | "WNSTORE"
  | "CALCUAPP"
  | "CAMERA"
  | "OOBE"
  | "NOTEPAD"
  | "SPOTIFY";

export type WinApp = {} & ShortcutData;

export const allApps: WinApp[] = [
  {
    name: "Start",
    icon: "home.png",
    type: "action",
    action: "STARTMENU",
  },
  {
    name: "Search",
    icon: "search.png",
    type: "action",
    action: "SEARCHMENU",
  },
  {
    name: "Widget",
    icon: "widget",
    type: "action",
    action: "WIDGETS",
  },
  {
    name: "Settings",
    icon: "settings.png",
    type: "app",
    payload: "apps/system/settings",
  },
  {
    name: "Task Manager",
    icon: "taskmanager.png",
    type: "app",
    payload: "apps/system/taskmanager",
  },
  {
    name: "File Explorer",
    icon: "explorer.png",
    type: "app",
    payload: "apps/system/explorer",
  },
  {
    name: "Browser",
    icon: "edge.png",
    type: "app",
    payload: "edge",
  },

  {
    name: "Store",
    icon: "store.png",
    type: "app",
    payload: "apps/system/store",
  },
  {
    name: "Recycle Bin",
    icon: "bin0.png",
    type: "app",
    payload: "apps/system/recyclebin",
  },

  {
    name: "Alarms",
    icon: "alarm.png",
    type: "app",
    payload: "apps/system/alarms",
  },
  {
    name: "Calculator",
    icon: "calculator.png",
    type: "app",
    payload: "apps/system/calculator",
  },
  {
    name: "Calendar",
    icon: "calendar.png",
    type: "app",
    payload: "apps/system/calendar",
  },
  {
    name: "Camera",
    icon: "camera.png",
    type: "app",
    payload: "apps/system/camera",
  },
  {
    name: "Your Phone",
    icon: "yphone.png",
    type: "app",
    payload: "apps/system/yourphone",
  },
  {
    name: "Feedback",
    icon: "feedback.png",
    type: "app",
    payload: "apps/system/feedback",
  },
  {
    name: "Get Started",
    icon: "getstarted.png",
    type: "app",
    payload: "apps/system/getstarted",
  },
  {
    name: "Groove Music",
    icon: "groove.png",
    type: "app",
    payload: "apps/system/groovemusic",
  },
  {
    name: "Help",
    icon: "help.png",
    type: "app",
    payload: "apps/system/help",
  },
  {
    name: "Mail",
    icon: "mail.png",
    type: "app",
    payload: "apps/system/mail",
  },
  {
    name: "Movies",
    icon: "movies.png",
    type: "app",
    payload: "apps/system/movies",
  },
  {
    name: "Xbox",
    icon: "xbox.png",
    type: "app",
    payload: "apps/system/xbox",
  },
  {
    name: "Office",
    icon: "msoffice.png",
    type: "app",
    payload: "apps/system/office",
  },
  {
    name: "Narrator",
    icon: "narrator.png",
    type: "app",
    payload: "apps/system/narrator",
  },
  {
    name: "News",
    icon: "news.png",
    type: "app",
    payload: "apps/system/news",
  },
  {
    name: "Notepad",
    icon: "notepad.png",
    type: "app",
    payload: "apps/system/notepad",
  },
  {
    name: "Sticky Notes",
    icon: "notes.png",
    type: "app",
    payload: "apps/system/notes",
  },
  {
    name: "OneDrive",
    icon: "oneDrive.png",
    type: "app",
    payload: "apps/system/onedrive",
  },
  {
    name: "OneNote",
    icon: "onenote.png",
    type: "app",
    payload: "apps/system/onenote",
  },
  {
    name: "Outlook",
    icon: "outlook.png",
    type: "app",
    payload: "apps/system/outlook",
  },
  {
    name: "People",
    icon: "people.png",
    type: "app",
    payload: "apps/system/people",
  },
  {
    name: "Photos",
    icon: "photos.png",
    type: "app",
    payload: "apps/system/photos",
  },
  {
    name: "Security",
    icon: "security.png",
    type: "app",
    payload: "apps/system/security",
  },
  {
    name: "Spotify",
    icon: "spotify.png",
    type: "app",
    payload: "apps/user/spotify",
  },
  {
    name: "Snipping Tool",
    icon: "snip.png",
    type: "app",
    payload: "apps/system/apps/system/snippingtool",
  },

  {
    name: "Teams",
    icon: "teams.png",
    type: "app",
    payload: "apps/system/apps/system/teams",
  },
  {
    name: "Terminal",
    icon: "terminal.png",
    type: "app",
    payload: "apps/system/apps/system/terminal",
  },
  {
    name: "Tips",
    icon: "tips.png",
    type: "app",
    payload: "apps/system/apps/system/tips",
  },
  {
    name: "To Do",
    icon: "todo.png",
    type: "app",
    payload: "apps/system/apps/system/todo",
  },
  {
    name: "Maps",
    icon: "maps.png",
    type: "app",
    payload: "apps/system/apps/system/maps",
  },
  {
    name: "Voice Recorder",
    icon: "voice.png",
    type: "app",
    payload: "apps/system/apps/system/voicerecorder",
  },
  {
    name: "Weather",
    icon: "weather.png",
    type: "app",
    payload: "apps/system/weather",
  },
  {
    name: "Whiteboard",
    icon: "board.png",
    type: "app",
    payload: "apps/system/whiteboard",
  },
  {
    name: "Cortana",
    icon: "cortana.png",
    type: "app",
    payload: "apps/system/cortana",
  },
  {
    name: "Chrome",
    icon: "chrome.svg",
    type: "app",
    payload: "apps/user/chrome",
  },
  {
    name: "Figma",
    icon: "figma.png",
    type: "app",
    payload: "apps/user/figma",
  },
];
