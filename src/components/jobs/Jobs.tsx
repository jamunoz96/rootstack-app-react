import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { backJobsAction, currentJobsAction, getJobsAction, nextJobsAction } from "../../redux/actions/jobActions";
import { globalDispatch } from "../../redux/utils/globalDispatch";
import JobList from "./JobList";
import JobStats from "./JobStats";
import Map from "../Map/Map";
import "./jobs.scss"

const Jobs = () => {

    const {current_page, last_page} = useSelector((state : any) => state.job);
    useEffect(() => {
        if(current_page === 1) globalDispatch(getJobsAction());
        else if (current_page > 1) globalDispatch(currentJobsAction());
        // eslint-disable-next-line
    }, []);

    const handleNextPage = () => globalDispatch(nextJobsAction());
    const handleBackPage = () => globalDispatch(backJobsAction());

    return <>
        <div className="mt-4 mb-4">
            <div className="row">
                <div className="col-md-7">
                    <div className="row mb-3">
                        <div className="col-md-9">
                            <h1><b>Job List</b></h1>
                        </div>
                        <div className="col-md-3">
                            <JobStats />
                        </div>
                    </div>
                    <JobList />
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
                        {
                            current_page === 1 ? "" :
                            <button onClick={handleBackPage} className="btn btn-dark me-md-2" type="button">Back</button>
                        }
                        {
                            last_page === current_page ? "" :
                            <button onClick={handleNextPage} className="btn btn-dark" type="button">Next</button>
                        }
                    </div>
                </div>
                <div className="col-md-5">
                    <Map 
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB2NvJQg_BTuL3ziQ1733izl0NjyjRJyWE&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `700px` }} />}
                        mapElement={<div style={{ height: `100%` }} />} />
                </div>
            </div>
        </div>
    </>;
}

export default Jobs;