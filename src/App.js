import React,{Component, Fragment} from 'react';
import Form from './Form';
import Count from './Count';
//import { directive } from '@babel/types';


class App extends Component{
	render(){
		return(
    <Fragment >
      <Form />
      <Count />
    </Fragment>
		);
	}
}

export default App;
