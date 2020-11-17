import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import "../Search";

const SearchBooks = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    API.getBook("Jung")
      .then((response) => {
        console.log(response.data.items);
        setBook(response.data.items);
      })
      .catch((err) => {
        if (err) throw err;
      });
  }, []);
  const handleSearch = (e) => {
    API.getBook(e)
      .then((response) => {
        console.log(response.data.items);
        setBook(response.data.items);
      })
      .catch((err) => {
        if (err) throw err;
      });
  };
  return (
    <div className="container fluid">
      <div className="row">
        <div className="col">
          <h2>Search Page</h2>
          <table className="table table-dark">
            <div className="search-bar row">
              <div className="col-sm-3" />
              <div className="col-sm-6 search-div">
                <input
                  type="text"
                  className="form-control input-search"
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search for employee"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
              <div className="col-sm-3" />
            </div>
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Link</th>
                {/* <th scope="col">Age</th> */}
              </tr>
            </thead>
            <tbody>
              {book.map((book) => {
                return (
                  <tr>
                    <th scope="row">
                      <img src={book.volumeInfo.imageLinks.smallThumbnail} />
                    </th>
                    <td key={book.id}>{book.title}</td>
                    <td>{book.authors}</td>
                    <td>
                      <a href="">link</a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SearchBooks;
