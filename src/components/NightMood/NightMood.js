import { useState, createContext } from "react";
import './NightMood.css';
import { Switch } from "@mui/material";


export const ThemeContext = createContext(null);

const NightMood = () => {
 const  [theme, setTheme] = useState("dark")

  const toggle  = () => {
    setTheme((current) => (current === "light" ? "dark": "light"))
  }
  return(
    <ThemeContext.Provider value={{theme, toggle }}>
      <div id={theme}>
          <Switch onChange={toggle} />
      </div> 
    </ThemeContext.Provider>
  )
}


export default NightMood;