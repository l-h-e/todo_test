import React,{Component, Fragment} from 'react';
import Form from './Form';
import { directive } from '@babel/types';
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

class App extends Component{
	render(){
		return(
    //	<div className="Hello">
    <Fragment >
    <Form />
				<p>Hello</p>
        </Fragment>
		);
	}
}

export default App;
