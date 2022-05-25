import {connect} from "react-redux";
import Header from "./Header";
import {logout} from "../../redux/reducers/authReducer";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    };
}

export default connect(mapStateToProps, {
    logout
})(Header);
