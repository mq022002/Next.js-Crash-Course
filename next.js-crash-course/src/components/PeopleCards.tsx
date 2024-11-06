import React from "react";

interface PersonCardProps {
  name: string;
  age: number;
}

const PersonCard: React.FC<PersonCardProps> = ({ name, age }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <div className="text-xl font-bold">{name}</div>
      <p>Age: {age}</p>
    </div>
  );
};

const PeopleCards = () => {
  return (
    <div className="p-4">
      <PersonCard name="Alice" age={30} />
      <PersonCard name="Bob" age={25} />
      <PersonCard name="Charlie" age={35} />
    </div>
  );
};

export default PeopleCards;
