import React from 'react';
class RefDemo1 extends React.Component{
	constructor(props){
		super(props);
		this.state={
			value:'',
		}
		this.textInput=React.createRef();
	}
		handleSubmit=event=>{
			event.preventDefault();
			this.setState({
				value:this.textInput.current.value
				})
		}

	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<h2>you typed:{this.state.value}</h2>
					<input type="text" ref={this.textInput}/>
					<input type="submit" value="submit"/>
				</form>
			</div>
			)
	}
}
export default RefDemo1;