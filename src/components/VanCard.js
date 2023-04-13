import React from "react";
import { Link } from "react-router-dom";

const VanCard = ({ van }) => {
  return (
    <Link to={`/vans/${van.id}`} key={van.id} className="van-tile">
      <img src={van.imageUrl} alt="van" />
      <div className="van-info">
        <h3>{van.name}</h3>
        <p>
          ${van.price}
          <span>/day</span>
        </p>
      </div>
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
    </Link>
  );
};

export default VanCard;
