import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class Logincomponent extends Component {

    constructor (props) {
        super(props);
        this.state = {
            username : "",
            password : "",
            hasloginfailed : false,
            hasloginsuccessful : false
        }
        this.handleChangeEvent = this.handleChangeEvent.bind(this)
        this.loginSubmit = this.loginSubmit.bind(this)
    }

    render () {
        return (
            <div className='logincomponent' style={{textAlign : 'center'}}>
                {/**<ShowLoginFailed hasloginfailed={this.state.hasloginfailed}/>
                <ShowLoginSuccess hasloginsuccessful={this.state.hasloginsuccessful}/> */}
                {this.state.hasloginsuccessful && <div>Login Successful</div>}
                {this.state.hasloginfailed && <div>Invalid Credentials</div>}
                Username : <input type='text' name='username' value={this.state.username} onChange={this.handleChangeEvent}/>
                Password : <input type='password' name='password' value={this.state.password} onChange={this.handleChangeEvent}/>
                <button type='button' onClick={this.loginSubmit}>Submit</button>
            </div>
        );
    }

    handleChangeEvent(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
    } 

    loginSubmit () {
        if (this.state.username == 'pankaj' && this.state.password == 'dummy') {
            this.setState({
                hasloginsuccessful : true,
                hasloginfailed : false
            });
            console.log("Invalid credentials");
            this.props.navigate(`/welcome/${this.state.username}`);
        } else {
            this.setState({
                hasloginsuccessful : false,
                hasloginfailed : true
            });
            console.log("login failed.");
        } 
    }

}

/*function ShowLoginFailed(props) {
    if(props.hasloginfailed) {
        return <div>Invalid credentials</div>
    } 
    return null;
}

function ShowLoginSuccess(props) {
    if(props.hasloginsuccessful) {
        return <div>Login Successful</div>
    } 
    return null;
}
*/

export default Logincomponent;