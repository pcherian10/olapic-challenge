import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions';

class DisplayPictures extends Component {
    state = { pics: [] }

    componentDidMount () {
        this.props.fetchPics();
    }

    render() {
        return (
            <div>
                {this.state.pics}
            </div>
        )
    }
}

export default connect(null, actions)(DisplayPictures);





