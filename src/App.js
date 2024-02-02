import { Container } from "react-bootstrap";
import "./App.css";
import NavBarData from "./component/NavBarData";
import MoviesList from "./component/MoviesList";
import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import PaginationItem from "./component/Pagination";
import Pages from "./component/Pages";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import MovieDeteles from "./component/MovieDeteles";

function App() {
  const [movies, setmovies] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  //Api movies
  const GetAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=215a579fe76bbaec61bc489847e184bf&language=ar"
    );
    setmovies(res.data.results);
    setpageCount(res.data.total_pages);
    // console.log(res.data.total_results);
  };
  //pages movies
  const GetAllMoviesPages = async (data) => {
    const res2 = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=215a579fe76bbaec61bc489847e184bf&language=ar&page=${data}`
    );
    setmovies(res2.data.results);
    setpageCount(res2.data.total_pages);
  };
  useEffect(() => {
    GetAllMovies();
  }, []);
  //Search data
  const search = async (search) => {
    if (search === "") {
      GetAllMovies();
    } else {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=215a579fe76bbaec61bc489847e184bf&language=ar`
      );
      setmovies(response.data.results);
      setpageCount(response.data.total_pages);
    }
    // return console.log(response.data.results);
  };

  return (
    <div className="App">
      <NavBarData search={search} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MoviesList
                  movies={movies}
                  GetAllMoviesPages={GetAllMoviesPages}
                  pageCount={pageCount}
                />
              }
            />

            <Route path="/movie/:id" element={<MovieDeteles />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
