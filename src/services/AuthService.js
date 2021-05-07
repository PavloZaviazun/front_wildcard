import axios from "axios";

class AuthService {
    serverURL = "http://localhost:8080";

    registrationHandle(username, password) {
        const formData = new FormData();
        formData.set("username", username);
        formData.set("password", password);
        console.log(formData.get("username"))
        return axios.post(this.serverURL + "/register", formData)
    }

    loginHandle(name, pass) {
        const user = {username: name, password: pass};
        return axios.post(this.serverURL + "/login", JSON.stringify(user))
    }

}
export const authService = new AuthService();
