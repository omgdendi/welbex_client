import {connect} from "react-redux";
import Login from "./Login";
import {login, setErrorMessage} from "../../../../redux/reducers/authReducer";

const mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.errorMessage,
        isAuth: state.auth.isAuth
    };
}

export default connect(mapStateToProps, {
    login,
    setErrorMessage
})(Login);
