import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import Wall from '../../pages/Wall/Wall';
import Feed from '../../pages/Feed/Feed';

class App extends Component {
 constructor(props) {
   super(props);
   this.state = {
    lessons: null
   }
  }
   
 
  // Callback Methods
  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  handleSignup = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogin = () => { 
    this.setState({user: userService.getUser()});
  }

  // Lifecycle Methods
  componentDidMount() {
    let user = userService.getUser();
    this.setState({user});

    fetch('api/lessons')
    .then((data) => data.json())
      .then((data) => {
        this.setState({lessons:data})
      } )
  }

  render() {
    return (
      <div className="container">

            <Router>
              <Switch>     
              <Route exact path='/' render={() => 
                <NavBar 
                user={this.state.user}
                handleLogout={this.handleLogout}
                /> 
              }/>
            <Route exact path='/signup' render={(match) =>
              <SignupPage 
                {...match}
                user={this.state.user}
                handleSignup={this.handleSignup}
              />
            } />
            <Route exact path='/login' render={(props) =>
              <LoginPage 
                {...props}
                handleLogin={this.handleLogin}
              />
            } />
             <Route exact path='/wall' render={(props) =>
              <Wall
                {...props}
                user={this.state.user}
                lessons={this.state.lessons}
              />
            } />

            <Route exact path='/feed' render={() =>
              <Feed 
                user={this.state.user}
    
              />
            } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
