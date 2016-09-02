import React from 'react';
import Home from '../components/Home';
import Header from '../components/Header';

const App = React.createClass({

  render: function(){
    return(
      <div className="app-container">
        <Header/>
        <Home/>
      </div>
    )
  }
});

export default App;
