import React from "react";

interface PersonCardProps {
  name: string;
  age: number;
  bgColor: string;
}

const PersonCard: React.FC<PersonCardProps> = ({ name, age, bgColor }) => {
  return (
    <div className={`${bgColor} shadow-md rounded p-4 mb-4`}>
      <div className="text-xl font-bold">{name}</div>
      <p>Age: {age}</p>
    </div>
  );
};

const PeopleCards = () => {
  return (
    <div className="p-4">
      <PersonCard name="Alice" age={30} bgColor="bg-slate-200" />
      <PersonCard name="Bob" age={25} bgColor="bg-slate-200" />
      <PersonCard name="Charlie" age={35} bgColor="bg-slate-200" />
    </div>
  );
};

export default PeopleCards;
