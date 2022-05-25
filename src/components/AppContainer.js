import {connect} from "react-redux";
import {checkAuth, logout} from "../redux/reducers/authReducer";
import App from "./App";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        isLoading: state.auth.isLoading
    };
}

export default connect(mapStateToProps, {
    checkAuth,
    logout
})(App);
