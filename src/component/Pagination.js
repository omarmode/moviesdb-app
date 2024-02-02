import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import ReactPaginate from "react-paginate";
import MoviesList from "./MoviesList";
const PaginationItem = ({ GetAllMoviesPages, GetAllMovies }) => {
  const handlePageClick = (data) => {
    console.log(data.selected + 1);
    GetAllMoviesPages(data.selected + 1);
  };
  const pageCount = 500;
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel="< previous"
      containerClassName={"pagination justify-content-center p-3"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active "}
    />
  );
};
export default PaginationItem;
