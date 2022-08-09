import { SetStateAction } from "react";

export default interface DetailTitle {
    length: number;
    map(arg0: (obj: any) => JSX.Element): import("react").ReactNode; 
    [index: number]: {
        id: Number;
        title: String;
    }
}