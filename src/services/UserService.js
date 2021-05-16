import axios from "axios";

class UserService {
    serverURL = "http://localhost:8080";
    myStorage = window.localStorage;

    getUserByToken() {
        return axios.get(this.serverURL + "/user/get",
            {headers: {"Authorization": this.myStorage.getItem("session")}}).then(el => el.data)
    }

    // addWordToUserCustom(id) {
    //     const formData = new FormData();
    //     formData.set("id", id);
    //     return axios.post(this.serverURL + `/user/customlib/word/add`, formData,
    //         {headers: {"Authorization": this.myStorage.getItem("session")}})
    // }

    addNewWordToUserCustom(form) {
        const formData = new FormData(form);
        return axios.post(this.serverURL + `/user/customlib/add/newword`, formData,
            {headers: {"Authorization": this.myStorage.getItem("session")}})
    }

    updateWordInUserCustom(form, id) {
        const formData = new FormData(form);
        return axios.post(this.serverURL + `/user/customlib/word/${id}/update`, formData,
            {headers: {"Authorization": this.myStorage.getItem("session")}})
    }

    getCustomLibIds() {
        return axios.get(this.serverURL + "/user/customlibids/get",
            {headers: {"Authorization": this.myStorage.getItem("session")}})
    }

    getCustomLib(isApproved, page) {
        return axios.get(this.serverURL + `/user/customlib/get/approved/${isApproved}/page/${page - 1}`,
            {headers: {"Authorization": this.myStorage.getItem("session")}}).then(el => el.data)
    }

    deleteFromUserCustomLib(id) {
        return axios.delete(this.serverURL + `/user/customlib/word/${id}/delete`,
            {headers: {"Authorization": this.myStorage.getItem("session")}})
    }

    addToUserCustomLib(ident) {
        return axios.post(this.serverURL + `/user/customlib/word/add`, {ident: ident},
            {headers: {"Authorization": this.myStorage.getItem("session")}})
    }

    getFavLibs() {
        return axios.get(this.serverURL + "/user/favlibs/get",
            {headers: {"Authorization": this.myStorage.getItem("session")}})
    }

    addFavLib(id) {
        return axios.post(this.serverURL + `/user/favlib/${id}/add`, {},
            {headers: {"Authorization": this.myStorage.getItem("session")}})
    }

    deleteFavLib(id) {
        return axios.delete(this.serverURL + `/user/favlib/${id}/delete`,
            {headers: {"Authorization": this.myStorage.getItem("session")}})
    }

    updateUser(id, nativeLang, email) {
        const formData = new FormData();
        formData.set("nativeLang", nativeLang);
        formData.set("email", email);
        return axios.patch(this.serverURL + `/user/${id}/update`, formData,
            {headers: {"Authorization": this.myStorage.getItem("session")}});
    }

    updateUserAdmin(id, form) {
        const formData = new FormData(form);
        return axios.patch(this.serverURL + `/user/${id}/adminUpdate`, formData,
            {headers: {"Authorization": this.myStorage.getItem("session")}});
    }

    getUsers(page) {
        return axios.get(this.serverURL + `/users/get/page/${page - 1}`,
            {headers: {"Authorization": this.myStorage.getItem("session")}}).then(el => el.data)
    }

}

export const userService = new UserService();
