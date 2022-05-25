import {AuthAPI} from "../../api/AuthAPI";
import axios from "axios";
import {API_URL} from "../../http/http";
import {getBlogs} from "./blogsReducer";

const SET_AUTH = "SET_AUTH";
const SET_USER = "SET_USER";
const SET_LOADING = "SET_LOADING";
const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";

const initialState = {
    isAuth: false,
    user: {},
    isLoading: false,
    errorMessage: null
};

const authReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                isAuth: action.value
            }
        case SET_USER:
            return {
                ...state,
                user: action.user
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.value
            }
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.message
            }
        default:
            return state;
    }
}

export const setAuth = (value) => {
    return {
        type: SET_AUTH,
        value
    }
}

export const setUser = (user) => {
    return {
        type: SET_USER,
        user
    }
}

export const setLoading = (value) => {
    return {
        type: SET_LOADING,
        value
    }
}

export const setErrorMessage = (message) => {
    return {
        type: SET_ERROR_MESSAGE,
        message
    }
}

export const login = (username, password) => (dispatch) => {
    dispatch(setLoading(true));
    AuthAPI.login(username, password)
        .then(response => {
            if (response.status === 200) {
                localStorage.setItem('token', response.data.userData.accessToken);
                dispatch(setAuth(true));
                dispatch(setUser(response.data.userData.user));
                dispatch(getBlogs());
            }
        })
        .catch(error => {
            dispatch(setErrorMessage(error.response.data.message));
        })
        .finally(() => {
                dispatch(setLoading(false));
            }
        );
}

export const registration = (username, password) => (dispatch) => {
    AuthAPI.registration(username, password)
        .then(response => {
            localStorage.setItem('token', response.data.userData.accessToken);
            dispatch(setAuth(true));
            dispatch(setUser(response.data.userData.user));
            dispatch(getBlogs());
        })
        .catch(error => {
            dispatch(setErrorMessage(error.response.data.message));
        })
        .finally(() => {
                dispatch(setLoading(false));
            }
        )
}

export const logout = (username, password) => (dispatch) => {
    AuthAPI.logout()
        .then(response => {
            localStorage.removeItem("token");
            dispatch(setAuth(false));
            dispatch(setUser({}));
        })
        .catch(error => {
            alert(`Непредвиденный ответ ${error.response.status} от сервера!`);
        })
}

export const checkAuth = () => (dispatch) => {
    dispatch(setLoading(true));
    axios.get(`${API_URL}auth/refresh`, {withCredentials: true})
        .then(response => {
                localStorage.setItem('token', response.data.tokens.accessToken);
                dispatch(setAuth(true));
                dispatch(setUser(response.data.tokens.user));
                dispatch(getBlogs());
            }
        )
        .catch(error => {
            alert(`Непредвиденный ответ ${error.response.status} от сервера!`);
        })
        .finally(() => {
                dispatch(setLoading(false));
            }
        )

}

export default authReducer;