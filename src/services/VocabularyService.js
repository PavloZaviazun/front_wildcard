import axios from "axios";
import React from "react";

class VocabularyService {


    serverURL = "http://localhost:8080";
    // function mapStateToProps (state) {
    //     return {language: state.language }
    // }

    getVocabulary () {
        return axios.get(this.serverURL + "/lib/1/vocabulary/get").then(el => el.data);
    }

    addNewWord (word, partOfSpeech, description, example, translation) {
        const formData = new FormData;
        // console.log(this.state)
        // this.mapStateToProps(this.state)
        formData.set("word", word);
        formData.set("partOfSpeech", partOfSpeech);
        formData.set("description", description);
        formData.set("example", example);
        formData.set("image", "");
        const trans = {"ru": "", "ua": ""};
        formData.set("translation", translation);

        return axios.post(
            this.serverURL + "/vocabulary/add", formData
        )
    }
}

export const vocabularyService = new VocabularyService();
