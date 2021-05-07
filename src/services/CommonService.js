import axios from "axios";

class CommonService {
    serverURL = "http://localhost:8080";

    getAllPartsOfSpeech() {
        return axios.get(this.serverURL + "/partsOfSpeech").then(el => el.data)
    }
}

export const commonService = new CommonService();
