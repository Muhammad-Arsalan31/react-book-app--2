import React from "react";
import "./App.css";
import { AddBook } from "./components/AddBook";
import { Books } from "./components/Books";
import { BookContextProvider } from "./context/BookContext";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <AddBook />
        <Books />
      </BookContextProvider>
    </div>
  );
}

export default App;
