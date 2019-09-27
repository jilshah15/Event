import React from 'react';

import {MyContext} from "./contextfile";

class GrandChild extends React.Component{
	
	static contextType=MyContext;
	
	render(){
		return(
			<div>
				<h3>GrandChild Component</h3>
				
					<h4>
						Name:{this.context.data.name}
						Value:{this.context.data.value}
					</h4>
					<button onClick={this.context.handleClick}>Change Value</button>
					
			</div>
			)
	}
}
export default GrandChild;






































// import React from 'react';
// import {MyContext} from './parent.js';

// class GrandChild extends React.Component{
// 	render(){
// 		return(
// 			<div>
// 				<MyContext.Consumer>
// 				{
// 					data=>(<h4>
// 					    name:{data.name},
// 						number:{data.number}
						
// 					</h4>
// 				)}

// 				</MyContext.Consumer>

// 			</div>

// 			)
// 	}
// }
// export default GrandChild;