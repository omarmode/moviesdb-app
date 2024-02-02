import React from "react";
import { Col } from "react-bootstrap";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";

const CardMovie = ({ item }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
      <Link to={`/movie/${item.id}`}>
        <div className="card">
          <img
            src={`https://image.tmdb.org/t/p/w500/` + item.poster_path}
            className="card-images"
          />
          <div className="card-overlay">
            <div className="overlay-text text-center w-100 p-2">
              <p>{item.title}: اسم الفيلم</p>
              <p>{item.release_date}: تاريخ الاصدار </p>
              <p>عدد المقيمين:{item.vote_count}</p>
              <p>التقييم:{item.vote_average}</p>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
};
export default CardMovie;
