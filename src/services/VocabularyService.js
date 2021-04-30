import axios from "axios";

class VocabularyService {
    serverURL = "http://localhost:8080";

//TODO hardcode library ID
    getVocabulary () {
        return axios.get(this.serverURL + "/lib/1/words/get").then(el => el.data);
    }

    addNewWord (word, partOfSpeech, description, example, translation) {
        const formData = new FormData();
        formData.set("word", word);
        formData.set("partOfSpeech", partOfSpeech);
        formData.set("description", description);
        formData.set("example", example);
        formData.set("image", "");
        //TODO достать язык из редакса
        const language = "ru";
        let trans;
        if (language === "ru") trans = {"ru": translation, "ua": ""};
        else if (language === "ua") trans = {"ru": "", "ua": translation}
        formData.set("translation", JSON.stringify(trans));

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
        //TODO достать язык из редакса
        const language = "ru";
        let trans;
        if (language === "ru") trans = {"ru": translation, "ua": ""};
        else if (language === "ua") trans = {"ru": "", "ua": translation}
        formData.set("translation", JSON.stringify(trans));

        return axios.patch(
            this.serverURL + "/word/" + id + "/update", formData
        )
    }

    deleteWord(id) {
        //TODO response
        axios.delete(this.serverURL + "/word/" + id + "/delete")
    }
}

export const vocabularyService = new VocabularyService();
