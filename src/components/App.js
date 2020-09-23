import React from 'react';
import '../css/globals.css';
import Header from '../components/header';
import Overview from '../components/overview';
import TopCardsList from '../components/top-cards-list';
import Switch from './switch';

function App() {
  return (
    <>
      <Header>
        <Switch />
      </Header>
      <TopCardsList />
      <Overview />
    </>
  );
}

export default App;
