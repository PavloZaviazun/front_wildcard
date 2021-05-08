import axios from "axios";

class AuthService {
    serverURL = "http://localhost:8080";

    registrationHandle(email, password, nativeLang) {
        const formData = new FormData();
        formData.set("email", email);
        formData.set("password", password);
        formData.set("nativeLang", nativeLang)
        return axios.post(this.serverURL + "/register", formData)
    }

    loginHandle(name, pass) {
        const user = {username: name, password: pass};
        return axios.post(this.serverURL + "/login", JSON.stringify(user))
    }

}
export const authService = new AuthService();
