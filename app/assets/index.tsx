import RickyLogoSVG from "./svg/RickyLogo.svg";
import RickyAndMortySVG from "./svg/RickyAndMortyTitle.svg";
import Image from "next/image";

type IconProps = {
  className?: string;
  size?: number;
};

interface BaseIconProps extends IconProps {
  src: string;
  alt: string;
  priority?: boolean;
}

const BaseIcon = ({ size, className, alt, src, priority }: BaseIconProps) => {
  return (
    <Image
      width={size}
      height={size}
      src={src}
      alt={alt}
      className={className ?? ""}
      priority={priority}
    />
  );
};

export const RickyLogo = ({ size = 70, className }: IconProps) => {
  return BaseIcon({
    src: RickyLogoSVG,
    alt: "Ricky Logo",
    className,
    size,
  });
};

export const RickyAndMortyTitle = ({ size = 200, className }: IconProps) => {
  return BaseIcon({
    src: RickyAndMortySVG,
    alt: "Ricky and Morty Title Logo",
    className,
    size,
    priority: true,
  });
};
