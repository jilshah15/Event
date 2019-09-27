import React from 'react';
//import logo from './logo.svg';
//import './App.css';
//import RefDemo from './Reference/RefDemo';
//import RefDemo1 from './Reference/RefDemo1';
//import CallBackRef from './Reference/CallBackRef';
//import Main from './LiftingShiftUp/main';
import Parent from './context/parent.js';

class Tabledata extends React.Component{
      constructor(props){
          super(props);
          this.state=
                   {
                    user:{id:1,name:'jil',surname:'shah'},
         
                    occupation:'professor'    

                   }

                 }
      render(){
              
              return(

                    <div>
                          // <p>id is{this.state.user.id} and name is{this.state.user.name} and surname is{this.state.user.surname}</p>
                  {/* <RefDemo/>*/}  
                   {/*<RefDemo1/>*/} 
                   {/*<CallBackRef/>*/}
                   {/*<Main/>*/}
                   <Parent/>
                    </div>
                   )
              }

}
export default Tabledata;