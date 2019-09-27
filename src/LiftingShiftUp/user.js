import React from 'react';

class User extends React.Component{
	render(){
		return(
			<div>
			  {this.props.value+10}
				
			</div>
			)
	}

}export default User;