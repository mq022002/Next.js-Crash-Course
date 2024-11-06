import React from "react";

const PeopleCards = () => {
  return (
    <div className="p-4">
      <div className="bg-white shadow-md rounded p-4 mb-4">
        <div className="text-xl font-bold">Alice</div>
        <p>Age: 30</p>
      </div>
      <div className="bg-white shadow-md rounded p-4 mb-4">
        <div className="text-xl font-bold">Bob</div>
        <p>Age: 25</p>
      </div>
      <div className="bg-white shadow-md rounded p-4 mb-4">
        <div className="text-xl font-bold">Charlie</div>
        <p>Age: 35</p>
      </div>
    </div>
  );
};

export default PeopleCards;
