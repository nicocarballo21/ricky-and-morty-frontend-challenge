import RickyLogoSVG from "./svg/RickyLogo.svg";
import RickyAndMortySVG from "./svg/RickyAndMortyTitle.svg";
import Image from "next/image";

type IconProps = {
  className?: string;
  width?: number;
  height?: number;
};

interface BaseIconProps extends IconProps {
  src: string;
  alt: string;
  priority?: boolean;
}

const BaseIcon = ({
  width,
  height,
  className,
  alt,
  src,
  priority,
}: BaseIconProps) => {
  return (
    <Image
      width={width}
      height={height}
      src={src}
      alt={alt}
      className={className ?? ""}
      priority={priority}
    />
  );
};

export const RickyLogo = ({
  width = 70,
  height = 50,
  className,
}: IconProps) => {
  return BaseIcon({
    src: RickyLogoSVG,
    alt: "Ricky Logo",
    width,
    height,
    className,
  });
};

export const RickyAndMortyTitle = ({
  width = 200,
  height = 60,
  className,
}: IconProps) => {
  return BaseIcon({
    src: RickyAndMortySVG,
    alt: "Ricky and Morty Title Logo",
    width,
    height,
    className,
    priority: true,
  });
};
