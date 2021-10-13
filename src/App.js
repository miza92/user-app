import React from 'react';
import Body from './components/Body';
import Footer from './components/Footer';
import Head from './components/Head';
import Nav from './components/Nav';
import './App.css';



const App = () =>{ 
  return (
  <div>
    <Nav />
    <Head />
    <Body />
    <Footer />
  </div>
  );
}


export default App;