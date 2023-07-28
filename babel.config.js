module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    'expo-router/babel',
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
      },
    ],
  ],
};
