import axios from "axios";
import {logDOM} from "@testing-library/react";

class VocabularyService {
    serverURL = "http://localhost:8080";

    getVocabulary() {
        return axios.get(this.serverURL + "/lib/1/vocabulary/get").then(el => el.data);
    }
}

export const vocabularyService = new VocabularyService();
