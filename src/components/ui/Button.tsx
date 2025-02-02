import { ReactElement } from "react";

export interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg" | "xl";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
  fullWidth?: boolean;
  loading?: boolean;
}

const variantStyles = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-200 text-purple-600",
};

const sizeStyles = {
  sm: "py-2 px-2 text-sm",
  md: "py-4 px-4 text-md",
  lg: "py-6 px-6 text-lg",
  xl: "w-full flex justify-center items-center",
};

const defaultStyles = "rounded-md p-4 flex font-light items-center";

export const Button = (props: ButtonProps) => {
  const { variant, size, text, startIcon, endIcon, onClick, fullWidth, loading } = props;

  return (
    <button
      onClick={onClick}
      className={`${variantStyles[variant]} ${defaultStyles} ${sizeStyles[size]} ${
        fullWidth ? "w-full" : ""
      } ${loading ? "opacity-45 cursor-not-allowed" : ""}`}
      disabled={loading}
    >
      {startIcon && <div className="pr-2">{startIcon}</div>}
      {text}
      {endIcon && <div className="pl-2">{endIcon}</div>}
    </button>
  );
};


{
  /* <Button variant= "primary" size="md" onClick={() => {}} text={"Share"} /> */
}
