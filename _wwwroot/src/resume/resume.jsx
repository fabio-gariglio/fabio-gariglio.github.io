import React from 'react';

import ContactList from './contact-list.jsx';
import ExperienceList from './experience/experience-list.jsx';
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
      <div className={style.resume}>
        <div className={style.header}>
          <h1>{this.state.name}</h1>
          <h2>{this.state.role}</h2>
          <ContactList contacts={this.state.contacts} />
          <p>{this.state.summary}</p>
        </div>
        <div className={style.details}>
          <div className={style.experiences}>
            <ExperienceList experiences={this.state.experiences} />
          </div>
          <div className={style.skills}>
            <CertificationList certifications={this.state.certifications} />
            <SkillList skills={this.state.skills} />
            <LanguageList languages={this.state.languages} />
          </div>
        </div>
      </div>
    );

  }

  renderLoading () {

    return (<div>loading...</div>);

  }
  
}