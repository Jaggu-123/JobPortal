import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { setCurrentUser, unsetCurrentUser } from "./authActions";

export const registerCompany = (
    userData,
    formData,
    config,
    history
) => dispatch => {
    axios.post("/api/users/upload", formData, config).then(res => {
        userData.logo = res.data.url;

        axios
            .post("/api/company/register", userData)
            .then(rest => history.push("/"))
            .catch(err => console.log(err));
    });
    // axios
    //     .post("/api/company/register", userData)
    //     .then(res => history.push("/"))
    //     .catch(err => console.log(err));
};

export const getCompanyEvent = companyData => dispatch => {
    // console.log(companyData);
    axios
        .get("/api/company/getjob", { params: companyData })
        .then(res => {
            dispatch({ type: "GET_EVENT", payload: res.data });
            // history.push("/allpostjobs");
        })
        .catch(err => console.log(err));
};

// Login - Get User Token
export const loginCompany = (userData, history) => dispatch => {
    console.log(userData);
    axios
        .post("/api/company/login", userData)
        .then(res => {
            // Save to localStorage
            const { token } = res.data;
            // Set token to ls
            localStorage.setItem("jwtToken", token);
            // Set token to Auth header
            setAuthToken(token);
            // Decode token to get user data
            const decoded = jwt_decode(token);
            // Set current user
            dispatch(setCurrentUser({}));
            console.log(decoded);
            history.push("/");
        })
        .catch(err => console.log(err));
};

// Set logged in user
// export const setCurrentCompany = () => {
//     const token = localStorage.getItem("jwtToken");
//     if (token == null) {
//         unsetCurrentCompany({});
//     } else {
//         const decoded = jwt_decode(token);
//         dispatch({
//             type: "SET_CURRENT_USER",
//             payload: decoded
//         });
//     }
// };

// export const unsetCurrentCompany = () => {
//     return {
//         type: "UNSET_CURRENT_USER",
//         payload: []
//     };
// };

// Log user out
export const logoutCompany = () => dispatch => {
    // Remove token from localStorage
    localStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to {} which will set isAuthenticated to false
    dispatch(unsetCurrentUser({}));
};
