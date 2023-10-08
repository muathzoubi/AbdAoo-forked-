import React, { Component } from 'react'
import firebase from '../../firebase.js';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import './Like.css';

class LikeButton extends Component {
  

  state = {
    count: 0,
  }

  incrementLike = () => {
    let newCount = this.state.count + 1
    this.setState({
      count: newCount
    })

    console.log(this.state.count);
  } 
  
  render() {
    return(
      
      <div class="counter">
        
        <Button type="submit" color="primary" onChange={this.handleCount} onClick={this.incrementLike}>{this.state.count} 👏</Button>
                               
      </div>
    )
  }

}

export default LikeButton
