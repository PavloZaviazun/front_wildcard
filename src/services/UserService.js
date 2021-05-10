import axios from "axios";

class UserService {
    serverURL = "http://localhost:8080";
    myStorage = window.localStorage;

    getUserByToken() {
        return axios.get(this.serverURL + "/user/get",
            {headers : {"Authorization" : this.myStorage.getItem("session")}}).then(el => el.data)
    }

    updateUser(id, nativeLang, email) {
        const formData = new FormData();
        formData.set("nativeLang", nativeLang);
        formData.set("email", email);
        return axios.patch(this.serverURL + `/user/${id}/update`, formData,
            {headers: {"Authorization": this.myStorage.getItem("session")}}).then(el => el.data)
    }

}

export const userService = new UserService();
