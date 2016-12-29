import React, { Component } from 'react'
import './side-column.css'
import { Button } from 'react-bootstrap'

function genButton (url, name) {
  return (
    <Button bsStyle='primary' bsSize='small' key={url + name}>
      <a href={url}>{name}</a>
    </Button>
  )
}

const buttons = [
 { url: 'http://cv.daviddias.me', name: 'cv.pdf' }
 // { url: '', name: '' },
]

/*
a(href='#aboutme') about me
a(href='#latest') latest
a(href='#endeavours') endeavours
a(href='#experience') experience
a(href='#academic') academic
a(href='#service') service
a(href='#awards') awards
a(href='#hobbies') hobbies
a(href='#lxjs') LXJS
a(href='#startupscholarship') Startup Scholarship
a(href='#deltaapp') DeltaAPP
a(href='#devfest') Google DevFest Portugal
a(href='#nodecopter') NodeCopter Lisbon
a(href='#requirelx') require('lx')
a(href='#nodeschool') nodeschool Lisbon
a(href='#docker-lisbon') docker-lisbon
a(href='#meteor-lisbon') meteor-lisbon
a(href='#gdg-lisbon') gdg-lisbon
a(href='#node-my-ride') Node My Ride
a(href='#scholarships') Scholarships
a(href='#certifications') Certifications
a(href='#ieee') IEEE
a(href='#google') GSA
*/

class SideColumn extends Component {
  render () {
    return (
      <div>
        <section className='tag-list'>
          { buttons.map((btn) => genButton(btn.url, btn.name)) }
        </section>

        <section id='bunker'>
          <a href='#bunker'><h2>where is my bunker</h2></a>
          <p>Currently based in Lisbon</p>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25492481.418606587!2d-9.1602037!3d38.743626600000006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331a61e4f33b%3A0x400ebbde49036d0!2sLisbon%2C+Portugal!5e0!3m2!1sen!2s!4v1419176645406'
            width='300'
            height='300'
            frameBorder='0'
            style={{ border: 0 }} />
        </section>

        <section id='reachout'>
          <a href='#reachout'><h2>feel free to reach out</h2></a>
          <p>
            You can find me on <a href='https://twitter.com/daviddias'>twitter</a>, <a href='https://pt.linkedin.com/in/diasdavid'> linkedin</a>, <a href='https://github.com/diasdavid'>github</a> and <a href='mailto:mail@daviddias.me'>e-mail</a>. I'm always eager to meet amazing people and make awesome stuff. Sometimes I write in my <a href='http://blog.daviddias.me'>blog</a>.
          </p>
        </section>

        <section>
          <a
            className='twitter-timeline'
            href='https://twitter.com/daviddias'
            data-widget-id='546661201862594562'>Tweets by @daviddias</a>
          <script dangerouslySetInnerHTML={{ __html:
            `
            !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','twitter-wjs');
            `}} />
        </section>

        <section>
          <iframe
            allowTransparency='true'
            frameBorder='0'
            scrolling='no'
            seamless='seamless'
            src='http://colmdoyle.github.io/gh-activity/gh-activity.html?user=diasdavid&type=user'
            width='300'
            height='300' />
        </section>
      </div>
    )
  }
}

export default SideColumn
