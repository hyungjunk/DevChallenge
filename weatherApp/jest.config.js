// TODO(FUTURE) : 테스트 실행 속도가 너무 느려서 개선 방법 찾아보기.
module.exports = {
  testEnvironment: "jsdom",
  // testMatch: [
  //   "<rootDir>/src/__tests__/*.test.ts, <rootDir>/src/__tests__/*.test.tsx",
  // ],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js", "<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    ".(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/jest-config/file-mock.js",
    ".(css|less)$": "<rootDir>/jest-config/style-mock.js",
  },
  maxWorkers: 1,
};
