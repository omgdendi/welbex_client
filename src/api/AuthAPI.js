import $api from "../http/http";

export const AuthAPI = {
    async login(username, password) {
        return $api.post('auth/login', {username, password});
    },

    async registration(username, password) {
        return $api.post('auth/registration', { username, password });
    },

    async logout() {
        return $api.post('auth/logout');
    },
}
