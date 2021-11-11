import React, { Component } from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Page from './components/layout/Page/Page';
import HomePage from './components/pages/Home/Home';
import About from './components/pages/About/About';
import BasicForm from './components/pages/BasicFormik/BasicForm';
import ExampleUseFormik from './components/pages/ExampleUseFormik/ExampleUseFormik';
import LinkedList from './components/pages/LinkedList/LinkedList';
import BinaryTree from './components/pages/BinaryTree/BinaryTree';

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
            <Route exact strict path="/basicFormik" component={BasicForm} />
            <Route exact strict path="/exampleUseFormik" component={ExampleUseFormik} />
            <Route exact strict path="/linkedList" component={LinkedList} />
            <Route exact strict path="/BinaryTree" component={BinaryTree} />
          </Switch>
        </Page>
      </Router>
    );
  }
}

export default App;
