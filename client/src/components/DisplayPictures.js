import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions';
import RightToLeft from './RightToLeft';
import LeftToRight from './LeftToRight';
import '../DisplayPictures.css'


class DisplayPictures extends Component {

    componentDidMount () {
        this.props.fetchPics();
    }

    render() {
        return (
            <div>
                <LeftToRight pics = {[...this.props.pics].slice(0,5)}/>
                <RightToLeft pics = {[...this.props.pics].slice(5,10)}/>
                <LeftToRight pics = {[...this.props.pics].slice(10,15)}/>
                <RightToLeft pics = {[...this.props.pics].slice(15,20)}/>
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





