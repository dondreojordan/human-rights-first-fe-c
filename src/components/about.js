import React from 'react';
import { Flag, People, Map as Mp } from 'react-bootstrap-icons';
import logo from '../assets/logo.png';

function About() {
  return (
    <div>
      <div className="last-section">
        <section className="intro" id="about">
          <div className="icons">
            <div>
              <Flag />
            </div>
            <div>
              <People />
            </div>
            <div>
              <Mp />
            </div>
          </div>
          <p className="considered">
            Police Brutality Across America is a public police brutality
            incident viewing application commissioned by{' '}
            <a href="https://www.humanrightsfirst.org/">Human Rights First.</a>
            <br />
            <br /> Our goal is to provide information regarding police brutality
            incidents in an accurate and timely manner to concerned citizens and
            journalists. The incidents have been categorized and can be filtered
            by types of force used, location, and date.
            <br /> <br />
            <p>
              Click on the icon of a given incident to view more information.{' '}
            </p>
          </p>
        </section>
        <section className="middle">
          <div className="middle-content">
            <h1 className="mid-title">How it works</h1>
            <p className="mid-text">
              We collected data from various sources, including Reddit, Twitter,
              news media, etc. The data is filtered through modeling and
              classification algorithms to display only incidents of police
              brutality and their corresponding tags.
            </p>
          </div>
        </section>
        <section className="bottom-section">
          <h2 className="about-h2">About Human Rights First</h2>
          <div className="bottom">
            <br />
            <br />
            <p className="organization">
              Human Rights First is an independent advocacy and action
              organization that challenges America to live up to its ideals. We
              believe American leadership is essential in the global struggle
              for human rights, so we press the U.S. government and private
              companies to respect human rights and the rule of law. When they
              fail, we step in to demand reform, accountability and justice.
              Around the world, we work where we can best harness American
              influence to secure core freedoms.
            </p>

            <img src={logo} alt="humane-right-first-logo" id="footerLogo" />
          </div>
        </section>
      </div>
    </div>
  );
}
export default About;
