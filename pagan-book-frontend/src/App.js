import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './components/Navbar'
import Home from './containers/Home';
import Groups from './containers/Groups';
import GroupShow from './containers/GroupShow';
import Login from './containers/Login';


class App extends Component {

  render() {
    return (
      <Router>
          <>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/groups" render={routerProps => <Groups {...routerProps} /> } />
            <Route path={`/groups/:groupId`} render={routerProps => <GroupShow {...routerProps} />} />
            <Route exact path="/login" component={Login} />
          </>
      </Router>
    );
  }
}

const mapStateToProps = state => {
    return {
        groups: state.groupsReducer.groups
    }
}

export default connect(mapStateToProps)(App)