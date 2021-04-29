import axios from "axios";

class VocabularyService {
    serverURL = "http://localhost:8080";

    getVocabulary() {
        return axios.get(this.serverURL + "/lib/1/vocabulary/get").then(el => el.data);
    }

    addNewWord(word, partOfSpeech, description, example, translation) {
        const formData = new FormData;
        formData.set("word", word);
        formData.set("partOfSpeech", partOfSpeech);
        formData.set("description", description);
        formData.set("example", example);
        formData.set("image", "");
        formData.set("translation", translation);
        return axios.post(
            this.serverURL+ "/vocabulary/add", formData
        )
    }
}

export const vocabularyService = new VocabularyService();
