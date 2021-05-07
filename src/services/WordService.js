import axios from "axios";

class WordService {
    serverURL = "http://localhost:8080";
    myStorage = window.localStorage;

    getWordsFromLib (idLib) {
        return axios.get(this.serverURL + "/lib/" + idLib + "/words/get",
            {headers : {"Authorization" : this.myStorage.getItem("session")}}).then(el => el.data);
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
            this.serverURL + "/word/add", formData,
            {headers : {"Authorization" : this.myStorage.getItem("session")}}
        )
    }

    getWord(id) {
        return axios.get(this.serverURL + "/word/" + id + "/get",
            {headers : {"Authorization" : this.myStorage.getItem("session")}})
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
            this.serverURL + "/word/" + id + "/update", formData,
            {headers : {"Authorization" : this.myStorage.getItem("session")}}
        )
    }

    deleteWord(id) {
        return axios.delete(this.serverURL + "/word/" + id + "/delete",
            {headers : {"Authorization" : this.myStorage.getItem("session")}})
    }

    getAllWordsFromBD() {
        return axios.get(this.serverURL + "/words/get",
            {headers : {"Authorization" : this.myStorage.getItem("session")}})
    }

    getPartsOfSpeech (word) {
        return axios.get(this.serverURL + "/partsOfSpeech/" + word,
            {headers : {"Authorization" : this.myStorage.getItem("session")}})
    }
}

export const wordService = new WordService();
