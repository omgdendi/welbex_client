import {connect} from "react-redux";
import Dialog from "./Dialog";
import {resetSettings, setShowDialog} from "../../../redux/reducers/blogsReducer";

const mapStateToProps = (state) => {
    return {
    };
}

export default connect(mapStateToProps, {
    setShowDialog,
    resetSettings
})(Dialog);
