import React from "react";

export default function Loader() {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-500"></div>
    </div>
  );
}
