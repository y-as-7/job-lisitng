import JobBoardComponent from "./components/jobBoardComponent";
import React, { useState, useEffect } from "react";
import data from "./data/data.json";

function App() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => setJobs(data), []);

  return (
    <div className="bg-blue-100">
      <header className="bg-teal-500 mb-12 ">
        <img src="/images/bg-header-desktop.svg" alt=""/>
      </header>
      {jobs.length === 0 ? (
        <p>jobs are fetching</p>
      ) : (
        jobs.map((job) => <JobBoardComponent job={job} key={job.id} />)
      )}
    </div>

  );
}

export default App;
