import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import AboutView from './AboutView';

class About extends Component {
  render() {
    return <AboutView />;
  }
}

export default withTranslation()(About);
