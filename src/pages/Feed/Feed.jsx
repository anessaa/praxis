import React, {Component} from 'react';
import './Feed.css';
import tokenService from '../../utils/tokenService';
import PracticeCard from '../../components/PracticeCard/PracticeCard';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      practicePosts: props.practicePosts,
      remark: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch("api/practicePosts/:id/comments",
      {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'appliation/json',
          'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify({remark: this.state.remark, id: this.props.user.id})
        })
        .then(() => {
          this.props.handlePostUpdate();
          this.props.history.push('/feed');
        })
        .catch(err => console.log('error'))
  }

  render() {
    return (
      <div>
        <h1>Feed</h1>
        {this.props.practicePosts ?
          this.props.practicePosts.map((practicePost, idx) => 
          <PracticeCard key={idx} practicePost={practicePost} />
          )
          :
          <h1>Loading...</h1>
          }
      </div>
    );
  }
}


export default Feed;