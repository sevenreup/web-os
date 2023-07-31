import { cn } from "@/lib/utils";
import React from "react";
import {
  BsGoogle as GoogleIcon,
  BsAndroid2 as AndroidDefIcon,
  BsWhatsapp as WhatsappIcon,
  BsCameraVideo as CameraIcon,
  BsBrowserChrome as ChromeIcon,
} from "react-icons/bs";
import { TbBrandGooglePhotos as GooglePhotosIcon } from "react-icons/tb";
type Props = {
  icon?: string;
  appId: string;
};

export const AndroidIcon = ({ icon, appId }: Props) => {
  return (
    <button
      className={cn(
        "h-16 w-16 flex justify-center items-center rounded-full",
        "bg-gray-500 text-white"
      )}
    >
      {React.createElement(getIconForApp(appId), { className: "h-8 w-8" })}
    </button>
  );
};

const getIconForApp = (appId: string): any => {
  if (appId == "google") {
    return GoogleIcon;
  } else if (appId == "whatsapp") {
    return WhatsappIcon;
  } else if (appId == "camera") {
    return CameraIcon;
  } else if (appId == "chrome") {
    return ChromeIcon;
  } else if (appId == "photos") {
    return GooglePhotosIcon;
  } else {
    return AndroidDefIcon;
  }
};
