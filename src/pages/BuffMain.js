import React, { Fragment, Component } from 'react';
import './BuffMain.css';

class BuffMain extends Component {
    state = { x: '', y: '', ischeck0: false, ischeck1: false, ischeck2: false, lostkingdom: false, backgroundColor: '', textcolor: '' };


    handleGongzakChange = (e) => {
        this.setState({ backgroundColor: '#87ceeb', textcolor: '#ffffff', ischeck0: true, ischeck1: false, ischeck2: false });
    }


    handleScientistChange = () => {
        this.setState({ backgroundColor: '#87ceeb', textcolor: '#ffffff', ischeck1: true, ischeck0: false, ischeck2: false });
        //this.setState({Userid: e.target.value});
    }

    handleArchitectureChange = () => {
        this.setState({ backgroundColor: '#87ceeb', textcolor: '#ffffff', ischeck2: true, ischeck1: false, ischeck0: false });
        //this.setState({Userid: e.target.value});
    }


    render() {
        const { changeColor, handleGongzakChange } = this;
        let bgColor = this.state.color_black ? this.props.color : this.props.color2
        return (
            <main className="BuffMain">
                <section className="form-wrapper">

                    <div className="inputBox">
                        <p>X :</p>
                        <input type='number' id="x" placeholder="" />
                        <p>Y : </p>
                        <input type='number' id="y" placeholder="" />
                    </div>
                    {this.state.ischeck0 === true &&
                        <div className="selectBox"  onClick={handleGongzakChange} style={{ backgroundColor: "#87ceeb", color: "#ffffff" }}>
                            공작
            </div>

                    }
                    {this.state.ischeck0 === false &&
                        <div className="selectBox"  onClick={handleGongzakChange}>
                            공작
            </div>
                    }
                    {this.state.ischeck1 === true &&
                        <div className="selectBox" onClick={this.handleScientistChange} style={{ backgroundColor: "#87ceeb", color: "#ffffff" }}>
                            과학자
            </div>

                    }
                    {this.state.ischeck1 === false &&
                        <div className="selectBox"  onClick={this.handleScientistChange}>
                            과학자
            </div>
                    }
                    {this.state.ischeck2 === true &&
                        <div className="selectBox"  onClick={this.handleArchitectureChange} style={{ backgroundColor: "#87ceeb", color: "#ffffff" }}>
                            건축가
            </div>

                    }
                    {this.state.ischeck2 === false &&
                        <div className="selectBox"  onClick={this.handleArchitectureChange}>
                            건축가
            </div>
                    }

                    <div className="selectKingdom">
                        <box id="Userpassword" tabIndex="0"> 잃어버린 왕국 </box>
                        <box id="Userpassword" tabIndex="1"> 원래 서버 </box>
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