import React from 'react';

import ExperienceList from './experience-list.jsx';
import style from './resume.css';

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
        <h1>{this.state.name}</h1>
        <h3>{this.state.role}</h3>
        <ExperienceList experiences={this.state.experiences} />
      </div>
    );

  }

  renderLoading () {

    return (<div>loading...</div>);

  }
  
}