module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform",
  },
};
