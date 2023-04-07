import './App.css';
import { useEffect, useContext } from 'react';
import NewsList from './components/NewsList';
import StoryContext from './context/StoryContext';
import Search from './components/Search';
import Header from './components/Header';
import ThemeIcon from './components/ThemeIcon';
import ThemeContext from './context/ThemeContext';

const App = () => {
  const { fetchStories, state } = useContext(StoryContext);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    fetchStories()
  }, [fetchStories]);

  useEffect(() => {
    document.documentElement.className=theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div>
      <Header />
      <ThemeIcon />
      <Search />

      <hr />

      {state.error && <p>Something went wrong ...</p>}

      {state.loading 
        ? (
          <p>Loading...</p>
        ) 
        : (
          <NewsList />
        )}
    </div>  
  );
};

export default App;