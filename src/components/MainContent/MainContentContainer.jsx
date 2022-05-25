import {connect} from "react-redux";
import MainContent from "./MainContent";
import {setShowDialog} from "../../redux/reducers/blogsReducer";

const mapStateToProps = (state) => {
    return {
        isShowDialog: state.blogs.isShowDialog
    };
}

export default connect(mapStateToProps, {
    setShowDialog
})(MainContent);
