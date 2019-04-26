import axios from "axios";
// dispatch({ type: "FETCH_JOBS", payload: res.data })
export const getAllJobs = () => dispatch => {
    console.log("jobs");
    axios
        .get("/api/jobsmultiple")
        .then(res => dispatch({ type: "FETCH_JOBS", payload: res.data }));
};

export const searchJobID = searchJob => dispatch => {
    console.log(searchJob);
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
