import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
export default App;
