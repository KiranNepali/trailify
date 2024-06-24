"use client";
import React from "react";
import AllExpHero from "./AllExpHero";
import AllExp from "./AllExp";
import Snowfall from "react-snowfall";

type Props = {};

function AllExpMain({}: Props) {
  return (
    <>
      <Snowfall
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 1000,
          pointerEvents: "none",
        }}
      />
      <div>
        <AllExpHero />
        <div className="w-11/12 md:w-10/12 mx-auto">
          <AllExp />
        </div>
      </div>
    </>
  );
}

export default AllExpMain;
