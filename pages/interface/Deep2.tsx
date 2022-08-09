import { SetStateAction } from "react";
import DetailTitle from '../interface/DetailTitle'

export default interface Deep2 {
    [index: number]: {
        map(arg0: (sec: any) => JSX.Element): import("react").ReactNode;
        length: number; [index: number]: { 
            icon: string | undefined; 
            name: String; bg: SetStateAction<string>; 
            game: Boolean; 
            gameText: string | undefined; 
            id: Number; 
            detail: DetailTitle,
        }
};
}