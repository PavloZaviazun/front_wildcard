import axios from "axios";

class LibService {
    serverURL = "http://localhost:8080";

    getLib() {
        return axios.get(this.serverURL + "/lib").then(el => el.data)
    }

}

export const libService = new LibService();
