import axios from "axios";

class LibService {
    serverURL = "http://localhost:8080";

    getLibs() {
        return axios.get(this.serverURL + "/libs/get").then(el => el.data)
    }

    getLibsOfWord(idWord) {
        return axios.get(this.serverURL + "/libs/" + idWord).then(el => el.data)
    }

    addToLibExistingWord(idLib, idWord) {
        return axios.post(this.serverURL + "/lib/" + idLib +"/" + idWord + "/add")
    }

    addToLibNotExistingWord (idLib, word, partOfSpeech, description, example, translation) {
        const formData = new FormData();
        formData.set("word", word);
        formData.set("partOfSpeech", partOfSpeech);
        formData.set("description", description);
        formData.set("example", example);
        formData.set("image", "");
        formData.set("translation", JSON.stringify(translation));
        return axios.post(this.serverURL + "/lib/" + idLib + "/add", formData)
    }
}

export const libService = new LibService();
