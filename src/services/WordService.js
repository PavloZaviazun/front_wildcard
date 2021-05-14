import axios from "axios";

class WordService {
    serverURL = "http://localhost:8080";
    myStorage = window.localStorage;

    getWordsFromLib (idLib, page) {
        return axios.get(this.serverURL + "/lib/" + idLib + "/words/get/page/" + page,
            {headers : {"Authorization" : this.myStorage.getItem("session")}}).then(el => el.data);
    }

    addNewWord(form) {
        const formData = new FormData(form);
        return axios.post(
            this.serverURL + "/word/add", formData,
            {headers : {"Authorization" : this.myStorage.getItem("session")}}
        )
    }

    getWord(id) {
        return axios.get(this.serverURL + "/word/" + id + "/get",
            {headers : {"Authorization" : this.myStorage.getItem("session")}})
    }

    updateWord(id, form) {
        const formData = new FormData(form);
        return axios.patch(
            this.serverURL + "/word/" + id + "/update", formData,
            {headers : {"Authorization" : this.myStorage.getItem("session")}}
        )
    }

    deleteWord(id) {
        return axios.delete(this.serverURL + "/word/" + id + "/delete",
            {headers : {"Authorization" : this.myStorage.getItem("session")}})
    }

    getPartsOfSpeechOfWord (word) {
        return axios.get(this.serverURL + "/partsOfSpeech/" + word,
            {headers : {"Authorization" : this.myStorage.getItem("session")}})
    }

    searchByWord(word, page) {
        return axios.get(this.serverURL + "/searchByWord/" + word + "/page/" + page,
            {headers : {"Authorization" : this.myStorage.getItem("session")}})
    }

    searchByLetter(letter, page) {
        return axios.get(this.serverURL + "/searchByLetter/" + letter + "/page/" + page,
            {headers : {"Authorization" : this.myStorage.getItem("session")}})
    }

    getAllNotApprovedWords() {
        return axios.get(this.serverURL + "/words/getnotapproved",
            {headers : {"Authorization" : this.myStorage.getItem("session")}})
    }

    getAllWordsFromLib(libName, shuffleFlag) {
        return axios.get(this.serverURL + "/lib/" + libName + "/words/get/" + shuffleFlag,
            {headers : {"Authorization" : this.myStorage.getItem("session")}}).then(el => el.data);
    }
}

export const wordService = new WordService();
