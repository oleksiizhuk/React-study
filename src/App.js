import React, { Component } from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Page from './components/layout/Page/Page';
import HomePage from './components/pages/Home/Home';
import About from './components/pages/About/About';
import './scss/globals.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.history = createBrowserHistory();
  }

  render() {
    return (
      <Router history={this.history}>
        <Page>
          <Switch>
            <Route exact strict path="/" component={HomePage} />
            <Route exact strict path="/about" component={About} />
          </Switch>
        </Page>
      </Router>
    );
  }
}

export default App;
