import axios from "axios";

class WordService {
    serverURL = "http://localhost:8080";

//TODO hardcode libraries ID
    getWordsFromLib (idLib) {
        return axios.get(this.serverURL + "/lib/" + idLib + "/words/get").then(el => el.data);
    }

    addNewWord (word, partOfSpeech, description, example, translation) {
        const formData = new FormData();
        formData.set("word", word);
        formData.set("partOfSpeech", partOfSpeech);
        formData.set("description", description);
        formData.set("example", example);
        formData.set("image", "");
        formData.set("translation", JSON.stringify(translation));
        return axios.post(
            this.serverURL + "/word/add", formData
        )
    }

    getWord(id) {
        return axios.get(this.serverURL + "/word/" + id + "/get")
    }

    updateWord(id, word, partOfSpeech, description, example, image, translation) {
        const formData = new FormData();
        formData.set("word", word);
        formData.set("partOfSpeech", partOfSpeech);
        formData.set("description", description);
        formData.set("example", example);
        formData.set("image", "");
        formData.set("translation", JSON.stringify(translation));
        return axios.patch(
            this.serverURL + "/word/" + id + "/update", formData
        )
    }

    deleteWord(id) {
        //TODO response
        return axios.delete(this.serverURL + "/word/" + id + "/delete")
    }

    getAllWordsFromBD() {
        return axios.get(this.serverURL + "/words/get")
    }

    getPartsOfSpeech (word) {
        return axios.get(this.serverURL + "/partsOfSpeech/" + word)
    }
}

export const wordService = new WordService();
