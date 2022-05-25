import {connect} from "react-redux";
import Register from "./Register";
import {registration, setErrorMessage} from "../../../../redux/reducers/authReducer";

const mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.errorMessage
    };
}

export default connect(mapStateToProps, {
    registration,
    setErrorMessage
})(Register);
