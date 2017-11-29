import React from 'react';

import ContactList from './contact-list.jsx';
import ExperienceList from './experience/experience-list.jsx';
import CertificationLogoList from './skills/certification-logo-list.jsx';
import CertificationList from './skills/certification-list.jsx';
import SkillList from './skills/skill-list.jsx';
import LanguageList from './skills/language-list.jsx';

import style from './resume.scss';

module.exports = class Resume extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = null;
  }

  componentDidMount() {

    var self = this;

    fetch('resume/resume.json')
      .then( response => response.json() )
      .then( responseJson => {
        self.setState( () => responseJson )
      });

  }

  render () {

    if (!this.state) {
      return this.renderLoading();
    }

    return (
      <div className="container">

        <div className="row">
            <h1>{this.state.name}</h1>
        </div>
        <div className="row">
            <h2>{this.state.role}</h2>
        </div>
        <div className="row">            
            <ContactList contacts={this.state.contacts} />
        </div>
        <div className="row">            
            <p>{this.state.summary}</p>
        </div>

        <div className="row">

          <div className="col-xl-8 col-md-12">
            <ExperienceList experiences={this.state.experiences} />
          </div>
          <div className="col-xl-4 col-md-12">
          
            <div className="row">
              <CertificationLogoList certifications={this.state.certifications} />
            </div>

            <div className={'row ' + style.separator}></div>

            <div className="row">
              <div className="col-xl-12 col-md-4">
                <strong>Certifications</strong>
              </div>
              <CertificationList certifications={this.state.certifications} />
            </div>

            <div className={'row ' + style.separator}></div>

            <div className="row">
              <div className="col-xl-12 col-md-4">
                <strong>Skills</strong>
              </div>              
              <SkillList skills={this.state.skills} />
            </div>

            <div className={'row ' + style.separator}></div>

            <div className="row">
              <div className="col-xl-12 col-md-4">
                <strong>Languages</strong>
              </div>              
              <LanguageList languages={this.state.languages} />
            </div>

          </div>        
        </div>

      </div>
    );

  }

  renderLoading () {

    return (<div>loading...</div>);

  }
  
}