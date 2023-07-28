import Taskbar from "@/components/desktop/taskbar";
import AppIcon from "@/components/icon";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="m-0 p-0 overflow-y-hidden">
      <div className="h-[100vh] bg-center bg-cover bg-[url(https://images.frandroid.com/wp-content/uploads/2019/12/windows-10-wallpaper.jpg)]"></div>
      <Taskbar />
    </main>
  );
}
