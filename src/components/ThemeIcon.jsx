import { useContext } from "react"

import { CiLight } from "react-icons/ci" 
import { MdDarkMode } from "react-icons/md"

import styles from './ThemeIcon.module.css'
import ThemeContext from "../context/ThemeContext"

const ThemeIcon = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const handleThemeChange = () => {
    if (theme === 'dark-theme') {
      setTheme('light-theme')
    } else {
      setTheme('dark-theme')
    }
  }

  return (
    <div 
      className={styles["icon-theme"]} 
      onClick={handleThemeChange}
    >
      { theme === 'dark-theme' 
        ? (
            <CiLight size="35px" />
          )
        : (
            <MdDarkMode size="35px" />
          ) 
      }
    </div>
  )
}

export default ThemeIcon