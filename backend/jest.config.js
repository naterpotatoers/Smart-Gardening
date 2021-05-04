module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverageFrom: ["src/*/**/*.ts"],
  testPathIgnorePatterns: ["/node_modules/", "tsbuild"],
  modulePathIgnorePatterns: ["<rootDir>/.*/__mocks__"],
  roots: ["src"],
};
