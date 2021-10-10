import React from "react";
import NavbarAuth from "../../components/commons/Navbar";
import Jobs from "../../components/jobs/Jobs";

const Home = () => {
    return <>
        <NavbarAuth />
        <Jobs />
    </>
}

export default React.memo(Home);