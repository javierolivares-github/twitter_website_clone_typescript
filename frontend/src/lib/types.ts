export type IconProps = {
  fillColor: "text-primary-50" | "text-secondary-40" | "text-black-900" | "text-gray-40";
  width: string;
  height:string;
  smWidth?: string;
  smHeight?: string;
  isFilled?: boolean;
}

export type TextProps = {
  children: string;
  weight: "font-bold" | "font-semibold" | "font-medium" | "font-normal" | "font-light";
  color: "text-secondary-15" | "text-secondary-50" | "text-gray-100" | "text-gray-40";
}

