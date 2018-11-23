import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {
  Grid,
  Row,
  Col,
  Label,
  Well
} from 'react-bootstrap'

import IncrementButton from '../src/Components/IncrementCounter/IncrementCounter';
import DecrementButton from '../src/Components/DecrementCounter/DecrementCounter';
import AddButton from '../src/Components/AddToCounter/AddToCounter';
import SubButton from '../src/Components/SubFromCounter/SubFromCounter';
import ResetButton from '../src/Components/ResetCounter/ResetCounter';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Row className="show-grid">
            <h1>
              <Label>
                Counter Application Using Redux
              </Label>
            </h1>
          </Row>
          <Row className="show-grid">

            <Col xs={4} md={4}></Col>
            <Col xs={4} md={4}><h3 style={{minWidth: "150px"}}>Counter : {this.props.ctr}</h3></Col>
            <Col xs={4} md={4}></Col>

          </Row>
          <Well style={{ maxWidth: "70%", margin: '0 auto 10px' }}>
          <Row>
            <Col xs={12} md={3}></Col>
            <Col xs={12} md={3}><IncrementButton /></Col>
            <Col xs={12} md={3}><DecrementButton /></Col>
            <Col xs={12} md={3}></Col>
          </Row>
          
          <Row>
            <Col xs={12} md={3}></Col>
            <Col xs={12} md={3}><AddButton /></Col>
            <Col xs={12} md={3}><SubButton /></Col>
            <Col xs={12} md={3}></Col>
          </Row>
          <Row>
            <Col xs={12} md={4}></Col>
            <Col xs={12} md={4}><ResetButton /></Col>
            <Col xs={12} md={4}></Col>
          </Row>
          </Well>
        </Grid>

      </div>
    );
  }
}

//Subscription
const mapStateToProps = (state) => {
  return {
    ctr: state.counter
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: 'INCREMENT' })
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
