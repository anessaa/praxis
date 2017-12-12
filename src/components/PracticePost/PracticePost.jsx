import React, {Component} from 'react';

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
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({content: this.state.content, duration:this.state.duration, id: this.props.user.id })
      })
      .then(() => {
        this.props.history.push('/');
      })
      .catch(err => console.log('error'));
  }

  render() {
    return (
      <div>
        <h3>Post Practice Session</h3>
          <div class="row">
          <form class="col s12" onSubmit={this.handleSubmit}>
            <div class="row">
              <div class="input-field col s12">
                <input type="text" placeholder="Duration" value={this.state.duration} onChange={(e) => this.handleChange('duration', e)} />
                <textarea placeholder="Practice Session" value={this.state.content} id="textarea1" className="materialize-textarea" onChange={(e) => this.handleChange('content', e)} ></textarea>
                <button>Post Practice Session</button>
              </div>
            </div>
          </form>
          </div>
      </div>
    )
  }
}

export default PracticePost;