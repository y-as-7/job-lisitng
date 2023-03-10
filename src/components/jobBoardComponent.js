import React from "react";



function JobBoardComponent({job}) {
    
  return (
    <div className="flex">
        <div>
          <img src={`../data${job.logo}`} alt={job.company}/>
        </div>
        
        <div>
        </div>
        <div></div>
    </div>
  )
}

export default JobBoardComponent;

