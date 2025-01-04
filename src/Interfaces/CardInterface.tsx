import { ReactElement } from "react";

export interface CardInterface{
    type: "youtube" | "tweet";
    title: string;
    link: string;
    startIcon : ReactElement;
}