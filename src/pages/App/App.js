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
    lessons: null,
    practicePosts: null
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
      .then(res => res.json())
      .then((data) => {
        this.setState({lessons:data})
      })   
    fetch('api/practicePosts')
      .then((data) => data.json())
      .then((data) => {
        this.setState({practicePosts:data})
      });
  }

  handleAddPost = () => {
    fetch('api/practicePosts')
    .then((data) => data.json())
    .then((data) => {
      this.setState({practicePosts:data})
    }); 
  }

  handlePostUpdate = (updatedPost) => {
    var posts = [...this.state.practicePosts];
    var idx = posts.findIndex(p => p._id === updatedPost._id);
    posts.splice(idx, 1, updatedPost);
    this.setState({practicePosts: posts});
  }

  
  render() {
    return (
      <div className="container">
            <Router>
              <div>
                <NavBar 
                  user={this.state.user}
                  handleLogout={this.handleLogout}
                /> 
              <Switch>
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
                    handleAddPost={this.handleAddPost}
                    practicePosts={this.state.practicePosts}
                  />
                } />

              <Route exact path='/feed' render={(props) =>
                <Feed 
                  {...props}
                  user={this.state.user}
                  practicePosts={this.state.practicePosts}
                  
                />
              } />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
