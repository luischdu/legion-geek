import React from "react";
import { Link } from "react-router-dom";

const VerCardNoticias = ({ item }) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={item.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.description}</p>
          <Link to="/noticias" className="btn btn-primary">
            {item.id}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerCardNoticias;
