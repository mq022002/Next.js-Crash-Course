import React from "react";
import peopleData from "@/data/people.json";

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
  const colors = ["bg-slate-200", "bg-slate-400", "bg-slate-600"];

  return (
    <div className="p-4">
      {peopleData.people.map((person, index) => (
        <PersonCard
          key={index}
          name={person.name}
          age={person.age}
          bgColor={colors[index % colors.length]}
        />
      ))}
    </div>
  );
};

export default PeopleCards;
