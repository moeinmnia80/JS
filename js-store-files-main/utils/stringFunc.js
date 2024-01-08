const shortenText = (string) => {
  return string.split(" ").slice(0, 3).join(" ");
};

export default shortenText;
