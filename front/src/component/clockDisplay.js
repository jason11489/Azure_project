import React from 'react';

export default class ClockDisplay extends React.Component{
    constructor(props){
      super(props);
      this.state = {date : new Date(), rand:Math.random()};
  
    }
    
    componentDidMount(){
      this.timerID = setInterval(
        () => this.tick(), 500
      );
    }
  
    componentWillUnmount(){
      clearInterval(this.timerID);
    }
  
    tick(){
      this.setState(
        {date : new Date()}
      );
    }
  
  
    render(){
      return (
        <div> 
          <h2>{this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
