import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions';

class DisplayPictures extends Component {

    componentDidMount () {
        this.props.fetchPics();
    }

    render() {
        return (
            <div>
                {this.props.pics.map(pic =>
                    <div>
                        <img key={pic} src={pic} alt={""} />
                    </div>
                    )}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
            pics: state.pics.pics
          }
  }
  

export default connect(mapStateToProps, actions)(DisplayPictures);





