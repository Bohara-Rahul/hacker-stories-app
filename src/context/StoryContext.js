import { createContext, useReducer, useCallback } from "react";
import storyApi from "../api/storyApi";
import useLocalStorage from "../hooks/useLocalStorage";

const storiesReducer = (state, action) => {
  switch(action.type) {
    case "SET_STORIES":
      return { ...state, stories: action.payload };
    case "REMOVE_STORY":
      return { loading: false, error: false, stories: state.stories.filter(story => story.objectID !== action.payload) }
    case "SET_ERROR":
      return { ...state, error: true };
    case "SET_LOADING":
      return { ...state, loading: true };
    default:
      return state;
  }
};

const initialState = {
  stories: [],
  loading: false,
  errror: false
};

const StoryContext = createContext();

const StoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storiesReducer, initialState);
  const [searchTerm, setSearchTerm] = useLocalStorage('search', 'React');

  const fetchStories = useCallback( async () => {
    const response = await storyApi.get(`/search?query=${searchTerm}`);
    dispatch({ type: 'SET_STORIES', payload: response.data.hits });
  }, [searchTerm]);

  const removeStory = (item) => {
    dispatch({ type: 'REMOVE_STORY', payload: item.objectID });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <StoryContext.Provider value={{
      state, fetchStories, removeStory, handleSearch, searchTerm
    }}
    >
      {children}
    </StoryContext.Provider>
  )

}

export default StoryContext;
export { StoryProvider };


