import React, { useContext, useRef, useState } from "react";
import { BookContext } from "../context/BookContext";
import { UpdateBook } from "./UpdateBook";

export const Books = () => {
  const { books, removeBook } = useContext(BookContext);
  const [show, setShow] = useState(false);
  const [row, setRow] = useState("");

  //  setRow(tableData);
  return (
    <div className="container my-2 ">
      <h1>Books</h1>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => {
            return (
              <tr key={book.id}>
                <td>{index + 1}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td className="d-flex justify-content-space-between">
                  <button
                    onClick={() => removeBook(book.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => setShow(!show)}
                    data-toggle="modal"
                    className="btn btn-primary btn-sm"
                  >
                    Update
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {show ? <UpdateBook show={show} /> : ""}
    </div>
  );
};
