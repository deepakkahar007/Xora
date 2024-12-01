import clsx from "clsx";
import { ReactNode } from "react";
import Marker from "./Marker";

type ButtonType = {
  icon: string;
  children: ReactNode;
  href?: string;
  markerFill?: string;
  containerClassname?: string;
  onClickFunction?: () => void;
};

const Button = ({
  icon,
  href,
  markerFill,
  onClickFunction,
  containerClassname,
  children,
}: ButtonType) => {
  const InnerText = () => (
    <>
      <span className="g4 inner-before relative flex min-h-[60px] items-center overflow-hidden rounded-2xl px-4 group-hover:before:opacity-100">
        <span className="absolute -left-[1px]">
          <Marker fill={markerFill} />
        </span>
        {icon && (
          <img
            src={icon}
            alt="icon"
            className="z-10 mr-5 size-10 object-contain"
          />
        )}
        <span className="base-bold relative z-2 font-poppins uppercase text-p1">
          {children}
        </span>
      </span>
      <span className="glow-before glow-after" />
    </>
  );

  return href ? (
    <a
      href={href}
      className={clsx(
        "g5 group relative rounded-2xl p-0.5 shadow-500",
        containerClassname,
      )}
    >
      <InnerText />
    </a>
  ) : (
    <button
      className={clsx("g5 group relative rounded-2xl p-0.5 shadow-500")}
      onClick={onClickFunction}
    >
      <InnerText />
    </button>
  );
};

export default Button;
