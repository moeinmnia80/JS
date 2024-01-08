const validateUsername = (username) => {
  const regex = /^[\w_]{4,16}$/;
  return regex.test(username);
};
const validatePassword = (password) => {
  const regex = /^.{6,}$/;
  return regex.test(password);
};

const validateForm = (username, password) => {
  const usernameValidated = validateUsername(username);
  const passwordValidated = validatePassword(password);
  if (usernameValidated && passwordValidated) {
    return true;
  } else if (!usernameValidated) {
    alert("Username is not valid");
  } else if (!passwordValidated) {
    alert("password should be grater than 8 characters");
  }
};

export default validateForm;
