import React from "react";
import AllTrekHero from "./AllTrekHero";
import AllTrek from "./AllTrek";
import Leaf from "./leaf";

type Props = {};

function AllTrekMain({region}: any) {
  return (
    <div>
      <Leaf />
      <div className="relative">
        <AllTrekHero region={region} />
      </div>
      <div className="w-11/12 relative z-50 md:w-10/12 mx-auto">
        <AllTrek region={region} />
      </div>
    </div>
  );
}

export default AllTrekMain;
