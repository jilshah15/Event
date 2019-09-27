import React  from 'react';
import Child from './child';
import {MyContext} from './contextfile';
import {Provider} from './contextfile';

class Parent extends React.Component{
	constructor(props){
		super(props);
		this.state={
			name:"jil",
			value:10
		}
	}
	handleClickContext=()=>{
		this.setState({
			value:this.state.value+1
		})
	}

	render(){
		const contextValue={
			data:this.state,
			handleClick:this.handleClickContext
		}
		return(
			<div><h1>Parent Component</h1>
				<Provider value={contextValue}>
					<Child/>
				</Provider>

			</div>

			)
	}

}
export default Parent;














































































// import React from 'react';
// import Child from './child.js';
// export const MyContext=React.createContext();

// class Parent extends React.Component{
// 	constructor(props){
// 		super(props);
// 		this.state={
// 			name:"jil",
// 			number:10
// 		}
	
		
// 	}

// 	render(){
		
// 		return(
// 			<div>
// 				<h1>Parent Component</h1>
// 					<MyContext.Provider value={this.state}>
// 						<Child/>
// 					</MyContext.Provider>
			
// 			</div>
// 			)
// 	}
// }export default Parent;