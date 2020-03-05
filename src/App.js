
import React from 'react';
import './App.css';
import MovieList from './compents/MovieList';
import MyModal from './compents/MyModal';
import Search from './compents/Search';

function App() {
  return (
    <div className="App">
      <h1>Movie App Redux</h1>
      <Search />
      <MyModal editMode={false}/>
      <MovieList />
    </div>
  );
}

export default App;