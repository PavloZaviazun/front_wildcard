import axios from "axios";

class VocabularyService {
    serverURL = "http://localhost:8080";

    getVocabulary() {
        return axios.get(this.serverURL + "/get").then(el => el.data)
    }
}

export const vocabularyService = new VocabularyService();
