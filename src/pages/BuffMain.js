import React, { Fragment, Component } from 'react';
import './BuffMain.css';

class BuffMain extends Component {

    constructor(){
        super(); 
        this.state = {
            color_black: true,
          }
        }
        changeColor(){
                this.setState({color_black: !this.state.color_black})
        }

render() {
    const {changeColor} = this;
    let bgColor = this.state.color_black ? this.props.color : this.props.color2
    return (
        <main className = "BuffMain">
            <section className = "form-wrapper">
            <div className="title">
                라오킹 버프 사이트
            </div>
            <div className="inputBox">
            <input type='text' id="Userpassword" placeholder="x 좌표" />
            <input type='text' id="Userpassword" placeholder="y 좌표" />
            </div>
            <div className="selectBox" tabIndex="0">
                공작
            </div>
            <div className="selectBox" tabIndex="1">
                과학자
            </div>
            <div className="selectBox" tabIndex="2">
                건축가
            </div>
            <div className="selectKingdom">
            <box id="Userpassword" tabIndex="0"> 잃어버린 왕국 </box>
            <box  id="Userpassword" tabIndex="1"> 원래 서버 </box>
            </div>
            <div className="create-button">
                칭호 요청
            </div>
            </section>
        </main>
    )
    console.log("sadasd")
}
}

export default BuffMain;