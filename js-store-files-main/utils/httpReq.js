const BASE_URL = "https://fakestoreapi.com";
const postData = async (path, data) => {
  try {
    const response = await fetch(`${BASE_URL}/${path}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    return await response.json();
  } catch (e) {
    console.log(e.message);
  }
};
const fetchData = async (path) => {
  const response = await fetch(`${BASE_URL}/${path}`);
  return await response.json();
};

export { postData, fetchData };
