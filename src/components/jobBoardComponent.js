import React from "react";

function JobBoardComponent({
  job: {
    company,
    logo,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  },
}) {
  const langAndTools = [];
  if (languages) {
    langAndTools.push(...languages);
  }
  if (tools) {
    langAndTools.push(...tools);
  }
  return (
    <div className="flex bg-white shadow-md m-4 p-4">
      <div>
        <img src={logo} alt={company} />
      </div>
      <div className="ml-4 flex flex-col  justify-between ">
        <h3 className="font-bold text-teal-500">{company}</h3>
        <h2 className="font-bold text-xl ">{position}</h2>
        <p className="text-gray-700">
          {postedAt} &middot; {contract} &middot; {location}
        </p>
      </div>
      <div className="flex  items-center justify-center">
        {langAndTools
          ? langAndTools.map((langAndTool) =>
              <span className="text-teal-500 bg-teal-100 font-bold m-2 p-2 rounded">{langAndTool}</span>)
          : ""}
      </div>
    </div>
  );
}

export default JobBoardComponent;
