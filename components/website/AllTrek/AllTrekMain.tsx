import React from "react";
import AllTrekHero from "./AllTrekHero";
import AllTrek from "./AllTrek";

type Props = {};

function AllTrekMain({}: Props) {
  return (
    <div>
      <AllTrekHero />
      <div className="w-11/12 md:w-10/12 mx-auto">
        <AllTrek />
      </div>
    </div>
  );
}

export default AllTrekMain;
