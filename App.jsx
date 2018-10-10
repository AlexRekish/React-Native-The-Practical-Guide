import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/AuthScreen';
import FindPlaceScreen from './src/screens/FindPlaceScreen/FindPlaceScreen';
import SharePlaceScreen from './src/screens/SharePlaceScreen/SharePlaceScreen';
import PlaceDetailsScreen from './src/screens/PlaceDetails/PlaceDetails';
import SideDrawer from './src/screens/SideDrawer/SideDrawer';

import store from './src/store/store';
import { mainDark, contextYellow } from './colors';

Navigation.registerComponent('awesome-places.AuthScreen', () => AuthScreen, store, Provider);
Navigation.registerComponent(
  'awesome-places.FindPlaceScreen',
  () => FindPlaceScreen,
  store,
  Provider
);
Navigation.registerComponent(
  'awesome-places.SharePlaceScreen',
  () => SharePlaceScreen,
  store,
  Provider
);
Navigation.registerComponent('awesome-places.PlaceDetailsScreen', () => PlaceDetailsScreen);
Navigation.registerComponent('awesome-places.SideDrawer', () => SideDrawer);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'awesome-places.AuthScreen',
    title: 'Login',
    navigatorStyle: {
      navBarBackgroundColor: mainDark,
      navBarTextColor: contextYellow
    },
    navigatorButtons: {}
  }
});
