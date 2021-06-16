class Color {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }
}

class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  getUserStats() {
    return `
      Name: ${this.name}
      Age: ${this.age}
      Email: ${this.email}
    `;
  }
}

const allColors = [
  new Color('brightred', '#E74C3C'),
  new Color('soothingpurple', '#9B59B6'),
  new Color('skyblue', '#5DADE2'),
  new Color('leafygreen', '#48C9B0'),
  new Color('sunkissedyellow', '#F4D03F'),
  new Color('groovygray', '#D7DBDD'),
];

exports.allColors = allColors;
exports.loadUserList = ['abc123','xyz321'];

exports.getRandomColor = () => {
  return allColors[Math.floor(Math.random() * allColors.length)];
}

exports.getBlue = () => {
  return allColors[2];
}

exports.numFormatter = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

exports.getUserClass = (name, age, email) => {
  const obj = new User(name, age, email);
  return  obj.getUserStats();
}

exports.isValidUserId = (userList, user) => {
  return userList.indexOf(user) >= 0;
}

exports.isValidUserIdAsync = (userList, user, callback) => {
  setTimeout(() => {
    callback(userList.indexOf(user) >= 0)
  }, 100);
}

exports.isAuthorizedPromise = (userList, user) => {
  return new Promise((resolve) => {
      setTimeout(() => {resolve(userList.indexOf(user) >= 0)}, 100);
  });
}

// console.log(module);
module.exports = exports;

//node
//colors = require('./index');
//colors.getRandomColor();
//colors.getBlue();