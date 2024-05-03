import React from "react";
import {stats} from "../constants";

const Stats = () => {
  return (
    <div className="flex justify-between mb-10 sm:flex-row flex-col">
      {stats.map((item, index)=>(
        <div className="flex items-center py-4 pr-4 space-x-2">
          <h3 className="font-bold text-3xl font-poppins">{item.value}</h3>
          <p className="font-light font-poppins text-cyan-600 text-sm">
            {item.title}
          </p>
      </div>
      ))}
      

    </div>
  );
};

export default Stats;
