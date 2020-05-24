import React, { Fragment, Component,useState } from 'react';
import Http from '../api';
import './RuinResult.css';
import qs from 'qs';

class RuinApply extends Component {
  state = { items : [], flag:''};

 
    
componentDidMount() { 
  console.log(this.props)
  this.getRuinResult();
}


  getRuinResult = async text => {
    try{
    const response = await Http.get('userresponse/', {params:{
         mode:'RUIN_member_list', ruintime_code: this.props.match.params.ruintimecode
      }}
      );
      if(response.status===201){
        const singleItem = response.data.info[response.data.info.length-1]
        console.log(response)
        let date = new Date(singleItem.ruintime)
        console.log(date.toString())
        const item = []
        for(var i = 0 ;  i< response.data.info.length ; i++){
          item.push({name: response.data.info[i]})
        }
        this.setState({items : item})
        console.log(this.state.items)
      }else if(response.status){
        console.log(response)
      }

    }catch(error){
      this.setState({flag : 2})
    }

  }

  render() {
    const {
      getRuintime,handleEmailChange,handlePasswordChange,handleTimeClick,handleApplyclick
    } = this;

    let divItems = this.state.items.map((item,index) => {
        return <div className="selectBox2" key={item.id}>{`(${index+1}) `+item.name}</div>

   });

    return (
      <main className="Home">
        <div className="title2">
          Results
          </div>
        <section className="form-wrapper">
          {divItems}
          <div className="create-button" onClick = {event =>  window.location.href = '/'}>
            okay 
      </div>
        </section>
      </main>
      
    );
  }

}
export default RuinApply;