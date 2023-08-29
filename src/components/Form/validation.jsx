export default function validation(user) {
    let errors = {};
    let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    let numbersRegex = /\d/;
  
    // if (!input.email) {
    //   errors.email = "Enter your email";
    // }
    if (!emailRegex.test(user.email)) {
      errors.email = "Invalid Regex email";
    }
    if (user.email.length >= 35) {
      errors.email = "No more than 35 characters please";
    }
    if (!numbersRegex.test(user.password)) {
      errors.password = "Password must contain a number";
    }
    if (user.password.length < 6 || user.password.length > 10) {
      errors.password = "Passwors must be between 6 and 10 characters";
    }
  
    return errors;
  }