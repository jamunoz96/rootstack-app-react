import { useEffect } from "react";
import { getJobsAction } from "../../redux/jobs/jobActions";
import { globalDispatch } from "../../redux/utils/globalDispatch";
import JobList from "./JobList";
import JobStats from "./JobStats";
import "./jobs.scss"
import Map from "../Map/Map";

const Jobs = () => {

    useEffect(() => {
        globalDispatch(getJobsAction());
    }, []);

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
                </div>
                <div className="col-md-5">
                    <Map
                        isMarkerShown
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB2NvJQg_BTuL3ziQ1733izl0NjyjRJyWE&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `650px` }} />}
                        mapElement={<div style={{ height: `100%` }} />} />

                    <div className="badge">
                        <button>Siguiente</button>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default Jobs;