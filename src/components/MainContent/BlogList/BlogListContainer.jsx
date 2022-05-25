import {connect} from "react-redux";
import BlogList from "./BlogList";
import {
    deleteBlog,
    setCurrentId,
    setCurrentMessage,
    setOpenSettings,
    setShowDialog
} from "../../../redux/reducers/blogsReducer";

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs.blogs,
        user: state.auth.user
    };
}

export default connect(mapStateToProps, {
    deleteBlog,
    setShowDialog,
    setOpenSettings,
    setCurrentMessage,
    setCurrentId
})(BlogList);
