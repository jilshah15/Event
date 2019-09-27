import React from 'react';
import GrandChild from './grandchild';
class Child extends React.Component{
	render(){
		return(
			<div>
				<h2>Child Component</h2>
				<GrandChild/>
			</div>
		)
	}
}
export default Child;
































// import React from 'react';
// import GrandChild from './grandchild';

// class Child extends React.Component{
// 	render(){
// 		return(
// 			<div>
// 				<h2>Child Component</h2>
// 				<GrandChild/>
// 			</div>
// 			)
// 	}
// }
// export default Child;