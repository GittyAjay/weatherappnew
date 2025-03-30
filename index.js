import { AppRegistry } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import App from './App';
import { name as appName } from './app.json';
import SearchPage from './src/components/Search';
import WeatherDeshboard from './src/screens/Weather';
import { store } from './src/store/store';

AppRegistry.registerComponent(appName, () => App);

Navigation.registerComponent('com.myApp.WeatherDeshboard', () => props => (
  <Provider store={store}>
    <WeatherDeshboard {...props} />
  </Provider>
));

Navigation.registerComponent('com.myApp.Search', () => props => (
  <Provider store={store}>
    <SearchPage {...props} />
  </Provider>
));

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'com.myApp.Search',
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
          {
            component: {
              name: 'com.myApp.WeatherDeshboard',
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
});
