const { Navigation } = require('react-native-navigation');
const React = require('react');
import Login from './src/Login';
import Signup from './src/Signup';

Navigation.registerComponent('Login', () => Login);
Navigation.registerComponent('Signup', () => Signup);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Login'
            }
          }
        ]
      }
    }
  });
});
