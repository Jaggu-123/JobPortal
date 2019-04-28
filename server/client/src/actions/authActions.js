import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

export const registerUser = (
    userData,
    formData,
    formData1,
    config,
    history
) => dispatch => {
    axios.post("/api/users/upload", formData, config).then(res => {
        userData.url = res.data.url;
        axios.post("/api/users/uploadDoc", formData1, config).then(rese => {
            userData.resume = rese.data.url;
            axios
                .post("/api/users/register", userData)
                .then(rest => history.push("/registerEducation"))
                .catch(err => console.log(err));
        });
    });
};

export const registerEdu = (userData, history) => dispatch => {
    console.log(userData);
    axios
        .post("/api/users/education", userData)
        .then(res => history.push("/registerExperience"))
        .catch(err => console.log(err));
};

export const registerExp = (userData, history) => dispatch => {
    axios
        .post("/api/users/experience", userData)
        .then(res => history.push("/"))
        .catch(err => console.log(err));
};

// Login - Get User Token
export const loginUser = (userData, history) => dispatch => {
    console.log(userData);
    axios
        .post("/api/users/login", userData)
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
export const setCurrentUser = () => dispatch => {
    const token = localStorage.getItem("jwtToken");
    if (token == null) {
        unsetCurrentUser({});
    } else {
        const decoded = jwt_decode(token);
        dispatch({
            type: "SET_CURRENT_USER",
            payload: decoded
        });
    }
};

export const unsetCurrentUser = () => {
    return {
        type: "UNSET_CURRENT_USER",
        payload: []
    };
};

// Log user out
export const logoutUser = () => dispatch => {
    // Remove token from localStorage
    localStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to {} which will set isAuthenticated to false
    dispatch(unsetCurrentUser({}));
};
