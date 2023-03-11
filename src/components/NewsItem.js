import { useContext } from "react";
import StoryContext from "../context/StoryContext";
import styles from "./NewsItem.module.css";

const NewsItem = ({ story }) => {
  const { removeStory } = useContext(StoryContext);

  const handleRemove = () => {
    removeStory(story);
  };

  return (
    <li className={styles['list-item']}>
      <article className={styles.desc}>
      <span className={styles.block}>
        <a 
          href={story.url}
          target="_blank"
          rel="noreferrer"
        >
          {story.title}
        </a>
      </span>

        <span className={styles.block}>By: {story.author}</span>
        <span className={styles.block}>No, of comments: {story.num_comments}</span>
        <span className={styles.block}>Points: {story.points}</span>
        </article>  
        <span>
          <button type="button" onClick={handleRemove}>
            Dismiss
          </button>
        </span>
      
    </li>
  );
};

export default NewsItem;