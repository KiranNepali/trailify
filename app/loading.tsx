import React from "react";

type Props = {};

export default function loading({}: Props) {
  return (
    <div className="w-full h-screen flex  justify-center items-center">
      <div className="loader"></div>
    </div>
  );
}
