import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions';
import LeftToRight from './LeftToRight';
import '../DisplayPictures.css'


class DisplayPictures extends Component {
    state = { currentPics: []}

    componentDidMount () {
        this.props.fetchPics();
    }

    render() {
        return (
            <LeftToRight pics = {this.props.pics}/>
        )
    }
}


const mapStateToProps = state => {
    return {
            pics: state.pics.pics
          }
  }
  

export default connect(mapStateToProps, actions)(DisplayPictures);





