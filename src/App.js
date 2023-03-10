import JobBoardComponent from "./components/jobBoardComponent";
import React, { useState, useEffect } from "react";
import data from "./data/data.json";

function App() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => setJobs(data), []);

  return (
    <div>
      {jobs.length === 0 ? (
        <p>jobs are fetching</p>
      ) : (
        jobs.map((job) => <JobBoardComponent job={job} key={job.id} />)
      )}
    </div>

  );
}

export default App;
