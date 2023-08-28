import React, {Component} from "react";

class HeaderComponent extends Component {
    render () {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="navbar-brand"> <a>Harman</a></div>
                    <ul className="navbar-nav">
                        <li className="nav-link">Home</li>
                        <li className="nav-link">Automation</li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li className="nav-link"> <a href="/login">Login</a></li>
                        <li className="nav-link"> <a href="/logout">Logout</a></li>
                    </ul>
                </nav>
            </header>
        )  
    }
}

export default HeaderComponent