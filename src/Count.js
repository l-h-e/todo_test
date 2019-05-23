import React, {Component, Fragment} from 'react';

class Count extends Component{

  constructor(){
      super();
      this.state={
        count : 0
      };
  };

  countPlus(){
    const {count} = this.state;
    this.setState({count:count+1});
  }
  countMinus(){
    const {count} = this.state;
    this.setState({count:count-1});
  }

	render(){
    const {count} = this.state;
		return(
			<Fragment>
        <div>count</div>
        <button onClick={()=>this.countMinus()}>-</button>
        <button onClick={()=>this.countPlus()}>+</button>
        <p>{count}</p>
			</Fragment>
		);
	}
}


export default Count;