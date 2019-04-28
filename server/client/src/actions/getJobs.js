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

export const applyJob = (applyjob, history) => {
    console.log("apply");
    // axios
    //     .post("api/job/apply", applyjob)
    //     .then(res => history.push("/searchpage"))
    //     .then(err => console.log(err));
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
            .get("/api/jobsmultiple/companyName", { params: searchJob })
            .then(res => dispatch({ type: "SEARCH_JOBS", payload: res.data }));
    }
};
