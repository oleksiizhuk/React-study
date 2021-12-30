import React, { Component } from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Page from './layout/Page/Page';
import HomePage from './pages/Home/Home';
import About from './pages/About/About';
import BasicForm from './pages/BasicFormik/BasicForm';
import ExampleUseFormik from './pages/ExampleUseFormik/ExampleUseFormik';
import LinkedList from './pages/LinkedList/LinkedList';
import BinaryTree from './pages/BinaryTree/BinaryTree';
import Grid from './pages/Grid/Grid';
import UseCallBackUseMemo from './pages/UseCallBackUseMemo/UseCallBackUseMemo';

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
            <Route exact strict path="/Grid" component={Grid} />
            <Route exact strict path="/UseCallBackUseMemo" component={UseCallBackUseMemo} />
          </Switch>
        </Page>
      </Router>
    );
  }
}

export default App;
