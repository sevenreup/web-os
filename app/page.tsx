import {
  StyledText,
  TextStyles,
} from "@/src/components/text/styled/styled.text";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col justify-center items-center bg-[#c34854]">
      <iframe
        style={{
          border: "none",
        }}
        className="w-full h-2/4"
        src="https://rive.app/community/4115-8502-pomodoro-design-variation/embed"
        allowFullScreen
      ></iframe>
      <StyledText text="Serious" textStyle={TextStyles.sliced} />
      <h1 className="text-lg font-bold text-[#6a161e]">
        I am busy building (probably)... Look at the serious text
      </h1>
    </main>
  );
}
