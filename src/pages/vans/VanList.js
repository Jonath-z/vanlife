import React, { useEffect, useState } from "react";
import VanCard from "../../components/VanCard";
import { nanoid } from "nanoid";

const VanList = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/vans");
      const data = await response.json();
      setVans(data.vans);
    })();
  }, []);

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">
        {vans.map((van) => (
          <VanCard key={nanoid()} van={van} />
        ))}
      </div>
    </div>
  );
};

export default VanList;
