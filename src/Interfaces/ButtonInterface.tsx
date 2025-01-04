import { ReactElement } from "react";

export interface ButtonInterface {
    variant : "primary" | "secoundary";
    text : string;
    startIcon ?: ReactElement;
    fullWidth?: boolean;
    onClick?: () => void;
}