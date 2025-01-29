import { useContext,createContext } from "react";

export const ThemeCreate = createContext({
    theme: "Light",
    darktheme: ()=>{},
    lighttheme:()=>{},
})
export const ThemeProvider =  ThemeCreate.Provider

export default function useTheme(){
    return useContext(ThemeCreate)
}