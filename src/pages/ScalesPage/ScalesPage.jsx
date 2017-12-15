import React, {Component} from 'react';
import './ScalesPage.css';
import ScaleCard from '../../components/ScaleCard/ScaleCard';

class ScalesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <div>
          <h1>Scale Library</h1>
            {this.props.scales ?
              this.props.scales.map((scale, idx) => 
                <ScaleCard key={idx} scale={scale} />
              )
              :
                <h1>Loading...</h1>
              }
        </div>
      </div>
    );
  }
}

export default ScalesPage;