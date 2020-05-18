import React,{Component, Children} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Home, Register, BuffMain } from './pages';
import MemberItemList from "./components/MemberItemList"
import MemberItem from "./components/MemberItem"
import MemberListForm from "./components/MemberListForm"
import MemberList from "./components/MemberList.js";


class App extends Component {

 

  render(){
    return(
      <Router>
      <Route exact path='/' component={Home}/>
      <Switch>
      <Route path='/register' component={Register}/>
      <Route path='/buffmain' component={BuffMain}/>
      </Switch>
      </Router> 
    )

}
}

export default App;
// const {input} = this.state;
// const {
//   handleChange,handleCreate,handleKeyPress,handleToggle
// } = this;
// return (
// <MemberList form = {<MemberListForm
//   value = {input}
//   onChange ={handleChange}
//   onCreate = {handleCreate}
//   onKeyPress = {handleKeyPress}
  
// />}>
// </MemberList>
// );