import axios from "axios";

class ExternalService {

    invokeExternalApi() {
        return axios.get("http://localhost:8080/hello-world")
    }
}

export default new ExternalService()