import React, { Component } from 'react'
import KeyPad from "./components/KeyPad";
import Screen from "./components/Screen";
import History from "./components/History";
//import nl2br from 'react-newline-to-break'; 
import { evaluate } from 'mathjs'
import './App.css';

class App extends Component {
    state = {
        resultOnScreen: '',
        history: '',
        tempHistory:''
    }

    buttonPressed = buttonName => {
        var tempResultOnScreen = this.state.resultOnScreen;

        if(buttonName === "=") {
            if(tempResultOnScreen.includes("-") && (tempResultOnScreen.includes("sqrt") || tempResultOnScreen.includes("log"))) {
                this.clearAll();
            }
            else {
                this.calculate();    
            }
        }
        else if(buttonName === "clearAll") {
            this.clearAll();
        }
        else if(buttonName === "clearOne") {
            try {
                this.setState({
                    resultOnScreen: tempResultOnScreen.slice(0, -1)
                });
            }
            catch(e) {
                
            }
        }
        else if(buttonName === "clearHistory") {
            this.setState({
                history: ""
            });
        }
        else if(buttonName === 'degree') {
            this.setState({
                resultOnScreen: (tempResultOnScreen * 180 / Math.PI) + buttonName
            });
        }
        else if(buttonName === 'radian') {
            this.setState({
                resultOnScreen: (tempResultOnScreen * Math.PI / 180) + buttonName
            });
        }
        else {
            this.setState({
                resultOnScreen: tempResultOnScreen + buttonName,
                tempHistory: tempResultOnScreen + buttonName
            });
        }
    }

    clearAll = () => {
        this.setState({
            resultOnScreen: ""
        });
    }

    calculate = () => {
        try {
            this.setState({
                resultOnScreen: evaluate(this.state.resultOnScreen),
                history: this.state.history + this.state.tempHistory + "=" + evaluate(this.state.resultOnScreen) + " | "
            });
        }
        catch(e) {
            this.clearAll();
        }
        this.setState({
            tempHistory: ""
        });
    } 
    
    render() {
        return (
            <div className = "App">
                <div className = "Header">The Best Calculator Ever!</div>
                <div className = "The-Calculator">
                    <Screen calculationResult = {this.state.resultOnScreen}/>
                    <KeyPad buttonPressed = {this.buttonPressed}/>
                    <div className = "User-Manuals">User Manuals</div>
                    <div className = "Rules">
                        <p0>1. CA - clear screen<br></br></p0>
                        <p1>2. CO - clear last char<br></br></p1> 
                        <p2>3. sin/cos/tan(number rad/deg), rad is default<br></br></p2>
                        <p3>4. sqrt(number), number >= 0<br></br></p3>
                        <p4>5. logNumber(number), number > 0<br></br></p4>
                        <p5>6. CH - clear history<br></br></p5>
                        <p6>The history is temporary and will be empty after the refresh</p6>
                    </div>                
                </div>  
                <div className = "history"> Temporary History
                    <History history = {this.state.history}/>
                </div>
            </div>  
            
        )
    }
}

export default App;