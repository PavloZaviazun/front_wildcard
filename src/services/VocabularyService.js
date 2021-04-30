import axios from "axios";
import React from "react";

class VocabularyService {
    serverURL = "http://localhost:8080";

    getVocabulary () {
        return axios.get(this.serverURL + "/lib/1/vocabulary/get").then(el => el.data);
    }

    addNewWord (word, partOfSpeech, description, example, translation) {
        const formData = new FormData;
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
        const formData = new FormData;
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
}

export const vocabularyService = new VocabularyService();
