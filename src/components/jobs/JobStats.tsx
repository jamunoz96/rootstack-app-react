import { useSelector } from "react-redux";

export const JobStats = () => {
    const { total } = useSelector((state: any) => state.job);
    return <h5 className="pt-3"><span className="alert alert-info"># Jobs : { total || 0}</span></h5>
}

export default JobStats;