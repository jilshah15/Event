import React from 'react';
class CallBackRef extends React.Component{
	constructor(props){
		super(props);
		this.backRef=null;
		this.SetBackRef=element=>{
			if(this.backRef){
				this.backRef=element;
			}
			
		}
	}
	componentDidMount=()=>{
		if(this.backRef){
			this.backRef.focus();
		}
		
	}


	render(){
		return(
			<div>
				<form>
					<div>
						<label>Name:</label>
						<input type="text"/>
					</div>
						<div>
							<label>Password:</label>
							<input type="text" ref={this.SetBackRef}/>
					</div>
				</form>
			</div>
			)
	}
}
export default CallBackRef;