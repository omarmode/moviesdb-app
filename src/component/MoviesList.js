import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PaginationItem from "./Pagination";
import Pages from "./Pages";

const MoviesList = ({ movies, GetAllMoviesPages, pageCount }) => {
  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (
        movies.map((item) => {
          return <CardMovie key={item.id} item={item} />;
        })
      ) : (
        <h2> لا يوجد افلام </h2>
      )}
      <PaginationItem
        GetAllMoviesPages={GetAllMoviesPages}
        pageCount={pageCount}
      />
      {/* <Pages GetAllMoviesPages={GetAllMoviesPages}></Pages> */}
    </Row>
  );
};
export default MoviesList;
