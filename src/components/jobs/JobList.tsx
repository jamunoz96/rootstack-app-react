import { useSelector } from "react-redux";

const JobList = () => {
    const { data } = useSelector((state: any) => state.job);
    return <>
    <div className="row c-container-jobs">
    {  data.map((job : any, index: number) => {
            return (
                <div className="col-md-6" key={index}>
                    <div className="card c-card" >
                        <img src={job.image} height="200" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{job.title}</h5>
                            <p className="card-text">{job.description}</p>
                            <p>Status: <span className="badge bg-info text-dark">{job.status}</span></p>
                        </div>
                    </div>
                </div>
            );
        }) 
    }
    </div>
    </>;
}

export default JobList;