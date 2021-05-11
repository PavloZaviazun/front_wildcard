import axios from "axios";

class UserService {
    serverURL = "http://localhost:8080";
    myStorage = window.localStorage;

    getUserByToken() {
        return axios.get(this.serverURL + "/user/get",
            {headers : {"Authorization" : this.myStorage.getItem("session")}}).then(el => el.data)
    }

    addWordToUserCustom(id) {
        const formData = new FormData();
        formData.set("id", id);
        return axios.post(this.serverURL + `/user/add/customlib/word`, formData,
            {headers : {"Authorization" : this.myStorage.getItem("session")}})
    }

    getCustomLibIds() {
        return axios.get(this.serverURL + "/user/get/customlibids",
            {headers : {"Authorization" : this.myStorage.getItem("session")}}).then(el => el.data)
    }

    updateUser(id, nativeLang, email) {
        const formData = new FormData();
        formData.set("nativeLang", nativeLang);
        formData.set("email", email);
        return axios.patch(this.serverURL + `/user/${id}/update`, formData,
            {headers: {"Authorization": this.myStorage.getItem("session")}});
    }

}

export const userService = new UserService();
