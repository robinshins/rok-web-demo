import React from 'react';
import MemberItemList from "../components/MemberItemList"
import MemberItem from "../components/MemberItem"
import MemberListForm from "../components/MemberListForm"
import MemberList from "../components/MemberList.js";

const Home = () => {
//      id = 3
//   state = {
//     input : '',
//     MemberItems:[
//       { id: 0, text: '신규섭', checked: false },
//       { id: 1, text: '김귀인', checked: true },
//       { id: 2, text: '이성엽', checked: false }
//     ]
//   }

//   handleToggle = (id) => {
//     const {MemberItems} = this.state
//     const index = MemberItems.findIndex(MemberItems => MemberItems.id === id);
//     const selected = MemberItems[index];
//     const nextMemberItems = [...MemberItems];
//     nextMemberItems[index] = { 
//       ...selected, 
//       checked: !selected.checked
//     };

//     this.setState({
//       MemberItems: nextMemberItems
//     });


//   }


//   handleChange = (e) => {
//     this.setState({
//       input: e.target.value // input 의 다음 바뀔 값
//     });
//   }

//   handleCreate = () => {
//     const { input, MemberItems } = this.state;
//     this.setState({
//       input: '', // 인풋 비우고
//       // concat 을 사용하여 배열에 추가
//       MemberIems: MemberItems.concat({
//         id: this.id++,
//         text: input,
//         checked: false
//       })
//     });
//   }

//   handleKeyPress = (e) => {
//     // 눌려진 키가 Enter 면 handleCreate 호출
//     if(e.key === 'Enter') {
//       this.handleCreate();
//     }
//   }




    // const {input} = this.state;
    // const {
    //   handleChange,handleCreate,handleKeyPress,handleToggle
    // } = this;

    // handleResgisterClick = () =>{

    // }
    // routeChange=()=> {
    //     let path = `newPath`;
    //     let history = useHistory();
    //     history.push(path);
    //   }
    //   const {
    //     routeChange
    //   } = this;
  return (
    <MemberList form = {<MemberListForm    />}>
    </MemberList>
  );
}

export default Home;