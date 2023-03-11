import './App.css';
import { useEffect, useContext } from 'react';
import NewsList from './components/NewsList';
import StoryContext from './context/StoryContext';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
  const { fetchStories, state } = useContext(StoryContext);

  useEffect(() => {
    fetchStories()
  }, [fetchStories]);

  return (
    <>
      <Header />
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
    </>  
  );
};

export default App;