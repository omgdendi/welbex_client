import {connect} from "react-redux";
import BlogForm from "./BlogForm";
import {addNewBlog, resetSettings, setShowDialog, updateBlog} from "../../../../redux/reducers/blogsReducer";

const mapStateToProps = (state) => {
    return {
        isOpenSettings: state.blogs.isOpenSettings,
        currentMessage: state.blogs.currentMessage,
        currentId: state.blogs.currentId
    };
}

export default connect(mapStateToProps, {
    addNewBlog,
    setShowDialog,
    updateBlog,
    resetSettings
})(BlogForm);
