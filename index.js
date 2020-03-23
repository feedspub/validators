const isEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  if(!re.test(email)) throw new Error('Email should be in this form "xxx@xxx.xxx"');
}

const isUsername = (name) => {
  // Username may only contain alphanumeric characters or single hyphens
  const re = /^[a-zA-Z0-9\-\_]+$/;
  if(!re.test(name)) throw new Error('Acceptable characters: "a-z", "A-Z", "-" and "_"');
}

const isPassword = (password) => {
  if(password.length < 6) throw new Error('Password at least 8 characters');
}

module.exports = {
  isEmail,
  isUsername,
  isPassword,
}
