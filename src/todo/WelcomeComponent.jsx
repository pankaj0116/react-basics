import React, {Component} from "react";
import ExternalService from "./ExternalService";

class WelcomeComponent extends Component {

    constructor (props) {
        super(props)
        this.state = {
            data : ""
        }
        this.invokeExternalServiceApi = this.invokeExternalServiceApi.bind(this)
        this.handlesuccessfulresponse = this.handlesuccessfulresponse.bind(this)
    }

    render () {
        return (
            <div>
                <div>Welcome {this.props.params.name}  <hr/>
                Click on below to Invoke the External service API : .
                <button type="button" onClick={this.invokeExternalServiceApi}> Invoke External Api</button>
                </div> <hr/>
                <div>{this.state.data}</div>
            </div>
            
        );
    }

    invokeExternalServiceApi () {
        ExternalService.invokeExternalApi()
        .then(response => console.log(response.data));
    }

    handlesuccessfulresponse (response) {
        
        this.setState({data: response.data})
    }

}

export default WelcomeComponent