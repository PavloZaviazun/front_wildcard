import axios from "axios";

class WordService {
    serverURL = "http://localhost:8080";
    myStorage = window.localStorage;

    getWordsFromLib(idLib, page) {
        return axios.get(this.serverURL + `/lib/${idLib}/words/get/page/${page - 1}`,
            {headers: {"Authorization": this.myStorage.getItem("session")}}).then(el => el.data);
    }

    addNewWord(form) {
        const formData = new FormData(form);
        return axios.post(
            this.serverURL + "/word/add", formData,
            {headers: {"Authorization": this.myStorage.getItem("session")}}
        )
    }

    getWord(id) {
        return axios.get(this.serverURL + "/word/" + id + "/get",
            {headers: {"Authorization": this.myStorage.getItem("session")}})
    }

    getRandomWords(shuffleFlag) {
        return axios.get(this.serverURL + `/mode/random/get/${shuffleFlag}`,
            {headers: {"Authorization": this.myStorage.getItem("session")}})
    }

    updateWord(id, form) {
        const formData = new FormData(form);
        return axios.patch(
            this.serverURL + "/word/" + id + "/update", formData,
            {headers: {"Authorization": this.myStorage.getItem("session")}}
        )
    }

    deleteWord(id) {
        return axios.delete(this.serverURL + "/word/" + id + "/delete",
            {headers: {"Authorization": this.myStorage.getItem("session")}})
    }

    getPartsOfSpeechOfWord(word) {
        return axios.get(this.serverURL + "/partsOfSpeech/" + word,
            {headers: {"Authorization": this.myStorage.getItem("session")}})
    }

    searchByWord(word, page) {
        return axios.get(this.serverURL + `/searchByWord/${word}/page/${page - 1}`,
            {headers: {"Authorization": this.myStorage.getItem("session")}}).then(el => el.data)
    }

    searchByLetter(letter, page) {
        return axios.get(this.serverURL + `/searchByLetter/${letter}/page/${page - 1}`,
            {headers: {"Authorization": this.myStorage.getItem("session")}})
    }

    getNotApprovedWordsPage(page) {
        return axios.get(this.serverURL + `/words/notapproved/get/page/${page - 1}`,
            {headers: {"Authorization": this.myStorage.getItem("session")}}).then(el => el.data)
    }

    getAllWordsFromLib(libName, shuffleFlag) {
        return axios.get(this.serverURL + `/lib/${libName}/words/get/${shuffleFlag}`,
            {headers: {"Authorization": this.myStorage.getItem("session")}}).then(el => el.data);
    }
}

export const wordService = new WordService();
