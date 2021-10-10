import { useSelector } from "react-redux";
import { centerMap } from "../../redux/actions/mapActions";
import { globalDispatch } from "../../redux/utils/globalDispatch";

const JobList = () => {
    const { data } = useSelector((state: any) => state.job);
    const handleShowInMap = (job: any) => globalDispatch(centerMap(12, { lat: parseFloat(job.latitude), lng: parseFloat(job.longitude) }));
    return <>
            <div className="c-container-jobs">
        <div className="row">
                {data.map((job: any, index: number) => {
                    return (
                        <div className="col-md-6" key={job.id} id={`job-card-${job.id}`}>
                            <div className="card c-card" >
                                <img src={job.image} height="200" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{job.title}</h5>
                                    <span>Status: <span className="badge bg-info text-dark">{job.status}</span></span> <br />
                                    <span>Date: <span className="badge bg-warning text-dark">{job.date}</span></span> <br />
                                    <span>Assigned to: <span className="badge bg-dark">{job.assigned_to}</span></span> <br />
                                    <br />
                                    <p className="card-text">{job.description}</p>
                                    <button onClick={() => handleShowInMap(job)} type="button" className="btn btn-outline-warning">Show in map</button>
                                </div>
                            </div>
                        </div>
                    );
                })
                }
                {
                    !data.length ? <div>0 Jobs</div> : ""
                }
            </div>
        </div>
    </>;
}

export default JobList;