import React, { Component } from 'react'
import './header.css'
import { Row, Col } from 'react-bootstrap'

class Header extends Component {
  render () {
    return (
      <header>
        <div className='container'>
          <Row>
            <Col md={3}>
              <img
                className='profile-pic'
                src='img/profile_250x250.jpg'
                alt='David' />
            </Col>
            <Col md={1} />
            <Col md={8}>
              <h1>
                Howdy! I am David, a Peer-to-Peer Software Engineer, upgrading the Web at <a href='http://ipn.io'>Protocol Labs.</a> Building <a href='http://ipfs.io'>@IPFS</a>. Made <a href='http://lxjs.org/'>@lxjs</a> and <a href='http://startupscholarship.org'>@startupscholars</a>.
              </h1>
            </Col>
          </Row>
        </div>
      </header>
    )
  }
}

export default Header
