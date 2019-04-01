import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions';
import '../DisplayPictures.css'


class DisplayPictures extends Component {
    state = { currentPics: []}

    componentDidMount () {
        this.props.fetchPics();
    }

    render() {
        return (
            <div className="container">
                <div className="item">
                {this.props.pics.map((pic, index)=> {
                    if(index % 5 === 0) {
                        return (
                            <img id={"big"} key={pic} src={pic} alt={""} />
                        )
                    } else {
                        return (
                            <img id={"small"} key={pic} src={pic} alt={""} />
                        )
                    }
                }
                )}
                </div>
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





