import React from 'react';
import User from './user';
import Guest from './guest';

class Main extends React.Component{
		state={
			name:'Shauri',
			value:10,
		}
	
		render(){
			return(
				<div>
				<User value={this.state.value}/>
		        <Guest name={this.state.name}/>	
					
				</div>
			)
	}
}
export default Main;