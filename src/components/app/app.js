import React, { Component } from 'react'
import './app.css'
import { Row, Col } from 'react-bootstrap'
import Header from '../header'
import MainColumn from '../main-column'
import SideColumn from '../side-column'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <div className='container'>
          <Row>
            <Col md={7}>
              <MainColumn />
            </Col>
            <Col md={1} />
            <Col md={4}>
              <SideColumn />
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default App
