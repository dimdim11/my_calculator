import React, { Component } from 'react'


export default class KeyPad extends Component {
    buttonPressed = e => {
        this.props.buttonPressed(e.target.name);
    }
    
    render() {
        return (
            <div className = "Buttons-in-keypad"> 
                <button name = "1" onClick = {this.buttonPressed}> 1 </button>
                <button name = "2" onClick = {this.buttonPressed}> 2 </button>
                <button name = "3" onClick = {this.buttonPressed}> 3 </button>
                <button name = "clearAll" onClick = {this.buttonPressed} style = {{color:"red"}}> CA </button>
                <button name = "4" onClick = {this.buttonPressed}> 4 </button>
                <button name = "5" onClick = {this.buttonPressed}> 5 </button>
                <button name = "6" onClick = {this.buttonPressed}> 6 </button>
                <button name = "clearOne" onClick = {this.buttonPressed} style = {{color:"red"}}> CO </button>
                <button name = "7" onClick = {this.buttonPressed}> 7 </button>
                <button name = "8" onClick = {this.buttonPressed}> 8 </button>
                <button name = "9" onClick = {this.buttonPressed}> 9 </button>
                <button name = "+" onClick = {this.buttonPressed} style = {{color:"blue"}}> + </button>        
                <button name = "0" onClick = {this.buttonPressed}> 0 </button>
                <button name = "." onClick = {this.buttonPressed}> . </button>
                <button name = "=" onClick = {this.buttonPressed}> = </button>
                <button name = "-" onClick = {this.buttonPressed} style = {{color:"blue"}}> - </button>
                <button name = "sin" onClick = {this.buttonPressed}> sin </button>
                <button name = "(" onClick = {this.buttonPressed}> ( </button>
                <button name = ")" onClick = {this.buttonPressed}> ) </button>
                <button name = "*" onClick = {this.buttonPressed} style = {{color:"blue"}}> * </button>
                <button name = "cos" onClick = {this.buttonPressed}> cos </button>
                <button name = "tan" onClick = {this.buttonPressed}> tan </button>  
                <button name = "log" onClick = {this.buttonPressed}> log </button>
                <button name = "/" onClick = {this.buttonPressed} style = {{color:"blue"}}> / </button>
                <button name = "sqrt" onClick = {this.buttonPressed}> sqrt </button>
                <button name = " deg" onClick = {this.buttonPressed}> deg </button>
                <button name = " rad" onClick = {this.buttonPressed}> rad </button>
                <button name = "^" onClick = {this.buttonPressed} style = {{color:"blue"}}> ^ </button>
                <button name = "clearHistory" onClick = {this.buttonPressed}> CH </button>
            </div>
        )
    }
}