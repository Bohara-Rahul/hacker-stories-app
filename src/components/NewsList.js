import { useContext } from "react";
import StoryContext from "../context/StoryContext";
import NewsItem from "./NewsItem";
import styles from "./NewsList.module.css";

const NewsList = () => {
  const { state } = useContext(StoryContext);

  return (
    <ul className={styles.list}>
      {state.stories.map((story) => {
        return (
          <NewsItem 
            key={story.objectID} 
            story={story} 
          />
          )
      })}
    </ul>
  );
};

export default NewsList;