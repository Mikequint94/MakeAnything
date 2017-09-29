const APIsearch = (query) => {
  return $.ajax({
    method: "GET",
    url: "api/search",
    data: {query}
  });
};
export default APIsearch;
