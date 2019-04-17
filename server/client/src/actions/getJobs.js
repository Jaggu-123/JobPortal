import axios from "axios";
// dispatch({ type: "FETCH_JOBS", payload: res.data })
export const getAllJobs = () => dispatch => {
    console.log("jobs");
    axios
        .get("/api/jobs")
        .then(res => dispatch({ type: "FETCH_JOBS", payload: res.data }));
};
