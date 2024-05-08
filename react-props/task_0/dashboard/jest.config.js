module.exports = {
    setupFilesAfterEnv: ['<rootDir>/config/setupTests.js'],
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
  };