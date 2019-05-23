import React, {Component, Fragment} from 'react';

class Form extends Component{

  constructor(){
      super();
      this.state={
        textValue: "",
        result: []
      };
  };

  handleSubmit(event){
    event.preventDefault();
    const {result,textValue} = this.state;
    result.push(textValue);
    this.setState({
      result: result,
      textValue: ""
    });
  }

  changeText(event) {
    this.setState({textValue: event.target.value});
  }

	render(){
    const {textValue, result} = this.state;
		return(
			<Fragment>
        <ul>
          <form onSubmit={event=>this.handleSubmit(event)}>
              <label htmlFor="name">やること</label>
              <input type="text" value={textValue} onChange={event => this.changeText(event)} />
              <button type="submit">登録</button>
          </form>
          <ul>
            {result.map((value, index) => (
              <li key={index} >{value}</li>
              )
            )}
          </ul>
        </ul>
			</Fragment>
		);
	}

}

// {
//   result.map(value => {
//     return <li>{value}</li>
//   }
//   )
// }

export default Form;