import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import Home from './containers/Home';
import Groups from './containers/Groups';
import Login from './containers/Login';


class App extends Component {

  render() {
    return (
      <Router>
          <>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/groups" component={Groups} />
            <Route exact path="/login" component={Login} />
          </>
      </Router>
    );
  }
}

export default App;
