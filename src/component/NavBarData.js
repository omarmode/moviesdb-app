import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import MoviesList from "./MoviesList";
import logo from "../Images/logo.avif";
const NavBarData = ({ search }) => {
  const onSearch = (word) => {
    search(word);
  };
  // };
  // const [search, setsearch] = useState("");
  // const [searchMovies, setsearchMovies] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=215a579fe76bbaec61bc489847e184bf&language=ar`
  //     )
  //     .then((response) => {
  //       if (response.data.results) {
  //         setsearchMovies(response.data.results);
  //       }
  //       // return console.log(response.data.results);
  //     });
  // }, [search]);

  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2">
          <Col xs="2" lg="1">
            <a href="/">
              <img className="logo" src={logo}></img>
            </a>
          </Col>
          <Col xs="10" lg="11" className="d-flex align-items-center">
            <div className="search w-100">
              <form className="search-form">
                <input
                  onChange={(e) => onSearch(e.target.value)}
                  type="search"
                  name="search"
                  className="form-control"
                  placeholder="ابحث"
                ></input>
                {/* <button type="submit">search..</button> */}
              </form>
              <div>
                {/* {searchMovies.length > 0 && (
                  <ul>
                    {searchMovies.map((movie) => (
                      <li key={movie.id}>{movie.title}</li>
                    ))}
                  </ul>
                )} */}
              </div>
            </div>
          </Col>
        </Row>
        {/* <MoviesList searchMovies={searchMovies} /> */}
      </Container>
    </div>
  );
};
export default NavBarData;
