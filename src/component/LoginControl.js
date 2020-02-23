import React, { Component } from 'react';

class LoginControl extends React.Component {

    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this. handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick(){
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick(){
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-8">
                        <Greeting isLoggedIn={isLoggedIn} />
                        {button}
                    </div>
                </div>
            </div>
        );
    }

}

function UserGreeting(props) {
    return <h1>Welcome Back</h1>
}

function GuestGreeting(props) {
    return <h1>Pleas sign up</h1>
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting/>;
    }
    return <GuestGreeting/>
}

function LoginButton(props) {
    return(
        <button onClick={props.onClick}>Login</button>
    );
}

function LogoutButton(props) {
    return(
        <button onClick={props.onClick}>Logout</button>
    );
}

export default LoginControl;