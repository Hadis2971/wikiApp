import axios from "axios"

class Network {
    get (query) {
        return axios.get(query);
    }
}

export default new Network();
