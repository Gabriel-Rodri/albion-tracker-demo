import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import PagePlayer from '../src/components/pagePlayer.jsx';
import PageGuilds from './components/pageGuilds.jsx';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path={'/'} element={ <PagePlayer/> }/>
        <Route exact path={'/detailPlayer/:id'} />
        <Route exact path={'/guild'} element = { <PageGuilds/> } />
        <Route path={'*'}  />
      </Routes>
    </div>
  );
}

export default App;
