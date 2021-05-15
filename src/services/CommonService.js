import axios from "axios";
import {userService} from "./UserService";

class CommonService {
    serverURL = "http://localhost:8080";
    myStorage = window.localStorage;
    admin = "ROLE_ADMIN";
    user = "ROLE_USER";

    function1 = async () => {
        return await userService.getUserByToken().then(el => el.roles)
    }


    getAllPartsOfSpeech() {
        return axios.get(this.serverURL + "/partsOfSpeech",
            {headers: {"Authorization": this.myStorage.getItem("session")}}).then(el => el.data)
    }

    getAllNativeLanguages() {
        return axios.get(this.serverURL + "/langs",
            {headers: {"Authorization": this.myStorage.getItem("session")}}).then(el => el.data)
    }

    getAllRoles() {
        return axios.get(this.serverURL + "/roles",
            {headers: {"Authorization": this.myStorage.getItem("session")}}).then(el => el.data)
    }

    sendFeedback(form) {
        const formData = new FormData(form);
        return axios.post(this.serverURL + "/feedback", formData,
            {headers: {"Authorization": this.myStorage.getItem("session")}}
        )
    }
}

export const commonService = new CommonService();
