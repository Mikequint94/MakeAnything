const APIsearch = (query) => {
  // debugger
  return $.ajax({
    method: "GET",
    url: "api/search",
    data: {query}
  });
};
export default APIsearch;
