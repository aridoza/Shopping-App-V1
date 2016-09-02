import React from 'react';
import helpers from '../utils/ajaxHelpers';
import { ListGroup, ListGroupItem, Grid, Row, Col, Clearfix } from 'react-bootstrap';
import { Parallax } from 'react-parallax';

const ProductDetail = React.createClass({

  getInitialState: function() {
    return {
      products: []
    };
  },

  componentDidMount: function() {
      helpers.getProducts()
      .then(function(response){
        this.setState({
          products: response.data
        });
      }.bind(this))
    },

  render() {

    let pdetailStyle = {
      display: 'block',
      position: 'relative',
      width: '100%',
      height: '100%',
      margin: '0 auto'
    }

    let shirtStyle = {
      display: 'block',
      width: '100%',
      borderTop: '2px solid #B8860B',
      borderBottom: '2px solid #B8860B',
      borderLeft: '2px solid white',
      background: 'white',
      backgroundColor: 'rgba(255,255,255,0.9)'
    }

    let shirtImageStyle = {
      display: 'block'
    }

    return(

      <div>
          <ul>
            {
              this.state.products.map(function(products, index) {
                return <Grid key={index} style={pdetailStyle}>
                          <Parallax bgImage="http://reanimated.lt/wp-content/uploads/2013/08/Sample-Programming-Code.jpg" strength={400}>
                            <Row className="show-grid" style={shirtStyle}>
                              <Col xs={6} md={4}>
                                <p style={shirtImageStyle}><img src={products.imageMain} width={250} height={250}/></p>
                              </Col>
                              <Col xs={12} md={8}>
                                <h3>{products.name}</h3>
                                <h5>$34.99</h5>
                              </Col>
                            </Row>
                            <br /> <br />
                          </Parallax>
                        </Grid>
              })
            }
          </ul>
      </div>
    );
  }
});

export default ProductDetail;
