import JobBoardComponent from "./components/jobBoardComponent";
import React, { useState, useEffect } from "react";
import data from "./data/data.json";

function App() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => setJobs(data), []);

  const [filters, setFilters] = useState([]);

  const filterFun = ({ role, level, tools, languages }) => {
    if (filters.length === 0) {
      return true;
    }

    const tags = [role, level];

    if (tools) {
      tags.push(...tools);
    }

    if (languages) {
      tags.push(...languages);
    }
    return filters.every(filter=> tags.includes(filter));
  };
  const handleTagClick = (tag) => {
    if (filters.includes(tag)) return;
    setFilters([...filters, tag]);
  };
  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter));
  };
  const filteredJobs = jobs.filter(filterFun);
  const clearFilters = () => {
    setFilters([]);
  };
  return (
    <>
      <header className="w-full bg-teal-500 mb-12 ">
        <img src="/images/bg-header-desktop.svg" alt="" />
      </header>
      <div className="container m-auto">
        {filters.length > 0 && (
          <div className=" flex flex-wrap bg-white shadow-md flex -my-20 z-10 relative mb-16 mx-10 p-6 rounded">
            {filters.map((filter) => (
              <span
                onClick={() => {
                  handleFilterClick(filter);
                }}
                className="cursor-pointer text-teal-500 bg-teal-100 font-bold mr-4 mb-4 p-2 rounded lg:mb-0"
              >
                {filter}
                <span className="ml-2 text-1xl font-bold sm:mb-0">&times;</span>
              </span>
            ))}
            <button
              onClick={clearFilters}
              className="font-bold text-gray-700 ml-auto"
            >
              Clear
            </button>
          </div>
        )}
        {jobs.length === 0 ? (
          <p>jobs are fetching</p>
        ) : (
          filteredJobs.map((job) => (
            <JobBoardComponent
              job={job}
              key={job.id}
              handleTagClick={handleTagClick}
            />
          ))
        )}
      </div>
    </>
  );
}

export default App;
