import {BlogAPI} from "../../api/BlogAPI";

const SET_BLOGS = "SET_BLOGS";
const ADD_BLOG = "ADD_BLOG";
const REMOVE_BLOG = "REMOVE_BLOG";
const SET_SHOW_DIALOG = "SET_SHOW_DIALOG";
const SET_OPEN_SETTINGS = "SET_OPEN_SETTINGS";
const SET_CURRENT_MESSAGE = "SET_CURRENT_MESSAGE";
const SET_CURRENT_ID = "SET_CURRENT_ID";

const initialState = {
    blogs: [],
    isShowDialog: false,
    isOpenSettings: false,
    currentMessage: null,
    currentId: null
};

const blogsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_BLOGS:
            return {
                ...state,
                blogs: action.blogs
            };
        case ADD_BLOG:
            return {
                ...state,
                blogs: [...state.blogs, action.blog]
            };
        case REMOVE_BLOG:
            return {
                ...state,
                blogs: state.blogs.filter(b => b.id !== action.id)
            }
        case SET_SHOW_DIALOG:
            return {
                ...state,
                isShowDialog: action.isShow
            }
        case SET_OPEN_SETTINGS:
            return {
                ...state,
                isOpenSettings: action.isSettings
            }
        case SET_CURRENT_MESSAGE:
            return {
                ...state,
                currentMessage: action.message
            }
        case SET_CURRENT_ID:
            return {
                ...state,
                currentId: action.id
            }
        default:
            return state;
    }
}

export const setOpenSettings = (isSettings) => {
    return {
        type: SET_OPEN_SETTINGS,
        isSettings
    }
}

export const setCurrentMessage = (message) => {
    return {
        type: SET_CURRENT_MESSAGE,
        message
    }
}

export const setCurrentId = (id) => {
    return {
        type: SET_CURRENT_ID,
        id
    }
}

export const setShowDialog = (isShow) => {
    return {
        type: SET_SHOW_DIALOG,
        isShow
    }
}

export const setBlogs = (blogs) => {
    return {
        type: SET_BLOGS,
        blogs
    }
}

export const addBlog = (blog) => {
    return {
        type: ADD_BLOG,
        blog
    }
}

export const removeBlog = (id) => {
    return {
        type: REMOVE_BLOG,
        id
    }
}

export const resetSettings = () => (dispatch) => {
    dispatch(setCurrentId(null));
    dispatch(setCurrentMessage(null));
    dispatch(setOpenSettings(false));
}

export const getBlogs = () => (dispatch) => {
    BlogAPI.getBlogs()
        .then(response => {
            if (response.status === 200) {
                dispatch(setBlogs(response.data));
            } else {
                alert(`Непредвиденный ответ ${response.status} от сервера!`);
            }
        })
        .catch(error => {
            alert(`Непредвиденный ответ ${error.response.status} от сервера!`);
        })
}

export const deleteBlog = (id) => (dispatch) => {
    BlogAPI.deleteBlog(id)
        .then(response => {
            if (response.status === 200) {
                dispatch(removeBlog(id));
            } else {
                alert(`Непредвиденный ответ ${response.status} от сервера!`);
            }
        })
        .catch(error => {
            alert(`Непредвиденный ответ ${error.response.status} от сервера!`);
        })
}

export const addNewBlog = (formData) => (dispatch) => {
    BlogAPI.addBlog(formData)
        .then(response => {
            if (response.status === 200) {
                dispatch(addBlog(response.data));
            } else {
                alert(`Непредвиденный ответ ${response.status} от сервера!`);
            }
        })
        .catch(error => {
            alert(`Непредвиденный ответ ${error.response.status} от сервера!`);
        })
}

export const updateBlog = (formData, id) => (dispatch) => {
    BlogAPI.updateBlog(formData, id)
        .then(response => {
            if (response.status === 200) {
                dispatch(getBlogs())
            } else {
                alert(`Непредвиденный ответ ${response.status} от сервера!`);
            }
        })
        .catch(error => {
            alert(`Непредвиденный ответ ${error.response.status} от сервера!`);
        })
}

export default blogsReducer;