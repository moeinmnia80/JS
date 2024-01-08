const fetchData = async () => {
  const response = await fetch("data.json");
  return await response.json();
};

export { fetchData };
