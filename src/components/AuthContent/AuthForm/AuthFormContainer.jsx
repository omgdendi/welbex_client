import {connect} from "react-redux";
import {login, registration} from '../../../redux/reducers/authReducer'
import AuthForm from "./AuthForm";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        errorMessage: state.auth.errorMessage
    };
}

export default connect(mapStateToProps, {
    login,
    registration
})(AuthForm);
