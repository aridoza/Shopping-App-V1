import React from 'react';

const Home = React.createClass({
  render(){

    let homeStyle = {
      display: 'block',
      width: '100%',
      height: '100%'
    }

    return(
      <div style={homeStyle}>
          <h1 className="home">Brand Logo</h1>
          <h3>Company Slogan</h3>
          {this.props.children}
      </div>
    )
  }
});

export default Home;
