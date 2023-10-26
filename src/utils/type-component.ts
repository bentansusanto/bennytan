import { ReactNode } from "react";

export interface ComponentProps {
    className? : any;
    children : ReactNode;
    onClick ? : void | any;
}