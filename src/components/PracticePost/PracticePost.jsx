import React, {Component} from 'react';
import tokenService from '../../utils/tokenService';
import './PracticePost.css';

class PracticePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      duration: ''
    };
  }

  handleChange = (field, e) => {
    this.setState({
      [field]: e.target.value
    });
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    fetch("api/practicePosts/new",
      {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify({content: this.state.content, duration:this.state.duration, id: this.props.user.id })
      })
      .then(() => {
        this.props.handleAddPost();
        this.setState({content: ''})
        this.props.history.push('/wall');
      })
      .catch(err => console.log('error'));
  }

  render() {
    return (
      <div>
        <div className="PracticePost-form">
          <h3 className="PracticePost-header">Post Your Practice Session</h3>
            <div className="row">
              <form className="col s12" onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="input-field col s12">
                    <textarea placeholder="What did you practice today?" value={this.state.content} id="textarea1" className="materialize-textarea" onChange={(e) => this.handleChange('content', e)} ></textarea>
                    <input type="text" placeholder="Duration" value={this.state.duration} onChange={(e) => this.handleChange('duration', e)} /> 
                    <button className="btn">Post Practice Session</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
      </div>
    );
  }
}

export default PracticePost;