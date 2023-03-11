import { createContext } from "react";
// import useLocalStorage from "../utils/getLocalStorage";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // const [theme, setTheme] = getLocal('theme', 'dark');

  // const handleThemeChange = (themeValue) => {
  //   setTheme(themeValue);
  // } 

  return (
    <ThemeContext.Provider value={{ hello: 'hello' }}>
      {children}
    </ThemeContext.Provider>
  )

};

export default ThemeContext;