export default (state, action) => {
  switch (action.type) {
    case "ADD_Book":
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case "UPDATE_VOTE":
      return { books: action.payload };
    case "REMOVE_Book":
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    default:
      return state;
  }
};
