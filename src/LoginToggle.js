import React from 'react'
class LoginToggle extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: true
        }
        this.toggleHandle = this.toggleHandle.bind(this)
    }
    toggleHandle() {
        this.setState(prevData => {
                return (
                    prevData.isLoggedIn = !prevData.isLoggedIn
                )
            }
        )
    }
    render() {
        let isLogged = this.state.isLoggedIn ? 'LogIn' : 'LogOut';
        let disp = this.state.isLoggedIn ? 'you are Logging In' : 'Logging Out';
        return (
            <div>
                <h1>{disp}</h1>
                <button onClick={this.toggleHandle}>{isLogged}</button>
            </div>
        )
    }
}
export default LoginToggle;
