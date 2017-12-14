import React, {Component} from 'react';
import tokenService from '../../utils/tokenService';
import Comments from './../Comments/Comments';


class PracticeCard extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      practicePost: this.props.practicePost,
      remark: '',
      author: ''
      // updateContent: `<input type=text value="HELLOOOOOO">`
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
        // this.props.handleAddPost(practicePost);
        this.props.history.push('/feed');
      })
      .catch(err => console.log('error'));
  }

  // handleUpdate(e) {
  //   e.preventDefault();
  //   console.log('editing post', this.state.practicePost._id)
  //       fetch(`api/practicePosts/${this.state.practicePost._id}`,
  //   {
  //     method: "PUT",
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer ' + tokenService.getToken()
  //     },
  //     body: JSON.stringify({content: this.state.content})
  //     })
  //     .then(res => res.json())
  //     .then((practicePost) => {
  //       this.setState({practicePost: practicePost})
  //     })
  //     .catch(err => console.log('error'))
  //   }
    handleDelete(e) {
      console.log('delete post', this.state.practicePost._id)
          fetch(`api/practicePosts/${this.state.practicePost._id}`,
      {
        method: "DELETE",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify({content: this.state.content})
        })
        .then(res => res.json())
        .then((practicePost) => {
          this.props.history.push('/wall');

        })
        .catch(err => console.log('error'))
      }

  updateForm() {
    // this.setState({updateContent: `<input type=text value="HELLOOOOOO">`})
  }
  render() {
    return (
          <div className="Feed-cards">
            <p>{this.props.practicePost.author.name}</p>
            <h5>Practiced {this.props.practicePost.content}</h5>
            {/* <h5>Practiced {this.state.updateContent}</h5> */}
            {/* <button onClick={this.handleUpdate(this.props.practicePost._id)}>Save</button>&nbsp;&nbsp; */}
            {/* <button onClick={this.updateForm()}>Edit</button>&nbsp;&nbsp; */}

            {/* <button onCLick={this.handleDelete(this.props.practicePost._id)}>Delete</button> */}
            <h6>Duration: {this.props.practicePost.duration} minutes</h6>
            
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <input type="text" placeholder="Comment" value={this.state.remark} onChange={(e) => this.handleChange('remark', e)} />       
              <button className="waves-effect waves-light btn">Comment</button>
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