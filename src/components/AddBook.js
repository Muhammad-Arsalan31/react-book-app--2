import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";

export const AddBook = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: Math.random(),
      title,
      author,
    };
    addBook(newBook);
    setAuthor("");
    setTitle("");
  };

  return (
    <div className="w-100 bg-light p-5">
      <div
        style={{ minWidth: "300px", maxWidth: "500px" }}
        className="m-auto text-center"
      >
        <h1 className="text-center">Book Liabrary</h1>
        <form className="my-4" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                value={title}
                placeholder="Enter Title"
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="col">
              <input
                type="text"
                value={author}
                className="form-control"
                placeholder="Enter Author Name"
                onChange={(e) => setAuthor(e.target.value)}
                required
              />
            </div>

            <input
              type="file"
              className="form-control-file border align-self-center mx-1 my-2"
            />
          </div>
          <button type="submit" className="btn btn-success btn-block my-2 ">
            Add new Book
          </button>
        </form>
      </div>
    </div>
  );
};
