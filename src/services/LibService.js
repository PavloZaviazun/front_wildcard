import axios from "axios";
import React from "react";

class LibService extends React.Component {
    serverURL = "http://localhost:8080";
    myStorage = window.localStorage;

    getLibs() {
        return axios.get(this.serverURL + "/libs/get",
            {headers: {"Authorization": this.myStorage.getItem("session")}}).then(el => el.data)
    }

    getLibsWithPage(page) {
        return axios.get(this.serverURL + "/libs/get/page/" + (page-1),
            {headers: {"Authorization": this.myStorage.getItem("session")}}).then(el => el.data)
    }

    getLibsOfWord(idWord) {
        return axios.get(this.serverURL + "/libs/" + idWord,
            {headers: {"Authorization": this.myStorage.getItem("session")}}).then(el => el.data)
    }

    addToLibExistingWord(idLib, idWord) {
        return axios.post(this.serverURL + "/lib/" + idLib + "/" + idWord + "/add",
            {headers: {"Authorization": this.myStorage.getItem("session")}})
    }

    addToLibNotExistingWord(idLib, form) {
        const formData = new FormData(form);
        return axios.post(this.serverURL + "/lib/" + idLib + "/add", formData,
            {headers: {"Authorization": this.myStorage.getItem("session")}})
    }

    createNewLib(name) {
        const formData = new FormData();
        formData.set("name", name);
        return axios.post(this.serverURL + "/lib/add", formData,
            {headers: {"Authorization": this.myStorage.getItem("session")}})
    }

    searchLib(lib) {
        return axios.get(this.serverURL + "/searchLib/" + lib,
            {headers: {"Authorization": this.myStorage.getItem("session")}}).then(el => el.data)
    }

    updateLib(id, name) {
        const formData = new FormData();
        formData.set("name", name);
        return axios.post(this.serverURL + `/lib/${id}/update`, formData,
            {headers: {"Authorization": this.myStorage.getItem("session")}}).then(el => el)
    }
}

export const libService = new LibService();
