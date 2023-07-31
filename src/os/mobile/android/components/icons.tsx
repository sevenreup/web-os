import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
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
        "h-12 w-12 flex justify-center items-center rounded-full",
        "bg-gray-500 text-white"
      )}
    >
      {getIconForApp(appId)}
    </button>
  );
};

const getIconForApp = (appId: string): ReactNode => {
  if (appId == "google") {
    return <GoogleIcon />;
  } else if (appId == "whatsapp") {
    return <WhatsappIcon />;
  } else if (appId == "camera") {
    return <CameraIcon />;
  } else if (appId == "chrome") {
    return <ChromeIcon />;
  } else if (appId == "photos") {
    return <GooglePhotosIcon />;
  } else {
    return <AndroidDefIcon />;
  }
};
