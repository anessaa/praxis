import React, {Component} from 'react';
import tokenService from '../../utils/tokenService';
import Comments from './../Comments/Comments';
import './PracticeCard.css'

class PracticeCard extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      practicePost: this.props.practicePost,
      remark: '',
      author: ''
    }
  }

  handleChange = (field, e) => {
    this.setState({
      [field]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();

    fetch(`api/practicePosts/${this.state.practicePost._id}/comments`,
      {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify({remark: this.state.remark})
      })
      .then(res => res.json())
      .then((practicePost) => {
        this.setState({practicePost: practicePost, remark: ''})
        this.props.history.push('/feed');
      })
      .catch(err => console.log('error'));
  }

  render() {
    return (
          <div className="Feed-cards">
            <p>Posted by {this.props.practicePost.author.name}</p>
            <h5>Practiced {this.props.practicePost.content}</h5>
            
            <h6>Duration: {this.props.practicePost.duration} minutes</h6>
            
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <input type="text" placeholder="Comment" value={this.state.remark} onChange={(e) => this.handleChange('remark', e)} />       
              <button className="btn">Comment</button>
            </form>

            <div>
              <h5>Comments</h5>
                {this.state.practicePost ?
                  this.state.practicePost.comments.map((comment, idx) => 
                    <Comments key={idx} comment={comment} />
                    )
                  :
                  <h6>Loading...</h6>
                } 
            </div> 
          </div>
    );
  }
}

export default PracticeCard;