import React, { Component } from 'react'
import './main-column.css'

class MainColumn extends Component {
  render () {
    return (
      <div>
        <section id='about-me'>
          <a href='#about-me'><h1>about me</h1></a>
          <p>I consider myself to be one from many™ lucky bastards™ that found their opportunity to work with the most hard working and passionate people in humbling and encouraging endeavour such as <a href='http://lxjs.org'>LXJS</a>, the Lisbon Javascript Conference and <a href='http://startupscholarship.org'>Startup Scholarship</a> the first startup internship summer program in Portugal with a summer school and immersion program. I've a MSc in Engineering with major in Peer-to-Peer Networks from <a href='http://tecnico.ulisboa.pt/en/'>Technical University of Lisbon</a>.</p>
        </section>

        <section id='latest'>
          <a href='//blog.daviddias.me'><h1>latest on my blog</h1></a>
          <div className='well well-sm'>
            <a href='http://blog.daviddias.me/2015/03/22/enter-webrtc-explorer'>Mar 22 2014 | webrtc-explorer - Resource Discovery for decentralized browser networks</a>
          </div>
          <div className='well well-sm'>
            <a href='http://blog.daviddias.me/2014/12/20/webrtc-ring'>Dec 20 2014 | Resource discovery through WebRTC - webrtc-ring</a>
          </div>
          <div className='well well-sm'>
            <a href='http://blog.daviddias.me/2014/07/20/TriConf-2014'>Jul 20 2014 | TriConfidents</a>
          </div>
          <div className='well well-sm'>
            <a href='http://blog.daviddias.me/2014/02/01/get-your-feet-wet-with-docker'>Feb 01 2014 | Get your feet wet with docker</a>
          </div>
        </section>

        <section id='endeavours'>
          <a href='#endeavours'><h1>endeavours</h1></a>
          <ul>
            <li id='lxjs'>LXJS - Lisbon Javascript Conference</li>
            <li id='startupscholarship'>Startup Scholarship</li>
            <li id='deltaapp'>DeltaAPP</li>
            <li id='devfest'>Google DevFest Portugal</li>
            <li id='nodecopter'>NodeCopter Lisbon</li>
            <li id='requirelx'>require('lx')</li>
            <li id='nodeschool'>nodeschool Lisbon</li>
            <li id='docker-lisbon'>docker-lisbon</li>
            <li id='meteor-lisbon'>meteor-lisbon</li>
            <li id='gdg-lisbon'>gdg-lisbon</li>
            <li id='node-my-ride'>Node My Ride</li>
            <li id='node=security-project'>Node Security Project</li>
          </ul>
        </section>

        <section id='experience'>
          <a href='#experience'><h1>experience</h1></a>
          <ul>
            <li>2012 | Entertainer and Supervisor at Children/Teenager Summer Camp</li>
            <li>2013 | Node Firm Summer Intern</li>
            <li>2013 - 2014 | Node Firm Node.js Engineer</li>
            <li>2014 - 2015 | &yet ^Lift Node.js Engineer and client enthusiast</li>
            <li>2013 - 2015 | INESC-ID Lisbon Researcher</li>
            <li>2015 - present | Protocol Labs Peer-to-Peer Software Engineer</li>
          </ul>
        </section>

        <section id='education'>
          <a href='#education'><h1>education</h1></a>
          <h4>degree</h4>
          <ul>
            <li>BSc in Communication Networks</li>
            <li>MSc with Major in Peer-to-Peer Networks</li>
          </ul>
          <h4>fun academic projects</h4>
          <ul>
            <li><a href='https://github.com/diasdavid/webrtc-explorer'>First browser WebRTC based DHT (Distributed Hash Table)</a></li>
            <li><a href='https://github.com/diasdavid/METI-EADW'>Natural Language Processing for Sentiment Analysis on Politics news (understand the opion of the population)</a></li>
            <li><a href='https://github.com/diasdavid/METI-PADI'>PADIFS - Distributed File System built on C#</a></li>
            <li><a href='https://github.com/diasdavid/MERC-CC'>Hadoop Map Reduce based Weather Data Processing</a></li>
            <li><a href='https://github.com/diasdavid/METI-AIAC'>Smart Card data encryption and digital signatures for email based transport</a></li>
            <li><a href='http://www.slideshare.net/ArturBalanuta/the-godfather-16735322'>Godfather - P2P based botnet using Pastry routing algorithm and Planet Lab decentralized network</a></li>
          </ul>

          <h4 id='scholarships'>research scholarships</h4>
          <ul>
            <li>2011 | IST Math Department Researcher for Ops Infrastructure.</li>
            <li>2012 | IST Researcher - Develop Productivity Courses for High School professors</li>
            <li>2014 | INESC-ID + FCT European Project, Synergy</li>
          </ul>

          <h4 id='certifications'>certifications</h4>
          <ul>
            <li>2010 | Android 101 - GPS and Maps API by Opensoft Soluções Informáticas, Lda</li>
            <li>2010 | IEEE Teacher In-Service Program (TISP) by IEEE EAB</li>
            <li>2010 | Advanced Linux by NPGFC-IST</li>
            <li>2012 | Animator and Field Monitor for Teenager Vacation Camps by Run&Slide</li>
            <li>2014 | PADI Open Water Scuba Diver by Haliotis</li>
          </ul>
        </section>

        <section id='talks'>
          <a href='#talks'><h1>publications and talks</h1></a>
          <ul>
            <li>Jun 2015 | <a href='http://www.slideshare.net/DavidDias11/understanding-the-community-lifecycle'>MediterraneaJS - Understanding the lifecycle of a community</a></li>
            <li>May 2015 | <a href='http://www.slideshare.net/DavidDias11/p2p-resource-discovery-for-the-browser'>Data Terra Nemo, the P2P Conf - webrtc-explorer, distributed browser computing platform using volunteered shared resources</a></li>
            <li>Feb 2015 | <a href='https://www.youtube.com/watch?v=fNQGGGE__zI'>OpoJS - Resource Discovery for the Web Platform on top of a P2P Overlay Network powered by WebRTC</a></li>
            <li>Jul 2014 | <a href='http://slideshare.net/DavidDias11/triconf-2014-lxjs-the-lisbon-javascript-conference'>TriConf - Why, when and how LXJS Started - Empowering communities through open source</a></li>
            <li>Apr 2014 | <a href='http://slideshare.net/DavidDias11/js-conf-br-securing-nodejs-app-by-the-community-and-for-the-community'>JSConf Brazil - Securing Node.js Applications by the community and for the community</a></li>
          </ul>
        </section>

        <section id='service'>
          <a href='#service'><h1>service</h1></a>
          <h4 id='ieee'>IEEE</h4>
          <ul>
            <li>2012 - 2013 | IEEE-IST Chairperson</li>
            <li>2012 - 2013 | IEEE Portugal Section WebMaster</li>
            <li>2012 - 2013 | IEEE Computer Society Student Ambassador for Region 8 (EMEA)</li>
            <li>2013 | IEEE Region 8 (EMEA) Electronic Communications Coordinator</li>
            <li>2013 | IEEE Region 8 (EMEA) madC (Mobile Application Development Competition) Advisor and Judge</li>
            <li>2013 - 2014 | Computer Society Membership Development Coordinator for Region 8 (EMEA)</li>
          </ul>
          <h4 id='google'>Google</h4>
          <ul>
            <li>2012 - 2013 | Google Student Ambassador for Europe</li>
            <li>2013 | Google DevFest Lisbon Main Organizer</li>
          </ul>
        </section>

        <section id='awards'>
          <a href='#awards'><h1>awards</h1></a>
          <ul>
            <li>Aug 2012 | Winner of Richard E. Merwin Award by IEEE Computer Society</li>
            <li>Jul 2012 | 1st Place IEEE Region 8 (EMEA) Website Contest</li>
            <li>Dec 2012 | 3rd Place IEEE Global Website Contest</li>
            <li>Dec 2011 | 1st Place at Microsoft Windows Phone App Code Camp, Palmela, Portugal</li>
            <li>Dec 2011 | 2nd Place with a honorable award at Google Case Competition on BET24H Entrepreneurial Competiton</li>
          </ul>
        </section>

        <section id='hobbies'>
          <a href='#hobbies'><h1>hobbies</h1></a>
          <ul>
            <li>Capoeira</li>
            <li>Scuba Diving</li>
            <li>Krav Maga</li>
            <li>Surf</li>
            <li>Skimboard</li>
            <li>Music</li>
          </ul>
        </section>
      </div>
    )
  }
}

export default MainColumn
