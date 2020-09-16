import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)
// Containers
const TheLayout = React.lazy(() => import('./screen/dashboard/DashboardScreen.js'));

// Pages
const Profile = React.lazy(() => import('./screen/profile/ProfileScreen.js'));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    document.title = '** Dev. Web Tikomdik **'
  }

  render() {
    const { currentUser } = this.state;
    return (
      <Router history={createBrowserHistory()}>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/500" name="Page 500" render={props => <Profile {...props}/>} />
              <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </Router>
    );
  }
}

export default App;
