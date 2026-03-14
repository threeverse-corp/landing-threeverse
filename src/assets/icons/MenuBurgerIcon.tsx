import type { IconProps } from "../../types";

export const MenuBurgerIcon = ({ size = 39, ...props }: IconProps) => {
  return (
    <svg
      width={size}
      height={(Number(size) * 34) / 39}
      viewBox="0 0 39 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        d="M1 32.714h37M1 1h37M1 16.857h37"
      />
    </svg>
  );
};

export default MenuBurgerIcon;
