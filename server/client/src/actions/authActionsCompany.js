import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

export const registerCompany = (userData, history) => dispatch => {
    axios
        .post("/api/company/register", userData)
        .then(res => history.push("/"))
        .catch(err => console.log(err));
};

export const registerPost = (userData, history) => {
    axios
        .post("/api/jobs/register", userData)
        .then(res => console.log(res))
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
            dispatch(setCurrentCompany(decoded));
            console.log(decoded);
            history.push("/");
        })
        .catch(err => console.log(err));
};

// Set logged in user
export const setCurrentCompany = decoded => {
    return {
        type: "SET_CURRENT_USER",
        payload: decoded
    };
};

export const unsetCurrentCompany = () => {
    return {
        type: "UNSET_CURRENT_USER",
        payload: []
    };
};

// Log user out
export const logoutCompany = () => dispatch => {
    // Remove token from localStorage
    localStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to {} which will set isAuthenticated to false
    dispatch(unsetCurrentCompany({}));
};
