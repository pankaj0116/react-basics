import React, {Component} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Logincomponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";
import withNavigation from "./WithNavigation";
import ErrorComponent from "./ErrorComponent"
import withParams from "./WithParams";
import HeaderComponent from "./HeaderComponent"
import FooterComponent from "./FooterComponent"
import LogoutComponent from "./LogoutComponent"

class ReactAppFirstComponent extends Component {

    render () {
        const LoginComponentWithNav = withNavigation(Logincomponent);
        const LogoutComponentWithNav = withNavigation(LogoutComponent);
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        
        return (
            <div style={{textAlign: 'center'}}> 
                <Router>
                    <HeaderComponent></HeaderComponent>
                    <Routes>
                        <Route path="/" Component={LoginComponentWithNav}></Route>
                        <Route path="/login" Component={LoginComponentWithNav}></Route>
                        <Route path="/logout" Component={LogoutComponentWithNav}></Route>
                        <Route path="/welcome/:name" Component={WelcomeComponentWithParams}></Route>
                        <Route path="*" Component={ErrorComponent}></Route>
                    </Routes>
                    <FooterComponent></FooterComponent>
                </Router>

                {/**<Logincomponent/>
                <WelcomeComponent/> */}
            </div>
        )
    }
}


export default ReactAppFirstComponent