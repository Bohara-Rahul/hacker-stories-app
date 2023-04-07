import { useState, createContext } from "react";
// import useLocalStorage from "../utils/getLocalStorage";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark-theme')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )

};

export default ThemeContext;
export { ThemeProvider };