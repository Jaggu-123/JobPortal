import axios from "axios";
// dispatch({ type: "FETCH_JOBS", payload: res.data })
export const getAllJobs = () => dispatch => {
    console.log("jobs");
    axios
        .get("/api/jobsmultiple")
        .then(res => dispatch({ type: "FETCH_JOBS", payload: res.data }));
};

export const searchJobID = searchJob => dispatch => {
    axios
        .get("/api/job/detail", { params: searchJob })
        .then(res => dispatch({ type: "GET_JOBS", payload: res.data }));
};

export const DeleteJob = (userData, history) => dispatch => {
    console.log(userData);
    axios
        .post("/api/job/delete", userData)
        .then(res => history.push("/"))
        .catch(err => alert(err));
};

export const registerPost = (userData, history) => dispatch => {
    // console.log(userData);
    axios
        .post("/api/jobs/register", userData)
        .then(res => history.push("/"))
        .catch(err => console.log(err));
};

export const allApplyUsers = (userData, history) => dispatch => {
    // console.log(userData);
    axios
        .get("/api/jobsmultiple/jobactivitydata", { params: userData })
        .then(res => {
            dispatch({ type: "APPLY_USERS", payload: res.data });
            history.push("/allapplyUser");
        })
        .catch(err => console.log(err));
};

export const applyJob = (applyjob, history) => dispatch => {
    console.log("apply");
    axios
        .post("/api/job/apply", applyjob)
        .then(res => history.push("/searchpage"))
        .then(err => console.log(err));
};

export const searchJob = searchJob => dispatch => {
    if (searchJob.value == "alljobs") {
        axios
            .get("/api/jobsmultiple")
            .then(res => dispatch({ type: "SEARCH_JOBS", payload: res.data }));
    } else if (searchJob.value == "active") {
        axios
            .get("/api/jobsmultiple/active", { params: searchJob })
            .then(res => dispatch({ type: "SEARCH_JOBS", payload: res.data }));
    } else if (searchJob.value == "salary") {
        axios
            .get("/api/jobsmultiple/salary", { params: searchJob })
            .then(res => dispatch({ type: "SEARCH_JOBS", payload: res.data }));
    } else if (searchJob.value == "jobtype") {
        axios
            .get("/api/jobsmultiple/job_type", { params: searchJob })
            .then(res => dispatch({ type: "SEARCH_JOBS", payload: res.data }));
    } else if (searchJob.value == "company") {
        axios
            .get("/api/company/getjobName", { params: searchJob })
            .then(res => dispatch({ type: "SEARCH_JOBS", payload: res.data }));
    }
};
