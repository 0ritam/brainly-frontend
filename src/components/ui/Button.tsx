import { ReactElement } from "react";

export interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm" | "md"| "lg";
    text: string;
    startIcon?: ReactElement;  //? for making it optional in typsescipt
    endIcon?:ReactElement;
    onClick?: () => void;

}

const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-200 text-purple-600"
}

const sizeStyles = {
    "sm" :"py-2 px-2 text-sm",
    "md": "py-4 px-4 text-md",
    "lg" : "py-6 px-6 text-sm"
}

const defaultStyles = "rounded-md p-4 flex font-light items-center"

export const Button = (props: ButtonProps) => {
    return <button onClick={props.onClick} className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}>{props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null} {props.text} </button>
}

{/* <Button variant= "primary" size="md" onClick={() => {}} text={"Share"} /> */}