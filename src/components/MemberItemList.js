import React, { Component } from 'react';
import MemberItem from './MemberItem'

class MemberItemList extends Component {
  render() {
    const { memberItems, onToggle, onRemove } = this.props;

    const memberitemList = memberItems.map(({id, checked, text}) => (
        <MemberItem
        id= {id}
        text = {text}
        checked = {checked}
        onToggle = {onToggle}
        onRemove = {onRemove}
        key = {id}/>)
    );

    return (
      <div>
        {memberitemList}

      </div>
    );
  }
}

export default MemberItemList;