import React, { createContext, useReducer } from "react";
import BookReducer from "./BookReducer";

export const BookContext = createContext();

const initialState = {
  books: [
    { id: 1, title: "Learn Git", author: "Linus Travis" },
    { id: 2, title: "Learn React", author: "Mark Zuckerburg" },
  ],
};

export const BookContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BookReducer, initialState);

  const addBook = (poll) => {
    console.log(poll);
    dispatch({
      type: "ADD_Book",
      payload: poll,
    });
  };
  const removeBook = (id) => {
    dispatch({
      type: "REMOVE_Book",
      payload: id,
    });
  };
  return (
    <BookContext.Provider value={{ books: state.books, removeBook, addBook }}>
      {children}
    </BookContext.Provider>
  );
};
