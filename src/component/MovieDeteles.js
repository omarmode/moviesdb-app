import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function MovieDeteles() {
  const param = useParams();
  const [onemovie, setonemovie] = useState([]);
  const GetAllMoviesDetales = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${param.id}?api_key=215a579fe76bbaec61bc489847e184bf&language=ar`
    );
    setonemovie(res.data);
    // console.log(res.data.title);
  };
  useEffect(() => {
    GetAllMoviesDetales();
  });
  return (
    <div>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="d-flex align-items-center">
          <img
            src={`https://image.tmdb.org/t/p/w500/` + onemovie.poster_path}
            className="img-movie w-30"
          />

          <div className="justify-content-center text-center mx-auto">
            <p className="border-bottom card-text-details">
              فيلم:{onemovie.title}
            </p>
            <p className="border-bottom card-text-details">
              تاريخ:{onemovie.release_date}
            </p>
            <p className="border-bottom card-text-details">
              :عدد المقيمين{onemovie.vote_count}
            </p>
            <p className="border-bottom card-text-details">
              التقييم:{onemovie.vote_average}
            </p>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="d-flex align-items-center mt-1">
          <div className="d-flex align-items-start flex-column card-story">
            <div className="text-end p-4">
              <p className="card-text-title border-bottom">القصه:</p>
            </div>
            <div className="text-end px-2">
              <p className="card-text-story">{onemovie.overview}</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center d-flex">
        <Col
          md="10"
          xs="12"
          sm="12"
          className="d-flex align-items-center mt-1 justify-content-between py-5"
        >
          <Link to="/">
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary  "
            >
              عوده للرئيسيه
            </button>
          </Link>
          <a href={onemovie.homepage}>
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary "
            >
              مشاهدة الفيلم
            </button>
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default MovieDeteles;
