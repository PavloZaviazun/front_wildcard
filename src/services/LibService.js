import axios from "axios";

class LibService {
    serverURL = "http://localhost:8080";

    getLibs() {
        return axios.get(this.serverURL + "/libs/get").then(el => el.data)
    }

    getLibsOfWord(idWord) {
        return axios.get(this.serverURL + "/libs/" + idWord).then(el => el.data)
    }

}

export const libService = new LibService();
