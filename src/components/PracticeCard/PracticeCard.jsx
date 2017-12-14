import React, {Component} from 'react';
import tokenService from '../../utils/tokenService';
import Comments from './../Comments/Comments';


class PracticeCard extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      practicePost: props.practicePost,
      remark: ''
    }
  }

  handleChange = (field, e) => {
    this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log('submit form: ', this.state.remark)
    const remark = this.state.remark;

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
        // console.log('practicePost =', practicePost)
        this.setState({practicePost: practicePost, remark: ''})
        // this.props.handleAddPost(practicePost);
        // this.props.history.push('/feed');
      })
      .catch(err => console.log('error'));
  }

  render() {
    return (
          <div className="Feed-cards">
            <p>{this.props.practicePost.author.name}</p>
            <h5>Practiced {this.props.practicePost.content}</h5>
            {/* edit button component ??*/}
            <button>Edit</button>&nbsp;&nbsp;
            <button>Delete</button>
            <h6>Duration: {this.props.practicePost.duration} minutes</h6>

            <form onSubmit={(e) => this.handleSubmit(e)}>
              <input type="text" placeholder="Comment" value={this.state.remark} onChange={(e) => this.handleChange('remark', e)} />       
              <button className="waves-effect waves-light btn">Comment</button>
            </form>

            <div>
              <h5>Comments</h5>
                {this.state.practicePost ?
                this.state.practicePost.comments.map((comment, idx) => 
                  <Comments key={idx} testString={"food"} comment={comment} />
                  
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