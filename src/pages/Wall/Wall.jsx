import React, {Component} from 'react';
import PracticePost from '../../components/PracticePost/PracticePost';
import PracticeCard from '../../components/PracticeCard/PracticeCard';
class Wall extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
       <PracticePost {...this.props}/>
          {this.props.practicePosts ?
            this.props.practicePosts
            .filter(p => p.author._id === this.props.user._id)
            .map((p, idx) => (
              <PracticeCard key={idx} practicePost={p} />
            ))
          :
            <h1>Loading...</h1>
          }
      </div>
    );
  }
  
}

export default Wall;