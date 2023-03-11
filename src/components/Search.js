import { useContext } from "react";
import InputWithLabel from "./InputWithLabel";
import StoryContext from "../context/StoryContext";
import Button from "./Button";
import styles from "./Search.module.css";

const Search = () => {
  const { searchTerm, handleSearch } = useContext(StoryContext);

  return (
    <div className={styles['form-center']}>
      <InputWithLabel
        id="search"
        isFocused
        value={searchTerm}
        onInputChange={handleSearch}
      >
        <strong>Search:</strong>
      </InputWithLabel>
      <Button>Submit</Button>
    </div>
  );
};

export default Search;