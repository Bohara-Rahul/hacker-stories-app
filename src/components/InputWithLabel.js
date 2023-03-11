import { useEffect, useRef } from "react";
import styles from "./InputWithLabel.module.css";

const InputWithLabel = ({ id, value, onInputChange, type="text", children, isFocused }) => {
  const inputRef = useRef();
 
  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
      <>
        <label 
          className={styles.label} 
          htmlFor={id}
        >
          {children}
        </label>
        <input 
          ref={inputRef}
          id={id} 
          type={type}
          value={value}
          onChange={onInputChange} 
        /> 
      </>
  );
};

export default InputWithLabel;