import React from "react";

function JobBoardComponent({
  job: {
    id,
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
  const tags = [role,level];
  if (languages) {
    tags.push(...languages);
  }
  if (tools) {
    tags.push(...tools);
  }
  
  return (
    <div
      className={`flex flex-col bg-white shadow-md mx-10 my-16 p-6 rounded ${
        featured && "border-l-4 border-teal-500 border-solid"
      } sm:flex-row`}
    >
      <div>
        <img
          className="-mt-16 mb-4 w-20 h-20  sm:h-24 sm:w-24 sm:my-0"
          src={logo}
          alt={company}
        />
      </div>
      <div className="ml-4 flex flex-col  justify-between ">
        <h3 className="font-bold text-teal-500">
          {company}
          {isNew && (
            <span className="bg-teal-500 text-teal-100 font-bold m-2 px-2 py-1 rounded-full uppercase text-sm ">
              new
            </span>
          )}
          {featured && (
            <span className="bg-gray-800 text-white font-bold m-2 px-2 py-1 rounded-full uppercase text-sm">
              featured
            </span>
          )}
        </h3>
        <h2 className="font-bold text-xl my-2 ">{position}</h2>
        <p className="text-gray-700">
          {postedAt} &middot; {contract} &middot; {location}
        </p>
      </div>
      <div className="flex flex-wrap  items-center mt-4 mx-4 pt-4 border-t border-gray-500 border-soild sm:ml-auto sm:border-0 sm:pt-0 sm:mt-0 ">
        {tags
          ? tags.map((tag) => (
              <span className="text-teal-500 bg-teal-100 font-bold mr-4 mb-4 p-2 rounded sm:mb-0">
                {tag}
              </span>
            ))
          : ""}
      </div>
    </div>
  );
}

export default JobBoardComponent;
