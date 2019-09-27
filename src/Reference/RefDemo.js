//created By: 19/08/2019
import React from 'react';
class RefDemo extends React.Component{
	constructor(props){
		super(props);
		//this.textInput=React.createRef();
	}
	//componentDidMount=()=>{
		//this.textInput.current.focus();
	//}




render(){
	return(
			<div>
				<form>
				{/* <div>
						<label>Name:</label>
						<input type="text"/>
					</div>
						<div>
							<label>Password:</label>
							<input type="text" ref={this.textInput}/>
						</div>
							<div>
								<label>Address:</label>
								<input type="text"/>
						</div> */}	
				</form>
			</div>
		)
}

}
export default RefDemo;