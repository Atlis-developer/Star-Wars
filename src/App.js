import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ContentContainer from './components/Content/ContentContainer';



const App = () => {
  return (
    <div className="App">
      <Header/>
      <ContentContainer/>
      <Footer/>
    </div>
  );
}

export default App;
