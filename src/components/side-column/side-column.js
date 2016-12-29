import React, { Component } from 'react'
import './side-column.css'
import { Button } from 'react-bootstrap'

function genButton (url, name) {
  return (
    <Button bsStyle='primary' bsSize='xsmall' key={url + name}>
      <a href={url}>{name}</a>
    </Button>
  )
}

const buttons = [
  // { url: 'cv.pdf', name: 'cv.pdf' }
  { url: 'docs/resume.pdf', name: 'resume.pdf' },
  { url: '#about-me', name: 'about me' },
  { url: '#latest', name: 'latest' },
  { url: '#endeavours', name: 'endeavours' },
  { url: '#experience', name: 'experience' },
  { url: '#academic', name: 'academic' },
  { url: '#service', name: 'service' },
  { url: '#awards', name: 'awards' },
  { url: '#lxjs', name: 'LXJS' },
  { url: '#startupscholarship', name: 'Startup Scholarship' },
  { url: '#deltaapp', name: 'DeltaAPP' },
  { url: '#devfest', name: 'Google DevFest Portugal' },
  { url: '#nodecopter', name: 'NodeCopter Lisbon' },
  { url: '#requirelx', name: 'require(\'lx\')' },
  { url: '#nodeschool', name: 'nodeschool Lisbon' },
  { url: '#docker-lisbon', name: 'Docker Lisbon' },
  { url: '#meteor-lisbon', name: 'Meteor Lisbon' },
  { url: '#gdg-lisbon', name: 'GDG Lisbon' },
  { url: '#node-my-ride', name: 'Node My Ride' },
  { url: '#scholarships', name: 'Scholarships' },
  { url: '#certifications', name: 'Certifications' },
  { url: '#google', name: 'Google Student Ambassador' },
  { url: '#ieee', name: 'IEEE' }
]

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

        {/*
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
        */}

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
