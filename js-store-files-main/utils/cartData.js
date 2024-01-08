const getCartData = () => {
  return JSON.parse(localStorage.getItem("shopList"));
};
export default getCartData;
