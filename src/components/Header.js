import { useState, useContext } from "react";
import styles from "./Header.module.css";
import { CiLight, CiDark } from "react-icons/ci";

const Header = () => {

  return (
    <header className={styles.center}>
      <h1>My Hacker Stories</h1>
      
      {/* <button className={styles.btn} onClick={handleClick}>
      { theme === 'dark' 
          ? <CiLight /> 
          : <CiDark /> 
      }
      </button> */}
    </header>
  );
};

export default Header;